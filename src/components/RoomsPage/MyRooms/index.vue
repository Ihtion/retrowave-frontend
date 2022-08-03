<template>
  <ul>
    <li v-for="room in rooms" :key="room.id">
      {{ room.description }}
    </li>
  </ul>
</template>

<script>
import { ApiService } from '@/services';

export default {
  name: 'MyRooms',

  data() {
    return {
      rooms: [],
    };
  },

  async beforeMount() {
    this.rooms = await ApiService.getRooms();
  },
};
</script>

<style scoped></style>
