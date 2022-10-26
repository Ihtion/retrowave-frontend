<template>
  <td class="actions">
    <div class="buttons">
      <v-btn variant="outlined" class="button">Edit</v-btn>
      <confirmation-modal
        v-model="deleteModalIsOpen"
        @deletingConfirmed="deleteRoom"
        text="Are you sure you want to remove this room?"
      >
        <template v-slot:activator>
          <v-btn
            variant="outlined"
            class="button"
            @click.stop="deleteModalIsOpen = true"
          >
            Delete
          </v-btn>
        </template>
      </confirmation-modal>
    </div>
  </td>
</template>

<script>
import { useToast } from 'vue-toastification';

import { ApiService } from '@/services';
import { getApiErrorMessage } from '@/helpers';
import ConfirmationModal from '@/components/ConfirmationModal';

export default {
  name: 'MyRoomItemActions',
  components: { ConfirmationModal },

  setup() {
    return { notificationToast: useToast() };
  },

  data: () => ({
    deleteModalIsOpen: false,
  }),

  props: {
    room: {
      type: Object,
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

        this.deleteModalIsOpen = false;

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
  width: 210px;
}
.buttons {
  display: flex;
  justify-content: space-between;
}
.button {
  color: #fe3d76;
}
</style>
