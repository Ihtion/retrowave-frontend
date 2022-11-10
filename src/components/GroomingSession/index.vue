<template>
  <div>Session</div>
</template>

<script>
import { Manager } from 'socket.io-client';

import { SERVER_HOST } from '@/constants';

export default {
  name: 'GroomingSession',

  created() {
    const manager = new Manager(SERVER_HOST);

    const socket = manager.socket('/');

    socket.on('connect', () => {
      socket.emit('joinRoom', {
        userID: this.userID,
        roomID: this.$route.params.roomID,
      });
    });

    socket.on('userJoin', (...args) => {
      console.log('userJoin from ' + SERVER_HOST);
      console.log(args);
    });
  },

  computed: {
    userID() {
      return this.$store.getters.userID;
    },
  },
};
</script>

<style scoped></style>
