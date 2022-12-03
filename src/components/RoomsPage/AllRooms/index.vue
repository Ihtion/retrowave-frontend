<template>
  <v-row class="root">
    <v-col cols="12" sm="12" md="12" lg="8">
      <rooms-search v-model="search"></rooms-search>
      <rooms-table
        :rooms="rooms"
        :myRoomsIDs="myRoomsIDs"
        @roomChange="getRooms"
      ></rooms-table>
      <div class="text-center">
        <v-container>
          <v-row justify="center">
            <v-col cols="8">
              <v-container class="max-width">
                <v-pagination
                  v-model="page"
                  class="my-4"
                  :length="paginationLength"
                ></v-pagination>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { ApiService } from '@/services';

import RoomsTable from '../RoomsTable';

import RoomsSearch from './RoomsSearch';

export default {
  name: 'AllRooms',
  components: { RoomsSearch, RoomsTable },

  data() {
    return {
      rooms: [],
      myRoomsIDs: [],
      search: '',
      page: 1,
      total: 0,
      rowsPerPage: 6,
    };
  },

  computed: {
    paginationLength() {
      return Math.ceil(this.total / this.rowsPerPage);
    },
  },

  watch: {
    page() {
      this.getRooms();
    },

    search() {
      this.page = 1;
      this.getRooms();
    },
  },

  methods: {
    async getRooms() {
      const { rooms, total } = await ApiService.getAllRooms({
        limit: this.rowsPerPage,
        offset: (this.page - 1) * this.rowsPerPage,
        search: this.search,
      });

      const myRooms = await ApiService.getMyRooms();

      this.total = total;
      this.rooms = rooms;
      this.myRoomsIDs = myRooms.map((room) => room.id);
    },
  },

  async beforeMount() {
    await this.getRooms();
  },
};
</script>

<style scoped>
.root {
  margin-inline: 20px;
  justify-content: center;
}
</style>
