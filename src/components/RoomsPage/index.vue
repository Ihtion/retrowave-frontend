<template>
  <retro-background>
    <v-tabs v-model="activeTab" background-color="grey-darken-4">
      <router-link class="tab-link" :to="PATHS.MY_ROOMS">
        <v-tab :value="TabNames.MY_ROOMS" class="tab">
          <v-icon start> mdi-target-account </v-icon>
          My rooms
        </v-tab>
      </router-link>
      <router-link class="tab-link" :to="PATHS.ALL_ROOMS">
        <v-tab :value="TabNames.ALL_ROOMS" class="tab">
          <v-icon start> mdi-earth </v-icon>
          All rooms
        </v-tab>
      </router-link>
    </v-tabs>

    <v-window v-model="activeTab">
      <v-window-item :value="TabNames.MY_ROOMS">
        <my-rooms v-if="activeTab === TabNames.MY_ROOMS"></my-rooms>
      </v-window-item>
      <v-window-item :value="TabNames.ALL_ROOMS">
        <all-rooms v-if="activeTab === TabNames.ALL_ROOMS"></all-rooms>
      </v-window-item>
    </v-window>
  </retro-background>
</template>

<script>
import { PATHS } from '@/router/paths';
import RetroBackground from '@/components/RetroBackground';

import MyRooms from '@/components/RoomsPage/MyRooms';
import AllRooms from '@/components/RoomsPage/AllRooms';

const TabNames = {
  MY_ROOMS: 'MY_ROOMS',
  ALL_ROOMS: 'ALL_ROOMS',
};

export default {
  name: 'RoomsPage',
  components: { AllRooms, RetroBackground, MyRooms },

  setup() {
    return { TabNames, PATHS };
  },

  beforeMount() {
    const currentPath = this.$route.path;

    if (currentPath === PATHS.ALL_ROOMS) {
      this.activeTab = TabNames.ALL_ROOMS;
    } else {
      this.activeTab = TabNames.MY_ROOMS;
    }
  },

  data() {
    return {
      activeTab: TabNames.MY_ROOMS,
    };
  },
};
</script>

<style scoped>
.tab-link {
  text-decoration: none;
}
.tab {
  min-width: 230px;
  color: #cfc2f8;
}
</style>
