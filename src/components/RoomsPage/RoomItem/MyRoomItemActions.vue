<template>
  <td class="actions">
    <div class="buttons">
      <v-btn>Edit</v-btn>
      <v-btn @click="deleteRoom">Delete</v-btn>
    </div>
  </td>
</template>

<script>
import { useToast } from 'vue-toastification';

import { ApiService } from '@/services';
import { getApiErrorMessage } from '@/helpers';

import { Room } from './RoomType';

export default {
  name: 'MyRoomItemActions',

  setup() {
    const notificationToast = useToast();

    return { notificationToast };
  },

  props: {
    room: {
      type: Room,
      required: true,
    },
  },

  emits: {
    roomWasDeleted: null,
  },

  methods: {
    async deleteRoom() {
      try {
        await ApiService.deleteRoom(this.room.id);

        this.$emit('roomWasDeleted');
      } catch (error) {
        const errorMessage = getApiErrorMessage(error);

        if (errorMessage !== null) {
          this.notificationToast.error(errorMessage);
        }
      }
    },
  },
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
