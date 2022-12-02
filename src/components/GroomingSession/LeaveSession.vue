<template>
  <v-btn
    @click="leaveSession"
    size="large"
    prepend-icon="mdi-exit-to-app"
    class="leave-btn"
  >
    Leave
  </v-btn>
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

<style scoped>
.leave-btn {
  background-color: #1c2128;
}
</style>
