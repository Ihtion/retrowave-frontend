<style scoped>
.root-container {
  height: 100%;
  background: linear-gradient(
    68.3deg,
    rgb(23, 41, 77) 35.3%,
    rgb(119, 33, 62) 99.9%
  );
  margin-top: 15px;
}
.right-area {
  margin-right: 20px;
}
.left-area {
  margin-left: 150px;
}
.users-list {
  margin-top: 80px;
}
.estimations-area {
  margin-top: 50px;
}
.leave-session {
  margin-top: 25px;
  margin-left: 15px;
}
.voting-comment {
  margin-top: 65px;
  margin-left: 10px;
}
.estimation-result {
  margin-top: 30px;
}
</style>

<template>
  <div class="root-container">
    <v-row>
      <v-col cols="12" sm="8" md="8" lg="8">
        <div class="left-area">
          <leave-session @exit="leaveSession" class="leave-session" />
          <div class="estimation-result">
            <estimations-result
              :voting-state="state"
              :estimations="estimations"
            />
          </div>
          <div class="voting-comment">
            <voting-comment :voting-comment="votingComment" />
          </div>
          <div class="estimations-area">
            <select-estimation
              @estimate="emitEstimation"
              :votingState="state"
            />
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
  </div>
</template>

<script>
import { PATHS } from '@/router/paths';
import { WsService } from '@/services';
import { VotingState } from '@/constants';

import UsersList from './UsersList';
import LeaveSession from './LeaveSession';
import VotingComment from './VotingComment';
import VotingProcess from './VotingProcess';
import SelectEstimation from './SelectEstimation';
import EstimationsResult from './EstimationsResult';

export default {
  name: 'GroomingSession',
  components: {
    VotingComment,
    EstimationsResult,
    SelectEstimation,
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

      if (this.userID === userID) {
        this.leaveSession();
      }
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
