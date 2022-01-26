<template>
  <q-form @submit.prevent="loginToAccount">
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
    <div class="row justify-end full-width">
      <q-btn
        :label="$t('inputs.login')"
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
import { useRouter } from 'vue-router';
import useAuth from 'src/composables/useAuth';

export default defineComponent({
  name: 'Login',
  setup() {
    const { loading, login } = useAuth();
    const router = useRouter();
    const form = reactive({
      email: '',
      password: '',
    });

    const loginToAccount = async () => {
      await login(form);
      router.push({ name: 'home' }).catch((err) => console.log(err));
    };

    return { loading, form, loginToAccount };
  },
});
</script>

<style></style>
