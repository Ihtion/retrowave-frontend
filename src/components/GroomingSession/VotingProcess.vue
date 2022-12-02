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
      v-model="votingComment"
      :disabled="canFinishVoting || !canStartVoting"
      label="Voting comment"
      variant="solo"
      hide-details
      clearable
      prepend-inner-icon="mdi-vuetify"
    ></v-text-field>
    <v-btn
      v-if="canFinishVoting"
      @click="finishVoting"
      rounded="lg"
      class="voting-btn"
      >Finish voting</v-btn
    >
    <v-btn
      v-else-if="canStartVoting"
      @click="startVoting"
      rounded="lg"
      class="voting-btn"
      >Start voting</v-btn
    >
    <v-btn v-else disabled rounded="lg" class="voting-btn">Start voting</v-btn>
  </div>
</template>

<script>
import { VotingState } from '@/constants';

export default {
  name: 'VotingProcess',

  data: () => ({
    votingComment: null,
  }),

  props: {
    votingInitiator: {
      type: String,
      default: '',
    },
    votingState: {
      type: String,
      required: true,
    },
  },

  emits: {
    startVoting: {
      type: String,
    },
    finishVoting: null,
  },

  methods: {
    startVoting() {
      this.$emit('startVoting', this.votingComment);

      this.votingComment = null;
    },
    finishVoting() {
      this.$emit('finishVoting');
    },
  },

  computed: {
    userID() {
      return this.$store.getters.userID;
    },
    canStartVoting() {
      return (
        this.votingState === VotingState.INIT ||
        this.votingState === VotingState.FINISHED
      );
    },
    canFinishVoting() {
      return (
        this.votingState === VotingState.ACTIVE &&
        this.userID === this.votingInitiator
      );
    },
  },
};
</script>
