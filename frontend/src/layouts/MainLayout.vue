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
})
</script>

<style scoped>
.tb-title {
  font-family: Dancing;
  font-size: 28px;
  font-weight: 600;
}
.hd-gif {
  position: absolute;
  bottom: 14px;
  height: 100%;
  margin: 0px 5px;
}

@keyframes inf-lateral {
  0% {
    margin-right: 0px;
  }
  4% {
    margin-right: 46px;
  }
  5% {
    margin-right: 50px;
  }
  6% {
    margin-right: 46px;
  }
  10% {
    margin-right: 0px;
  }
  14% {
    margin-right: 18px;
  }
  15% {
    margin-right: 20px;
  }
  16% {
    margin-right: 18px;
  }
  20% {
    margin-right: 0px;
  }
  25% {
    margin-right: 5px;
  }
  30% {
    margin-right: 0px;
  }
  100% {
    margin-right: 0px;
  }
}

.tb-day {
  font-family: Dancing;
  font-size: 22px;
  font-weight: 600;
  animation-name: inf-lateral;
  animation-delay: 3s;
  animation-duration: 4.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>
