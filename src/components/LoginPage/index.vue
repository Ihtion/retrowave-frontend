<template>
  <v-row class="root">
    <v-col cols="12" sm="10" md="8" lg="4">
      <v-card class="elevation-12 card">
        <v-card-text>
          <v-tabs v-model="activeTab" centered background-color="grey-darken-4">
            <v-tab :value="TabNames.SIGN_IN" class="tab">
              <v-icon start> mdi-login </v-icon>
              Login
            </v-tab>
            <v-tab :value="TabNames.SIGN_UP" class="tab">
              <v-icon start> mdi-card-account-details </v-icon>
              Registration
            </v-tab>
          </v-tabs>

          <v-window v-model="activeTab" class="form">
            <v-window-item :value="TabNames.SIGN_IN">
              <sign-in-form ref="signInForm"></sign-in-form>
            </v-window-item>
            <v-window-item :value="TabNames.SIGN_UP">
              <sign-up-form
                @successSignUp="() => (this.activeTab = TabNames.SIGN_IN)"
                ref="signUpForm"
              ></sign-up-form>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const TabNames = {
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
};

export default {
  name: 'LoginPage',
  components: { SignUpForm, SignInForm },

  setup() {
    return { TabNames };
  },

  data() {
    return {
      activeTab: TabNames.SIGN_IN,
    };
  },

  methods: {
    clearForms() {
      this.$refs.signUpForm?.clearForm();
      this.$refs.signInForm?.clearForm();
    },
  },

  watch: {
    activeTab() {
      this.clearForms();
    },
  },
};
</script>

<style scoped>
.root {
  height: 100%;
  align-items: center;
  justify-content: center;
  background-image: url('../../assets/retroLogin.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.tab {
  width: 50%;
}
.card {
  border-radius: 15px;
}
.form {
  padding-top: 35px;
  margin-inline: 10px;
  margin-bottom: 15px;
}
</style>
