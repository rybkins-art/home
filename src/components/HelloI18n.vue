<template>
  <p>{{ t('hello') }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'hello-i18n',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    // Something todo ..

    return { t };
  },
});
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
