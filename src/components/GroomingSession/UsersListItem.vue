<template>
  <v-list-item :title="userEmail">
    <template v-slot:prepend>
      <v-list-item-action start>
        <v-icon
          v-if="VotingWithoutEstimation"
          icon="mdi-circle-small"
          color="black"
        ></v-icon>
        <v-icon
          v-else-if="activeVotingWithEstimation"
          icon="mdi-check"
          color="green"
        ></v-icon>
        <v-icon
          v-else-if="activeVotingWithoutEstimation"
          icon="mdi-dots-horizontal"
          color="yellow"
        ></v-icon>
        <v-chip v-else color="green" variant="outlined">{{
          estimation
        }}</v-chip>
      </v-list-item-action>
    </template>
  </v-list-item>
</template>

<script>
import { VotingState } from '@/constants';

export default {
  name: 'UsersListItem',

  props: {
    userEmail: {
      type: String,
    },
    estimation: {
      type: Number,
    },
    votingState: {
      type: String,
    },
  },

  computed: {
    activeVotingWithEstimation() {
      return (
        this.votingState === VotingState.ACTIVE && this.estimation !== null
      );
    },
    activeVotingWithoutEstimation() {
      return (
        this.votingState === VotingState.ACTIVE && this.estimation === null
      );
    },
    VotingWithoutEstimation() {
      return (
        this.votingState === VotingState.INIT ||
        (this.votingState === VotingState.FINISHED && this.estimation === null)
      );
    },
  },
};
</script>

<style scoped></style>
