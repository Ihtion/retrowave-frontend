<template>
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
      :rules="validationRules.passwordConfirmation.concat(passwordsMatchRule)"
      label="Password confirmation"
      prepend-inner-icon="mdi-lock-plus"
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
      >Sign up</v-btn
    >
  </div>
</template>

<script>
import { useToast } from 'vue-toastification';

import { ApiService } from '@/services';
import { getApiErrorMessage } from '@/helpers';

import { defaultValues } from './defaultValues';
import { validationRules } from './validationRules';

export default {
  name: 'SignUp',

  setup() {
    const notificationToast = useToast();
    return { notificationToast, validationRules };
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
          email: this.email.trim(),
          password: this.password,
        });
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
