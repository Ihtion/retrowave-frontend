<template>
  <v-dialog v-model="isOpen">
    <template v-slot:activator="{ attrs }">
      <div class="create-btn-container">
        <v-btn class="create-btn" v-bind="attrs" @click.stop="isOpen = true">
          Create room
        </v-btn>
      </div>
    </template>
    <room-form
      @cancel="isOpen = false"
      @submit="createRoom"
      titleText="Create new room"
    ></room-form>
  </v-dialog>
</template>

<script>
import { useToast } from 'vue-toastification';

import { ApiService } from '@/services';
import { getApiErrorMessage } from '@/helpers';

import RoomForm from '../RoomForm';

export default {
  name: 'CreateRoom',
  components: { RoomForm },
  emits: {
    roomWasCreated: null,
  },

  setup() {
    return { notificationToast: useToast() };
  },

  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    async createRoom({ name, description }) {
      try {
        await ApiService.createRoom({
          name,
          description,
        });

        this.$emit('roomWasCreated');

        this.isOpen = false;
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
.create-btn-container {
  text-align: end;
}
.create-btn {
  border-radius: 12px;
  background: #0a0e25;
}
</style>
