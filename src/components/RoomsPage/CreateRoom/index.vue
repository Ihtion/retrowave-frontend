<template>
  <v-dialog v-model="isOpen">
    <template v-slot:activator="{ attrs }">
      <div class="create-btn-container">
        <v-btn class="create-btn" v-bind="attrs" @click.stop="isOpen = true">
          Create room
        </v-btn>
      </div>
    </template>
    <v-row justify="center">
      <v-card class="elevation-12 card">
        <v-card-title>
          <span class="text-h6">Create new room</span>
        </v-card-title>
        <v-card-text class="card-text">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :rules="validationRules.name"
              label="Name"
              prepend-inner-icon="mdi-card-text"
              variant="outlined"
              class="name-field"
            ></v-text-field>
            <v-text-field
              v-model="description"
              :rules="validationRules.description"
              label="Description"
              prepend-inner-icon="mdi-note-text"
              variant="outlined"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="actions">
          <v-btn color="blue" text @click="isOpen = false"> Cancel </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!valid"
            @click="createRoom"
            :color="valid ? 'blue' : 'grey'"
            text
          >
            Save
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

import { validationRules } from './validationRules';

export default {
  name: 'CreateRoom',

  emits: {
    roomWasCreated: null,
  },

  setup() {
    const notificationToast = useToast();

    return { notificationToast, validationRules };
  },

  data() {
    return {
      isOpen: false,
      valid: false,
      name: '',
      description: '',
      // TODO add loading to button
      isLoading: false,
    };
  },

  watch: {
    isOpen() {
      if (!this.isOpen) {
        this.clearForm();
      }
    },
  },

  methods: {
    clearForm() {
      this.name = '';
      this.description = '';
    },

    async createRoom() {
      try {
        await ApiService.createRoom({
          name: this.name,
          description: this.description,
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
.card {
  width: 500px;
  border-radius: 15px !important;
}
.actions {
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 15px;
}
.card-text {
  padding-top: 15px;
  padding-inline: 25px;
}
.name-field {
  margin-bottom: 15px;
}
</style>
