<template>
  <v-theme-provider theme="dark" with-background>
    <v-app>
      <top-bar v-if="isAuth"></top-bar>
      <v-main>
        <v-container class="fill-height" fluid>
          <router-view v-if="isInitialized"></router-view>
          <Loader v-else></Loader>
        </v-container>
      </v-main>
    </v-app>
  </v-theme-provider>
</template>

<script>
import Loader from '@/components/Loader';
import TopBar from '@/components/TopBar';

export default {
  name: 'App',
  components: { Loader, TopBar },

  computed: {
    isInitialized() {
      return this.$store.getters.isAppInitialized;
    },
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
};
</script>

<style scoped></style>
