<template>
  <h1>Home</h1>
  <v-btn @click="logout">Logout</v-btn>
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
