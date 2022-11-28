<style scoped>
.right-area {
  margin-right: 20px;
}
.left-area {
  margin-left: 150px;
}
.users-list {
  margin-top: 50px;
}
.estimations-area {
  margin-top: 25px;
}
.leave-session {
  margin-top: 25px;
  margin-left: 15px;
}
.voting-comment {
  margin-top: 20px;
  margin-left: 15px;
}
.estimation-result {
  margin-top: 13vh;
  margin-left: 15px;
}
</style>

<template>
  <retro-background>
    <v-row>
      <v-col cols="12" sm="8" md="8" lg="8">
        <div class="left-area">
          <leave-session @exit="leaveSession" class="leave-session" />
          <div class="estimation-result">
            <v-chip v-if="showResult" size="x-large" color="green">
              Result: {{ estimationsResult }}
            </v-chip>
          </div>
          <div class="voting-comment">
            <v-chip size="x-large" color="yellow">
              Comment: {{ votingComment }}
            </v-chip>
          </div>
          <div class="estimations-area">
            <select-estimation @estimate="emitEstimation" :state="state" />
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="4" md="4" lg="4">
        <div class="right-area">
          <voting-process
            :votingInitiator="votingInitiator"
            :votingState="state"
            @startVoting="startVoting"
            @finishVoting="finishVoting"
          />
          <div class="users-list">
            <users-list
              :users="usersList"
              :estimations="estimations"
              :voting-state="state"
            />
          </div>
        </div>
      </v-col>
    </v-row>
  </retro-background>
</template>

<script>
import { PATHS } from '@/router/paths';
import { WsService } from '@/services';
import { VotingState } from '@/constants';
import RetroBackground from '@/components/RetroBackground';
import VotingProcess from '@/components/GroomingSession/VotingProcess';
import SelectEstimation from '@/components/GroomingSession/SelectEstimation';

import UsersList from './UsersList';
import LeaveSession from './LeaveSession';

export default {
  name: 'GroomingSession',
  components: {
    SelectEstimation,
    RetroBackground,
    VotingProcess,
    UsersList,
    LeaveSession,
  },

  setup() {
    return { wsService: null };
  },

  data() {
    return {
      usersList: [], // { userID, email, mode }
      state: VotingState.INIT,
      votingInitiator: null, // userID
      votingComment: null,
      estimations: {}, // { userID, estimate }
    };
  },

  created() {
    const socket = new WsService(this.userID, this.$route.params.roomID);

    this.wsService = socket;

    socket.onConnect();

    socket.onSessionData(
      ({
        votingState,
        usersList,
        votingInitiator,
        estimations,
        votingComment,
      }) => {
        this.state = votingState;
        this.usersList = usersList;
        this.votingInitiator = votingInitiator;
        this.votingComment = votingComment;
        this.estimations = estimations;
      }
    );

    socket.onUserJoin(({ userEmail, userID }) => {
      const userExists = this.usersList.find((user) => {
        return user.userID === userID;
      });

      if (!userExists) {
        this.usersList.push({ email: userEmail, userID });
      }
    });

    socket.onUserLeave(({ userID }) => {
      this.usersList = this.usersList.filter((user) => user.userID !== userID);
    });

    socket.onVotingStart(({ votingInitiator, votingComment }) => {
      this.state = VotingState.ACTIVE;
      this.votingInitiator = votingInitiator;
      this.votingComment = votingComment;
      this.estimations = {};
    });

    socket.onVotingFinish(() => {
      this.state = VotingState.FINISHED;
      this.votingInitiator = null;
    });

    socket.onEstimation(({ estimations }) => {
      this.estimations = estimations;
    });
  },

  beforeUnmount() {
    this.wsService.disconnect();
  },

  computed: {
    userID() {
      return this.$store.getters.userID;
    },
    showResult() {
      return (
        this.state === VotingState.FINISHED && this.estimationsResult !== null
      );
    },
    estimationsResult() {
      const estimations = Object.values(this.estimations);

      const result = Math.round(
        estimations.reduce((partialSum, estimate) => partialSum + estimate, 0) /
          estimations.length
      );

      if (!isNaN(result)) {
        return result;
      }

      return null;
    },
  },

  methods: {
    leaveSession() {
      this.wsService.disconnect();
      this.$router.push(PATHS.MY_ROOMS);
    },

    startVoting(votingComment) {
      this.wsService.emitVotingStart(votingComment);
    },

    finishVoting() {
      this.wsService.emitVotingFinish();
    },

    emitEstimation(estimation) {
      this.wsService.emitEstimation(estimation);
    },
  },
};
</script>
