<template>
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
  name: 'MyRoomItemActions',

  props: {
    room: {
      type: Room,
      required: true,
    },
  },

  methods: {},
};
</script>

<style scoped>
.actions {
  width: 200px;
}
.buttons {
  display: flex;
  justify-content: space-between;
}
</style>
