<template>
  <leave-session @exit="leaveSession" />
  <users-list :users="usersList" />
  <voting-process
    :myConnectionID="myConnectionID"
    :votingInitiator="votingInitiator"
    :votingState="state"
    @startVoting="startVoting"
    @finishVoting="finishVoting"
  />
</template>

<script>
import { WsService } from '@/services';
import { PATHS } from '@/router/paths';

import UsersList from './UsersList';
import LeaveSession from './LeaveSession';
import VotingProcess from '@/components/GroomingSession/VotingProcess';

export default {
  name: 'GroomingSession',
  components: { VotingProcess, UsersList, LeaveSession },

  setup() {
    return { wsService: null };
  },

  data() {
    return {
      myConnectionID: null,
      usersList: [], // { connectionID, email, mode }
      state: 'init', // init / active / finished
      votingInitiator: null, // connectionID
      estimations: {}, // { connectionID, estimate }
    };
  },

  created() {
    const socket = new WsService(this.userID, this.$route.params.roomID);

    this.wsService = socket;

    socket.onConnect(({ socketID }) => {
      this.myConnectionID = socketID;
    });

    socket.onUserJoin(({ userEmail, connectionID }) => {
      const userExists = this.usersList.find(
        (user) => user.connectionID === connectionID
      );

      if (!userExists) {
        this.usersList.push({ email: userEmail, connectionID });
      }
    });

    socket.onUserLeave(({ connectionID }) => {
      this.usersList = this.usersList.filter(
        (user) => user.connectionID !== connectionID
      );
    });

    socket.onVotingStart(({ votingInitiator }) => {
      this.state = 'active';
      this.votingInitiator = votingInitiator;
    });

    socket.onVotingFinish(() => {
      this.state = 'finished';
      this.votingInitiator = null;
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

    startVoting() {
      this.wsService.emitVotingStart();
    },

    finishVoting() {
      this.wsService.emitVotingFinish();
    },
  },
};
</script>

<style scoped></style>
