<template>
  <v-dialog
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <template v-slot:activator>
      <slot name="activator"></slot>
    </template>
    <v-row justify="center">
      <v-card class="card">
        <v-card-title>
          <span class="text-h6">Confirm action</span>
        </v-card-title>
        <v-card-text class="card-text">{{ text }}</v-card-text>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="$emit('update:modelValue', false)"
          >
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('deletingConfirmed')">
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-dialog>
</template>

<script>
export default {
  name: 'ConfirmationModal',

  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: 'Are you sure you want to confirm this action?',
    },
  },

  emits: {
    deletingConfirmed: null,
    'update:modelValue': {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.card {
  width: 500px;
  border-radius: 15px !important;
}
.card-text {
  margin-left: 10px;
  margin-top: 14px;
}
</style>
