<template>
  <v-form ref="form" v-model="valid" lazy-validation class="form-fields">
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
    ></v-text-field>
  </v-form>
  <div>
    <v-btn
      block
      variant="outlined"
      rounded="pill"
      size="large"
      :disabled="!valid"
      :loading="isLoading"
      @click="submitForm"
      >Sign in</v-btn
    >
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { useToast } from 'vue-toastification';

import { getApiErrorMessage } from '@/helpers';

import { validationRules } from './validationRules';

export default {
  name: 'SignInForm',

  setup() {
    const notificationToast = useToast();

    return { notificationToast, validationRules };
  },

  data: () => ({
    valid: false,
    isLoading: false,

    email: '',
    password: '',
  }),

  methods: {
    ...mapActions(['login']),

    async submitForm() {
      this.isLoading = true;

      try {
        await this.login({ email: this.email.trim(), password: this.password });
      } catch (error) {
        const errorMessage = getApiErrorMessage(error);

        if (errorMessage !== null) {
          this.notificationToast.error(errorMessage);
        }
      } finally {
        this.isLoading = false;
      }
    },

    clearForm() {
      this.$refs.form.reset();
    },
  },
};
</script>
