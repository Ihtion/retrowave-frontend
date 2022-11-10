<template>
  <td @click="openGroomingSession" class="item-cell">{{ room.name }}</td>
  <td @click="openGroomingSession" class="item-cell">{{ room.description }}</td>
  <td @click="openGroomingSession" class="password">
    <v-icon v-if="!room.password" icon="mdi-lock-open-outline"></v-icon>
    <v-icon v-else icon="mdi-lock-outline"></v-icon>
  </td>
  <slot name="actions"></slot>
</template>

<script>
import { PATHS } from '@/router/paths';

export default {
  name: 'RoomItem',

  setup() {
    return { PATHS };
  },

  props: {
    room: {
      type: Object,
      required: true,
    },
  },

  methods: {
    openGroomingSession() {
      this.$router.push({
        name: 'Session',
        params: { roomID: this.room.id },
      });
    },
  },
};
</script>

<style scoped>
.item-cell {
  cursor: pointer;
  font-size: 17px !important;
  font-weight: 500 !important;
}
.password {
  cursor: pointer;
  text-align: center;
}
</style>
