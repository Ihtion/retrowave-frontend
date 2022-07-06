<template>
  <v-row class="root">
    <v-col cols="12" sm="10" md="8" lg="4">
      <v-card
        class="elevation-12 card"
        prepend-icon="mdi-card-account-details"
        title="Registration on Retrowave"
      >
        <v-card-text class="card-text">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="validationRules.email"
              label="E-mail"
              prepend-inner-icon="mdi-email"
              variant="outlined"
            ></v-text-field>
            <v-text-field
              type="password"
              autocomplete="on"
              v-model="password"
              :rules="validationRules.password"
              label="Password"
              prepend-inner-icon="mdi-lock"
              variant="outlined"
              counter="50"
            ></v-text-field>
            <v-text-field
              type="password"
              autocomplete="on"
              v-model="passwordConfirmation"
              :rules="
                validationRules.passwordConfirmation.concat(passwordsMatchRule)
              "
              label="Password confirmation"
              prepend-inner-icon="mdi-lock-plus"
              variant="outlined"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="card-actions">
          <v-btn
            block
            variant="outlined"
            rounded="pill"
            size="large"
            :disabled="!valid"
            :loading="isLoading"
            @click="submitForm"
            >Sign up</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { useToast } from 'vue-toastification';

import { PATHS } from '@/router/paths';
import { defaultValues } from './defaultValues';
import { ApiService } from '@/services/apiService';
import { validationRules } from './validationRules';

export default {
  name: 'SignUp',

  setup() {
    const toast = useToast();

    return { toast, validationRules };
  },

  data: () => ({
    valid: true,
    isLoading: false,

    email: defaultValues.email,
    password: defaultValues.password,
    passwordConfirmation: defaultValues.passwordConfirmation,
  }),

  computed: {
    passwordsMatchRule() {
      return (
        this.password === this.passwordConfirmation || 'Passwords didn’t match'
      );
    },
  },

  methods: {
    async submitForm() {
      this.isLoading = true;

      try {
        await ApiService.signUp({
          email: this.email,
          password: this.password,
        });

        await this.$router.push(PATHS.SIGN_IN);
      } catch (error) {
        const [errorMessage] = error?.response?.data?.message || null;

        if (errorMessage !== null) {
          this.toast.error(errorMessage);
        }
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.root {
  height: 100%;
  align-items: center;
  justify-content: center;
  background-image: url('../../assets/retro.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.card {
  border-radius: 15px;
}
.card-text {
  padding-bottom: 0;
}
.card-actions {
  justify-content: center;
  padding-inline: 25px;
  padding-top: 0;
  padding-bottom: 25px;
}
</style>
