<template>
  <v-container>
    <v-row class="container">
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-text-field
          v-model="searchText"
          prepend-icon="mdi-magnify"
          label="Search by name"
          clearable
        />
      </v-col>
      <v-col cols="12" sm="5" md="5" lg="5" offset="1">
        <v-expansion-panels v-if="foundRoom" variant="popout">
          <v-expansion-panel rounded="xl">
            <v-expansion-panel-title class="found-room-title" color="#10051c">
              <div class="found-room-title-content">
                <div>{{ foundRoom.name }}</div>
                <v-btn
                  @click.stop="handleRoomSaving"
                  size="small"
                  class="save-btn"
                  variant="outlined"
                >
                  {{ foundRoomIsSaved ? 'Unsave' : 'Save' }}
                </v-btn>
              </div>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="found-room-description">
                {{ foundRoom.description }}
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ApiService } from '@/services';
import { useDebouncedRef } from '@/hooks';

export default {
  name: 'FindRoom',

  props: {
    savedRooms: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  emits: {
    roomSaving: null,
  },

  setup() {
    return {
      searchText: useDebouncedRef('', 500),
    };
  },

  data: () => ({
    foundRoom: null,
  }),

  watch: {
    async searchText(newSearchText) {
      await this.findRoom(newSearchText);
    },
  },

  computed: {
    foundRoomIsSaved() {
      return this.savedRooms.map(({ id }) => id).includes(this.foundRoom?.id);
    },
  },

  methods: {
    async findRoom(roomName) {
      if (roomName === '') {
        this.foundRoom = null;

        return;
      }

      try {
        this.foundRoom = await ApiService.getRoomByName(roomName);
      } catch (e) {
        this.foundRoom = null;
      }
    },

    async handleRoomSaving() {
      if (this.foundRoomIsSaved) {
        await ApiService.removeFromMyRooms(this.foundRoom?.id);
      } else {
        await ApiService.addToMyRooms(this.foundRoom?.id);
      }

      this.$emit('roomSaving');
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 25px;
}
.found-room-title {
  padding-block: 14px;
}
.found-room-title-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.save-btn {
  color: #fe3d76;
  margin-right: 20px;
}
.found-room-description {
  margin-top: 10px;
}
</style>
