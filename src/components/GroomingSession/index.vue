<template>
  <div>Session</div>
</template>

<script>
import { Manager } from 'socket.io-client';

import { SERVER_HOST } from '@/constants';

export default {
  name: 'GroomingSession',

  beforeMount() {
    const manager = new Manager(SERVER_HOST);

    const socket = manager.socket('/');

    socket.on('connect', () => {
      socket.emit('events', { message: 'hello from vue' });
    });
  },
};
</script>

<style scoped></style>
