<template>
  <v-row class="root"></v-row>
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

<style scoped>
.root {
  height: 100%;
  align-items: center;
  justify-content: center;
  background-image: url('../assets/retro.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
