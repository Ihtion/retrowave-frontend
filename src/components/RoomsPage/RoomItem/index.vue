<template>
  <td>{{ room.description }}</td>
  <td>{{ room.key }}</td>
  <td class="password">
    <v-icon v-if="!room.password" icon="mdi-lock-open-outline"></v-icon>
    <v-icon v-else icon="mdi-lock-outline"></v-icon>
  </td>
  <slot name="actions"></slot>
</template>

<script>
import { Room } from './RoomType';

export default {
  name: 'RoomItem',

  props: {
    room: {
      type: Room,
      required: true,
    },
  },
};
</script>

<style scoped>
.password {
  text-align: center;
}
</style>
