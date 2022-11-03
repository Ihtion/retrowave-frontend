<template>
  <td class="actions">
    <div class="buttons">
      <v-btn @click.stop="unsaveRoom" variant="outlined" class="button">
        Unsave
      </v-btn>
    </div>
  </td>
</template>

<script>
import { useToast } from 'vue-toastification';

import { ApiService } from '@/services';
import { getApiErrorMessage } from '@/helpers';

export default {
  name: 'SavedRoomItemActions',

  setup() {
    return { notificationToast: useToast() };
  },

  props: {
    room: {
      type: Object,
      required: true,
    },
  },

  emits: {
    roomWasUnsaved: null,
  },

  methods: {
    async unsaveRoom() {
      try {
        await ApiService.removeFromSavedRooms(this.room.id);
        this.$emit('roomWasUnsaved');
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
  width: 135px;
}
.buttons {
  display: flex;
  justify-content: space-between;
}
.button {
  color: #fe3d76;
}
</style>
