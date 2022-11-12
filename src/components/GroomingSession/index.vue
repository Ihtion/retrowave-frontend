<template>
  <div>Session</div>
  <leave-session @exit="leaveSession" />
</template>

<script>
import { WsService } from '@/services';
import { PATHS } from '@/router/paths';

import LeaveSession from './LeaveSession';

export default {
  name: 'GroomingSession',
  components: { LeaveSession },

  setup() {
    return { wsService: null };
  },

  created() {
    this.wsService = new WsService(this.userID, this.$route.params.roomID);
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
