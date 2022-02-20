<template>
  <div id="nav">
    <router-link :to="$options.ROUTER_PATHS.SIGN_IN">Sign in</router-link>
    <router-link :to="$options.ROUTER_PATHS.SIGN_UP">Sign up</router-link>
  </div>

  <router-view></router-view>
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
