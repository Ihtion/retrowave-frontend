<template>
  <v-theme-provider theme="dark" with-background>
    <v-app>
      <v-main>
        <v-container class="fill-height" fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
      <!--    <div id="nav">-->
      <!--      <router-link :to="$options.ROUTER_PATHS.SIGN_IN">Sign in</router-link>-->
      <!--      <router-link :to="$options.ROUTER_PATHS.SIGN_UP">Sign up</router-link>-->
      <!--    </div>-->
    </v-app>
  </v-theme-provider>
</template>

<script>
import { PATHS } from '@/router/paths';
import { ApiService } from '@/services';
import { ROUTER_PATHS } from '@/router';
import { SET_APP_IS_INITIALIZED, SET_IS_AUTH } from '@/store/mutationTypes';

export default {
  name: 'App',
  components: {},
  ROUTER_PATHS,

  async beforeMount() {
    await this.$router.push(PATHS.APP_LAUNCH);
    await this.initializeApp();
  },

  computed: {
    isInitialized() {
      return this.$store.getters.isAppInitialized;
    },
  },

  methods: {
    async initializeApp() {
      try {
        await ApiService.me();
        this.$store.commit(SET_IS_AUTH, { isAuth: true });
      } catch (error) {
        this.$store.commit(SET_IS_AUTH, { isAuth: false });
      } finally {
        this.$store.commit(SET_APP_IS_INITIALIZED);
      }
    },
  },

  watch: {
    isInitialized() {
      if (this.isInitialized) {
        this.$router.push(PATHS.HOME);
      } else {
        this.$router.push(PATHS.APP_LAUNCH);
      }
    },
  },
};
</script>

<style></style>
