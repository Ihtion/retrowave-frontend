<template>
  <create-room></create-room>
  <ul>
    <li v-for="room in rooms" :key="room.id">
      {{ room.description }}
    </li>
  </ul>
</template>

<script>
import { ApiService } from '@/services';
import CreateRoom from '@/components/RoomsPage/CreateRoom';

export default {
  name: 'MyRooms',
  components: { CreateRoom },
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
