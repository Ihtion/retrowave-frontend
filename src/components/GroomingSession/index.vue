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
      socket.emit('joinRoom', { userID: 8, roomID: 2 });
    });

    socket.on('joinRoom', (...args) => {
      console.log(args);
    });

    socket.onAny((eventName, ...args) => {
      console.log(eventName, args);
    });
  },
};
</script>

<style scoped></style>
