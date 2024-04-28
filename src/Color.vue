<template>
  <div
    :style="{
      width: '100%',
      backgroundColor:
        theme === 'light' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)',
      color: theme === 'dark' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)'
    }"
  >
    <table>
      <thead>
        <tr>
          <th>color</th>
          <th>100</th>
          <th>200</th>
          <th>300</th>
          <th>400</th>
          <th>500</th>
          <th>600</th>
          <th>700</th>
          <th>800</th>
          <th>900</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="color in colorTypes">
          <td>{{ color }}</td>
          <td v-for="c in colors[color]" :style="{ color: c }">{{ c }}</td>
        </tr>

        <tr>
          <td>COLOR</td>
          <td :style="{ color: lighten(-0.3, 'rgb(89, 181, 124)') }">COLOR</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { lighten } from 'polished'

export interface ColorType {
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export interface ColorsType {
  crimson: ColorType
  amber: ColorType
  gold: ColorType
  emerald: ColorType
  blue: ColorType
  purple: ColorType
  pink: ColorType
  slate: ColorType
}

const colors: ColorsType = {
  crimson: {
    100: 'rgb(255, 222, 228)',
    200: 'rgb(245, 193, 203)',
    300: 'rgb(230, 168, 179)',
    400: 'rgb(209, 138, 151)',
    500: 'rgb(179, 100, 114)',
    600: 'rgb(156, 70, 85)',
    700: 'rgb(130, 44, 59)',
    800: 'rgb(115, 31, 46)',
    900: 'rgb(99, 22, 36)'
  },
  amber: {
    100: 'rgb(255, 218, 212)',
    200: 'rgb(235, 187, 178)',
    300: 'rgb(222, 168, 158)',
    400: 'rgb(209, 150, 138)',
    500: 'rgb(191, 126, 113)',
    600: 'rgb(171, 101, 87)',
    700: 'rgb(135, 68, 54)',
    800: 'rgb(115, 48, 34)',
    900: 'rgb(89, 30, 17)'
  },
  gold: {
    100: 'rgb(255, 243, 212)',
    200: 'rgb(237, 222, 183)',
    300: 'rgb(222, 203, 155)',
    400: 'rgb(209, 189, 138)',
    500: 'rgb(184, 163, 110)',
    600: 'rgb(161, 139, 84)',
    700: 'rgb(135, 114, 61)',
    800: 'rgb(110, 90, 39)',
    900: 'rgb(74, 58, 18)'
  },
  emerald: {
    100: 'rgb(222, 255, 234)',
    200: 'rgb(180, 240, 202)',
    300: 'rgb(157, 227, 183)',
    400: 'rgb(125, 209, 157)',
    500: 'rgb(89, 181, 124)',
    600: 'rgb(69, 163, 105)',
    700: 'rgb(50, 138, 83)',
    800: 'rgb(29, 115, 62)',
    900: 'rgb(10, 69, 33)'
  },
  blue: {
    100: 'rgb(219, 233, 255)',
    200: 'rgb(187, 206, 237)',
    300: 'rgb(156, 180, 219)',
    400: 'rgb(138, 165, 209)',
    500: 'rgb(105, 135, 184)',
    600: 'rgb(83, 114, 166)',
    700: 'rgb(58, 88, 140)',
    800: 'rgb(36, 64, 112)',
    900: 'rgb(21, 46, 89)'
  },
  purple: {
    100: 'rgb(234, 212, 255)',
    200: 'rgb(211, 183, 237)',
    300: 'rgb(196, 163, 227)',
    400: 'rgb(174, 138, 209)',
    500: 'rgb(151, 113, 189)',
    600: 'rgb(122, 82, 163)',
    700: 'rgb(104, 63, 145)',
    800: 'rgb(80, 43, 117)',
    900: 'rgb(62, 27, 97)'
  },
  pink: {
    100: 'rgb(255, 212, 236)',
    200: 'rgb(237, 185, 214)',
    300: 'rgb(227, 163, 198)',
    400: 'rgb(209, 138, 177)',
    500: 'rgb(201, 105, 158)',
    600: 'rgb(189, 77, 139)',
    700: 'rgb(176, 53, 121)',
    800: 'rgb(143, 29, 92)',
    900: 'rgb(107, 15, 66)'
  },
  slate: {
    100: 'rgb(230, 236, 245)',
    200: 'rgb(211, 219, 230)',
    300: 'rgb(182, 191, 204)',
    400: 'rgb(156, 166, 181)',
    500: 'rgb(134, 142, 156)',
    600: 'rgb(106, 113, 125)',
    700: 'rgb(73, 79, 89)',
    800: 'rgb(52, 56, 64)',
    900: 'rgb(29, 31, 36)'
  }
}

const colorTypes = Object.keys(colors) as (keyof typeof colors)[]

withDefaults(
  defineProps<{
    theme: 'light' | 'dark'
  }>(),
  {
    theme: 'light'
  }
)
</script>

<style lang="scss" scoped></style>
