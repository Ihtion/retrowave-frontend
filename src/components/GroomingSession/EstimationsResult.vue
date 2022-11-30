<template>
  <div class="container" :class="{ invisible: !showResult }">
    <span class="text">Voting result:</span>
    <span class="text estimation">{{ estimationsResult ?? 'Default' }}</span>
  </div>
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

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.invisible {
  opacity: 0;
  visibility: hidden;
}

.text {
  font-size: 1.7rem;
  text-align: center;
  line-height: 1;
  color: #c6e2ff;
  animation: neon 0.08s ease-in-out infinite alternate;
}

.estimation {
  font-size: 4.5rem;
  margin-top: 25px;
}

@keyframes neon {
  from {
    text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),
      0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52),
      0 0 21px rgba(30, 132, 242, 0.92), 0 0 34px rgba(30, 132, 242, 0.78),
      0 0 54px rgba(30, 132, 242, 0.92);
  }
  to {
    text-shadow: 0 0 6px rgba(202, 228, 225, 0.98),
      0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(30, 132, 242, 0.58),
      0 0 22px rgba(30, 132, 242, 0.84), 0 0 38px rgba(30, 132, 242, 0.88),
      0 0 60px rgba(30, 132, 242, 1);
  }
}
</style>
