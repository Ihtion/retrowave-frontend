<template>
  <td class="actions">
    <div class="buttons">
      <v-dialog v-model="updateModalIsOpen">
        <template v-slot:activator="{ attrs }">
          <v-btn
            class="button"
            variant="outlined"
            v-bind="attrs"
            @click.stop="updateModalIsOpen = true"
          >
            Edit
          </v-btn>
        </template>
        <room-form
          @submit="updateRoom"
          @cancel="updateModalIsOpen = false"
          titleText="Update room"
          :initial-description="room.description"
          :initial-name="room.name"
        ></room-form>
      </v-dialog>

      <confirmation-modal
        v-model="deleteModalIsOpen"
        @deletingConfirmed="deleteRoom"
        :text="deletingConfirmationText"
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

import RoomForm from '../RoomForm';

export default {
  name: 'OwnRoomActions',
  components: { ConfirmationModal, RoomForm },

  setup() {
    return { notificationToast: useToast() };
  },

  data: () => ({
    deleteModalIsOpen: false,
    updateModalIsOpen: false,
  }),

  props: {
    room: {
      type: Object,
      required: true,
    },
  },

  emits: {
    roomUpdate: null,
    roomDelete: null,
  },

  methods: {
    async deleteRoom() {
      try {
        await ApiService.deleteRoom(this.room.id);

        this.deleteModalIsOpen = false;

        this.$emit('roomDelete');
      } catch (error) {
        const errorMessage = getApiErrorMessage(error);

        if (errorMessage !== null) {
          this.notificationToast.error(errorMessage);
        }
      }
    },

    async updateRoom({ name, description }) {
      try {
        await ApiService.updateRoom(this.room.id, { name, description });

        this.updateModalIsOpen = false;

        this.$emit('roomUpdate');
      } catch (error) {
        const errorMessage = getApiErrorMessage(error);

        if (errorMessage !== null) {
          this.notificationToast.error(errorMessage);
        }
      }
    },
  },

  computed: {
    deletingConfirmationText() {
      return `Are you sure you want to delete "${this.room.name}" room?`;
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
