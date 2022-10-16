<template>
  <td>{{ room.description }}</td>
  <td>{{ room.key }}</td>
  <td class="password">
    <v-icon v-if="!room.password" icon="mdi-lock-open-outline"></v-icon>
    <v-icon v-else icon="mdi-lock-outline"></v-icon>
  </td>
  <td class="actions">
    <div class="buttons">
      <v-btn>Edit</v-btn>
      <v-btn>Delete</v-btn>
    </div>
  </td>
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
.actions {
  width: 200px;
}
.buttons {
  display: flex;
  justify-content: space-between;
}
</style>
