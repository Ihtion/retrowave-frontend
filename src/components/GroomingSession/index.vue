<template>
  <leave-session @exit="leaveSession" />
  <users-list :users="usersList" />
</template>

<script>
import { WsService } from '@/services';
import { PATHS } from '@/router/paths';

import UsersList from './UsersList';
import LeaveSession from './LeaveSession';

export default {
  name: 'GroomingSession',
  components: { UsersList, LeaveSession },

  setup() {
    return { wsService: null };
  },

  data() {
    return {
      usersList: [], // { connectionID, email, mode }
      state: '', // init / active / finished
      estimations: {}, // { connectionID, estimate }
    };
  },

  created() {
    const socket = new WsService(this.userID, this.$route.params.roomID);

    this.wsService = socket;

    socket.onConnect();

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
  },
};
</script>

<style scoped></style>
