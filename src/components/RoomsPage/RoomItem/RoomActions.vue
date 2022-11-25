<template>
  <td class="actions">
    <div class="buttons">
      <v-btn
        v-if="isMyRoom"
        @click.stop="forgetRoom"
        variant="outlined"
        class="button"
      >
        Forget
      </v-btn>
      <v-btn
        v-else
        @click.stop="rememberRoom"
        variant="outlined"
        class="button"
      >
        Remember
      </v-btn>
    </div>
  </td>
</template>

<script>
import { useToast } from 'vue-toastification';

import { ApiService } from '@/services';
import { getApiErrorMessage } from '@/helpers';

export default {
  name: 'RoomActions',

  setup() {
    return { notificationToast: useToast() };
  },

  props: {
    room: {
      type: Object,
      required: true,
    },
    isMyRoom: {
      type: Boolean,
      default: false,
    },
  },

  emits: {
    rememberRoomToggle: null,
  },

  methods: {
    async forgetRoom() {
      try {
        await ApiService.removeFromMyRooms(this.room.id);
        this.$emit('rememberRoomToggle');
      } catch (error) {
        const errorMessage = getApiErrorMessage(error);

        if (errorMessage !== null) {
          this.notificationToast.error(errorMessage);
        }
      }
    },

    async rememberRoom() {
      try {
        await ApiService.addToMyRooms(this.room.id);
        this.$emit('rememberRoomToggle');
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
  justify-content: center;
}
.button {
  color: #fe3d76;
}
</style>
