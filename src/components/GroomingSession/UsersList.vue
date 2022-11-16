<template>
  <v-card>
    <v-list>
      <v-list-subheader inset>Users</v-list-subheader>
      <users-list-item
        v-for="user in users"
        :key="user.connectionID"
        :userEmail="user.email"
        :estimation="getEstimation(user.connectionID)"
        :voting-state="votingState"
      >
      </users-list-item>
    </v-list>
  </v-card>
</template>

<script>
import UsersListItem from './UsersListItem';

export default {
  name: 'UsersList',
  components: { UsersListItem },
  props: {
    users: {
      type: Array,
      default() {
        return [];
      },
    },
    estimations: {
      type: Object,
      default() {
        return {};
      },
    },
    votingState: {
      type: String,
    },
  },

  methods: {
    getEstimation(connectionID) {
      return this.estimations[connectionID] ?? null;
    },
  },
};
</script>

<style scoped></style>
