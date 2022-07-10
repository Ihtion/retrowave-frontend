<template>
  <v-theme-provider theme="dark" with-background>
    <v-app>
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

export default {
  name: 'App',
  components: { Loader },

  computed: {
    isInitialized() {
      return this.$store.getters.isAppInitialized;
    },
  },
};
</script>

<style></style>
