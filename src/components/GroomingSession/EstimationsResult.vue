<template>
  <v-chip v-if="showResult" size="x-large" color="green">
    Result: {{ estimationsResult }}
  </v-chip>
  <v-chip v-else size="x-large" color="green"> Result: no results </v-chip>
</template>

<script>
import { VotingState } from '@/constants';

export default {
  name: 'EstimationsResult',

  props: {
    votingState: {
      type: String,
      required: true,
    },
    estimations: {
      type: Object,
      required: true,
    },
  },

  computed: {
    estimationsResult() {
      const estimations = Object.values(this.estimations);

      let sum = 0;
      let votersAmount = 0;

      for (const estimation of estimations) {
        if (Number.isInteger(estimation)) {
          sum += estimation;
          votersAmount++;
        }
      }

      if (votersAmount === 0) {
        return null;
      }

      return Math.round(sum / votersAmount);
    },
    showResult() {
      return (
        this.votingState === VotingState.FINISHED &&
        this.estimationsResult !== null
      );
    },
  },
};
</script>

<style scoped></style>
