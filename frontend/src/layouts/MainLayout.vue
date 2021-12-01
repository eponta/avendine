<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="tb-title">
          Calendrier de l'Avendine
          <img class="hd-gif" src="../assets/images/gifts-1.gif" alt="Gifts gif">
        </q-toolbar-title>

        <div class="tb-day">
          J{{ new Date().toLocaleDateString().split("/")[0] }}
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  data() {
    return {
      transitionName: '',
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
})
</script>

<style scoped>
.tb-title {
  font-family: Dancing;
  font-size: 28px;
  font-weight: 600;
}

.tb-day {
  font-family: Dancing;
  font-size: 22px;
  font-weight: 600;
}

.hd-gif {
  position: absolute;
  bottom: 14px;
  height: 100%;
  margin: 0px 5px;
}

@media (max-width: 600px) {
  .tb-title {
    font-size: 18px;
  }
  .tb-day {
    font-size: 16px;
  }
  .hd-gif {
    height: 75%;
    bottom: 18px;
  }
}

@keyframes inf-lateral {
  0% {
    transform: translateX(0%) rotateY(0deg);
  }
  30% {
    transform: translateX(100%) rotateY(0deg);
  }
  31% {
    transform: translateX(100%) rotateY(180deg);
  }
  60% {
    transform: translateX(0%) rotateY(1800deg);
  }
  100% {
    transform: translateX(0%);
  }
}
.walk-gif {
  position: absolute;
  height: 100%;
  bottom: 3px;
  transform: translateX(0%) rotateX(0deg);
  animation-name: inf-lateral;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
}
</style>
