<template>
  <v-btn @click="leaveSession">Leave session</v-btn>
</template>

<script>
export default {
  name: 'LeaveSession',

  emits: {
    exit: null,
  },

  methods: {
    leaveSession() {
      this.$emit('exit');
    },
  },
};
</script>

<style scoped></style>
