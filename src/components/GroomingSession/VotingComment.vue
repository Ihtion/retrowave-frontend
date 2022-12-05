<template>
  <div class="text" :class="{ invisible: !votingComment }">
    <p>{{ votingComment || 'Default' }}</p>
  </div>
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

<style scoped>
.text {
  border-left: 5px solid;
  margin-left: 0;
  padding: 0.7rem 0 0.7rem 2rem;
  font-size: 2.6rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    35deg,
    hsl(310, 29%, 65%),
    hsl(160, 100%, 65%)
  );
}
.invisible {
  opacity: 0;
  visibility: hidden;
}
</style>
