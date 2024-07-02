<template>
  <Teleport to="body">
    <div class="wrapper">
      <transition-group name="mount" tag="div">
        <div v-for="toast in toasts" :key="toast.id" class="toast">
          <div class="top-container">
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div class="inner-container">
            <span>{{ toast.content }}</span>
            <div
              class="close"
              @click="
                () => {
                  closeToast(toast.id)
                }
              "
            >
              <div>×</div>
            </div>
          </div>

          <div class="bottom-container">
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div
            class="progress"
            :style="{
              animationDuration: `${toast.duration}ms`
            }"
          ></div>

          <div class="flavor-text">
            Press the `×` button to close the toast.
          </div>
        </div>
      </transition-group>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { toasts, closeToast } from './toastManager'
</script>

<style scoped lang="scss">
// # --------------------------------------------------------------------------------
//
// styles
//
// # --------------------------------------------------------------------------------

.mount-enter-to,
.mount-leave-from {
  transform: scaleY(1);
}

.mount-enter-active,
.mount-leave-active {
  transition: transform 100ms;
  transform-origin: bottom;
}

.mount-enter-from,
.mount-leave-to {
  transform: scaleY(0);
}

.wrapper {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1000;

  display: flex;
  flex-direction: column;

  transition: all 0.2s;
}

.toast {
  max-width: 320px;
  padding: 0.5rem;
  background: rgba($color: #ffffff, $alpha: 0.8);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: transform 100ms;

  .flavor-text {
    width: 100%;
    text-align: right;
    font-size: 0.4rem;
    user-select: none;
  }

  .top-container {
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    div:nth-child(1) {
      width: 20%;
      height: 4px;
      background-color: black;
    }

    div:nth-child(2) {
      width: 75%;
      height: 1px;
      background-color: black;
    }

    div:nth-child(3) {
      width: 5%;
      height: 2px;
      background-color: black;
    }
  }

  .inner-container {
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    border-left: solid 1px black;
    border-right: solid 1px black;

    span {
      padding: 0 1rem;
      border-left: solid 1px black;
    }

    .close {
      width: 1rem;
      height: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 1rem;
      border-radius: 50%;
      cursor: pointer;

      transition: transform 200ms;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        transform: scale(1.4);
      }
    }
  }

  .bottom-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    div:nth-child(1) {
      width: 2%;
      height: 6px;
      background-color: black;
    }

    div:nth-child(2) {
      width: 90%;
      height: 1px;
      background-color: black;
    }

    div:nth-child(3) {
      width: 8%;
      height: 2px;
      background-color: black;
    }
  }

  @keyframes progress {
    from {
      transform: scaleX(1);
    }
    to {
      transform: scaleX(0);
    }
  }

  .progress {
    width: 100%;
    height: 1px;
    background-color: black;

    animation-name: progress;
    animation-fill-mode: both;
    animation-timing-function: linear;
    transform-origin: 0;
  }
}
</style>
