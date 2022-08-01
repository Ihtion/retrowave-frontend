<template>
  <h1>Home</h1>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'HomePage',

  methods: {
    ...mapActions(['logout']),
  },
};
</script>

<style scoped></style>
