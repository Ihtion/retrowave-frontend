<template>
  <v-dialog v-model="isOpen" persistent>
    <v-row justify="center">
      <v-card class="elevation-12 card">
        <v-card-title class="card-title">
          <span class="text-h6">Password is required to enter this room</span>
        </v-card-title>
        <v-card-text class="card-text">
          <v-text-field
            type="password"
            v-model="password"
            label="Password"
            prepend-inner-icon="mdi-lock"
            variant="outlined"
            class="password-field"
            name="password"
          />
        </v-card-text>
        <v-card-actions class="actions">
          <v-btn color="blue" text @click="$emit('cancel')"> Cancel </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!password"
            @click="submit"
            :color="password ? 'blue' : 'grey'"
            text
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-dialog>
</template>

<script>
import { useToast } from 'vue-toastification';

import { ApiService } from '@/services';
import { getApiErrorMessage } from '@/helpers';

export default {
  name: 'PasswordDialog',

  props: {
    roomID: {
      type: String,
      required: true,
    },
  },

  emits: {
    success: null,
    cancel: null,
  },

  setup() {
    const notificationToast = useToast();

    return { notificationToast };
  },

  data() {
    return { isOpen: true, password: '' };
  },

  methods: {
    async submit() {
      try {
        await ApiService.checkRoomPassword(this.roomID, this.password);

        this.$emit('success');
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
.card {
  width: 500px;
  border-radius: 15px !important;
}
.card-title {
  margin-top: 15px;
  margin-inline: 12px;
}
.card-text {
  padding-top: 15px;
  padding-inline: 25px;
}
</style>
