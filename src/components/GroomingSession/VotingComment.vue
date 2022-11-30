<template>
  <v-chip size="x-large" color="yellow"> Comment: {{ votingComment }} </v-chip>
</template>

<script>
export default {
  name: 'VotingComment',

  props: {
    votingComment: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped></style>
