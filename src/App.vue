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
import { ROUTER_PATHS } from '@/router';

export default {
  name: 'App',
  components: {},

  ROUTER_PATHS,
};
</script>

<style></style>
