<template>
  <v-row>
    <estimation-card
      v-for="estimation in possibleEstimations"
      :key="estimation"
      :text="estimation"
      :isSelected="selected === estimation"
      :disabled="!selectionEnabled"
      @click="selected = estimation"
    />
  </v-row>
</template>

<script>
import { POSSIBLE_ESTIMATIONS, VotingState } from '@/constants';
import EstimationCard from '@/components/GroomingSession/EstimationCard';

export default {
  name: 'SelectEstimation',
  components: { EstimationCard },
  setup() {
    return { possibleEstimations: POSSIBLE_ESTIMATIONS };
  },

  data() {
    return {
      selected: null,
    };
  },

  props: {
    votingState: {
      type: String,
    },
  },

  emits: {
    estimate: {
      type: Number,
    },
  },

  computed: {
    selectionEnabled() {
      return this.votingState === VotingState.ACTIVE;
    },
  },

  watch: {
    votingState() {
      if (this.votingState === VotingState.ACTIVE) {
        this.selected = null;
      }
    },

    selected() {
      this.$emit('estimate', this.selected);
    },
  },
};
</script>

<style scoped></style>
