<style scoped>
.root {
  display: flex;
  align-items: center;
}
.voting-btn {
  margin-left: 20px;
}
</style>

<template>
  <div class="root">
    <v-text-field
      :disabled="canFinishVoting"
      label="Voting comment"
      variant="solo"
      hide-details
    ></v-text-field>
    <v-btn
      v-if="canStartVoting"
      @click="startVoting"
      rounded="lg"
      class="voting-btn"
      >Start voting</v-btn
    >
    <v-btn
      v-if="canFinishVoting"
      @click="finishVoting"
      rounded="lg"
      class="voting-btn"
      >Finish voting</v-btn
    >
  </div>
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
