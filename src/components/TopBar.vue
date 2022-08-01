<template>
  <v-app-bar color="grey-darken-4" name="top-bar" class="justify-center">
    <div class="d-flex justify-end align-center w-100">
      <p class="email">{{ userEmail }}</p>
      <v-btn
        prepend-icon="mdi-logout-variant"
        variant="outlined"
        @click="logout"
        color="primary"
        >Logout</v-btn
      >
    </div>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TopBar',

  methods: {
    ...mapActions(['logout']),
  },

  computed: {
    userEmail() {
      return this.$store.getters.userEmail;
    },
  },
};
</script>

<style scoped>
.email {
  margin-right: 40px;
}
</style>
