<template>
  <v-row class="root">
    <v-col cols="12" sm="12" md="12" lg="8">
      <create-room></create-room>
      <my-rooms-table></my-rooms-table>
    </v-col>
  </v-row>
</template>

<script>
import CreateRoom from '../CreateRoom';

import MyRoomsTable from './MyRoomsTable';

export default {
  name: 'MyRooms',
  components: { MyRoomsTable, CreateRoom },
  data() {
    return {};
  },
};
</script>

<style scoped>
.root {
  margin-top: 50px;
  margin-inline: 20px;
  justify-content: center;
}
</style>
