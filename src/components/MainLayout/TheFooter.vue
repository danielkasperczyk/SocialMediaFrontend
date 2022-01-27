<template>
  <q-footer elevated class="bg-white">
    <div class="row">
      <div class="col-4 justify-center">
        <q-btn
          icon="home"
          :label="$t('global.home')"
          class="text-black full-width"
          flat
          @click="goTo('home')"
        >
        </q-btn>
      </div>
      <div class="col-4 position-relative">
        <q-btn
          v-if="isLogged"
          icon="add"
          class="absolute-center"
          @click="$emit('showDialog')"
          size="lg"
          round
          color="primary"
        >
        </q-btn>
      </div>
      <div class="col-4 justify-center">
        <q-btn
          :icon="isLogged ? 'person' : 'login'"
          :label="$t(isLogged ? 'global.profile' : 'global.login')"
          class="text-black full-width"
          flat
          @click="goTo(isLogged ? 'profile' : 'auth')"
        >
        </q-btn>
      </div>
    </div>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import useAuth from 'src/composables/useAuth';

export default defineComponent({
  name: 'TheFooter',
  emits: ['showDialog'],
  setup() {
    const router = useRouter();
    const { isLogged } = useAuth();

    const goTo = (name: string) => router.push({ name });

    return { isLogged, goTo };
  },
});
</script>

<style scoped>
::v-deep .q-btn__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

::v-deep i {
  margin: 0;
}
::v-deep .absolute-center {
  top: 0;
}
</style>
