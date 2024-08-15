<template>
  <div
    :class="{ container: true, dark: isDark, light: !isDark }"
    @click="toggleDark()"
  >
    <SunIcon class="icon light" v-if="!isDark" />

    <MoonIcon class="icon dark" v-else />
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { SunIcon, MoonIcon } from '@heroicons/vue/16/solid'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped lang="scss">
.container {
  width: 28px;
  height: 28px;

  border-radius: 50%;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &.light {
    box-shadow: 0 0 2px rgba($color: #000000, $alpha: 0.6);
  }

  &.dark {
    box-shadow: 0 0 2px rgba($color: #ffffff, $alpha: 0.8);
  }
}

.icon {
  width: 1rem;
  height: 1rem;
}

.light {
  color: rgba($color: #000000, $alpha: 0.8);
}

.dark {
  color: rgba($color: #ffffff, $alpha: 0.8);
}
</style>
