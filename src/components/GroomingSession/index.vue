<template>
  <div class="no-session">
    <session-room v-if="userHasAccess" />
    <div v-if="showPasswordForm">
      <password-dialog
        :roomID="roomID"
        @cancel="leave"
        @success="userHasAccess = true"
      />
    </div>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification';

import { PATHS } from '@/router/paths';
import { ApiService } from '@/services';
import { getApiErrorMessage } from '@/helpers';

import SessionRoom from './SessionRoom';
import PasswordDialog from './PasswordDialog';

export default {
  name: 'GroomingSession',
  components: { PasswordDialog, SessionRoom },

  data() {
    return {
      userHasAccess: false,
      roomInfoLoaded: false,
    };
  },

  setup() {
    const notificationToast = useToast();

    return { notificationToast };
  },

  created() {
    ApiService.getRoomByID(this.roomID)
      .then(({ userHasAccess }) => {
        this.roomInfoLoaded = true;

        if (userHasAccess) {
          this.userHasAccess = true;
        }
      })
      .catch((error) => {
        if (error?.response?.status === 404) {
          this.leave();
        } else {
          const errorMessage = getApiErrorMessage(error);

          if (errorMessage !== null) {
            this.notificationToast.error(errorMessage);
          }
        }
      });
  },

  methods: {
    leave() {
      this.$router.push(PATHS.MY_ROOMS);
    },
  },

  computed: {
    roomID() {
      return this.$route.params.roomID;
    },

    showPasswordForm() {
      return this.roomInfoLoaded && !this.userHasAccess;
    },
  },
};
</script>

<style scoped>
.no-session {
  height: 100%;
  background: linear-gradient(
    68.3deg,
    rgb(23, 41, 77) 35.3%,
    rgb(119, 33, 62) 99.9%
  );
}
</style>
