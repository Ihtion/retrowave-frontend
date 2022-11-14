<template>
  <v-btn v-if="canStartVoting" @click="startVoting">Start voting</v-btn>
  <v-btn v-if="canFinishVoting" @click="finishVoting">Finish voting</v-btn>
</template>

<script>
export default {
  name: 'VotingProcess',

  props: {
    myConnectionID: {
      type: String,
      default: '',
    },
    votingInitiator: {
      type: String,
      default: '',
    },
    votingState: {
      type: String,
      default: 'init',
    },
  },

  emits: {
    startVoting: null,
    finishVoting: null,
  },

  methods: {
    startVoting() {
      this.$emit('startVoting');
    },
    finishVoting() {
      this.$emit('finishVoting');
    },
  },

  computed: {
    canStartVoting() {
      return this.votingState === 'init' || this.votingState === 'finished';
    },
    canFinishVoting() {
      return (
        this.votingState === 'active' &&
        this.myConnectionID === this.votingInitiator
      );
    },
  },
};
</script>

<style scoped></style>
