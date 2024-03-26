<template>
  <div
    class="container"
    :style="{ marginBlock: margin ?? 0 }"
    @click="toggleCheck"
  >
    <div
      :style="{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }"
    >
      <svg width="24" height="24">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          :style="{
            transition: 'all 0.2s',
            stroke: isDisable ? 'gray' : color,
            fill: isChecked ? (isDisable ? 'gray' : color) : 'transparent'
          }"
          strokeWidth="0.8"
        />
        <polyline
          v-if="isChecked"
          class="line"
          points="5,12 10,17 19,8"
          strokeWidth="1.5"
          style="stroke: white"
          fill="transparent"
        />

        <line
          v-if="isDisable"
          x1="2"
          y1="22"
          x2="22"
          y2="2"
          :style="{ stroke: isDisable ? 'gray' : color }"
          strokeWidth="1"
          fill="transparent"
        />

        <line
          x1="0"
          y1="1"
          x2="4"
          y2="1"
          :style="{ stroke: isDisable ? 'gray' : color }"
          strokeWidth="2"
          fill="transparent"
        />

        <line
          x1="4"
          y1="0"
          x2="24"
          y2="0"
          :style="{ stroke: isDisable ? 'gray' : color }"
          strokeWidth="1"
          fill="transparent"
        />

        <line
          x1="0"
          y1="4"
          x2="0"
          y2="16"
          :style="{ stroke: isDisable ? 'gray' : color }"
          strokeWidth="1"
          fill="transparent"
        />

        <line
          x1="0"
          y1="18"
          x2="0"
          y2="20"
          :style="{ stroke: isDisable ? 'gray' : color }"
          strokeWidth="1"
          fill="transparent"
        />

        <line
          x1="0"
          y1="24"
          x2="20"
          y2="24"
          :style="{ stroke: isDisable ? 'gray' : color }"
          strokeWidth="1"
          fill="transparent"
        />

        <line
          x1="20"
          y1="23"
          x2="24"
          y2="23"
          :style="{ stroke: isDisable ? 'gray' : color }"
          strokeWidth="1.5"
          fill="transparent"
        />

        <line
          x1="24"
          y1="4"
          x2="24"
          y2="20"
          :style="{ stroke: isDisable ? 'gray' : color, strokeWidth: 1 }"
          fill="transparent"
        />
      </svg>
      <div>{{ label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    /**
     * **optional?**
     *
     * The color of the checkbox.
     */
    color?: string
    /**
     * **required!**
     *
     * The label displayed.
     */
    label: string
    /**
     * **optional?**
     *
     * Setting to true disables it.
     */
    isDisable?: boolean
    /**
     * **optional?**
     *
     * This is the margin on the bottom side of the element.
     * If not specified, it defaults to 0.
     */
    margin?: string
  }>(),
  {
    color: 'rgba(0,0,0,0.8)',
    isDisable: false
  }
)

const isChecked = defineModel<boolean>('isChecked')

function toggleCheck() {
  isChecked.value = !isChecked.value
}
</script>

<style scoped lang="scss">
.container {
  width: fit-content;
  * {
    font-family: sans-serif;
    user-select: none;
  }
}

@keyframes check {
  0% {
    stroke-dashoffset: 100%;
  }
  100% {
    stroke-dashoffset: 0%;
  }
}

.line {
  stroke-dasharray: 100%;
  animation: check 0.2s ease-in-out 0.1s both;
  transform-origin: center;
}
</style>
