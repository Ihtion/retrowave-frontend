<template>
  <td class="actions">
    <div class="buttons">
      <v-btn>Enter</v-btn>
      <v-btn>Unsave</v-btn>
    </div>
  </td>
</template>

<script>
import { Room } from './RoomType';

export default {
  name: 'SavedRoomItemActions',

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
  width: 220px;
}
.buttons {
  display: flex;
  justify-content: space-between;
}
</style>
