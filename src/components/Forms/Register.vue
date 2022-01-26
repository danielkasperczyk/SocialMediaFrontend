<template>
  <q-form @submit.prevent="createAccount">
    <q-input
      v-model="form.email"
      :label="$t('inputs.email')"
      :loading="loading"
      name="email"
      class="q-my-md"
    ></q-input>
    <q-input
      v-model="form.password"
      :label="$t('inputs.password')"
      :loading="loading"
      type="password"
      name="password"
      class="q-mb-md"
    ></q-input>
    <q-input
      v-model="form.username"
      :label="$t('inputs.username')"
      :loading="loading"
      name="username"
      class="q-mb-md"
    ></q-input>
    <div class="row justify-end full-width">
      <q-btn
        :label="$t('inputs.signIn')"
        :loading="loading"
        type="submit"
        color="primary"
        class="q-mt-md"
      ></q-btn>
    </div>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import useAuth from 'src/composables/useAuth';

export default defineComponent({
  name: 'Register',
  setup() {
    const { loading, register } = useAuth();
    const form = reactive({
      email: '',
      password: '',
      username: '',
    });

    const createAccount = async () => {
      await register(form);
    };

    return { loading, form, createAccount };
  },
});
</script>

<style></style>
