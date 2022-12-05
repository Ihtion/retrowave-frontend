<template>
  <v-list-item :title="userEmail">
    <template v-slot:prepend>
      <v-list-item-action start>
        <div class="estimation-area">
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
          <span v-else class="estimation-text">{{ estimation }}</span>
        </div>
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

<style scoped>
.estimation-area {
  display: flex;
  width: 35px;
  justify-content: center;
  margin-top: 3px;
}

.estimation-text {
  font-size: 1rem;
  text-align: center;
  line-height: 1;
  color: #c6e2ff;
  animation: neon 0.08s ease-in-out infinite alternate;
}

@keyframes neon {
  from {
    text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),
      0 0 12px rgba(30, 132, 242, 0.52), 0 0 21px rgba(30, 132, 242, 0.92);
  }
  to {
    text-shadow: 0 0 6px rgba(202, 228, 225, 0.98),
      0 0 12px rgba(30, 132, 242, 0.58), 0 0 22px rgba(30, 132, 242, 0.84);
  }
}
</style>
