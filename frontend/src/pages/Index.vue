<template>
  <q-page class="main-cnt">
    <div class="title-row">
      <h2>
        Bienvenue sur le calendrier de l'Avendine
      </h2>
    </div>
    <div 
      class="days-row row wrap items-center"
      :ref="`block-d${day.date}`"
      v-for="day in sortedDays"
      :key="day.id"
    >
      <div class="days-col column col" :class="`offset-sm-${day.nbCol}`" style="min-width: fit-content;">
        <DaySlot
          :day="days[day.id]"
        />
      </div>
    </div>
    

  </q-page>
  <div class="foot-fog fog1"></div>
  <div class="foot-fog fog2"></div>
  <div class="foot-fog fog3"></div>
  <div class="foot-fog fog4"></div>
  <div class="foot-fog fog5"></div>
  <div class="foot-fog fog6"></div>
  <div class="foot-fog fog7"></div>
  <div class="foot-fog fog8"></div>
  <div class="foot-fog fog9"></div>
  <div class="foot-fog fog10"></div>
  <div class="foot-fog fog11"></div>
  <div class="foot-fog fog12"></div>
</template>

<script>
import { defineComponent } from 'vue';
import DaySlot from "../components/DaySlot.vue"
import { DayList } from "../params/days";

export default defineComponent({
  name: 'PageIndex',
  components: {
    DaySlot
  },
  data() {
    return {
      sortedDays: [],
      days: DayList
    }
  },
  mounted() {
    let cDate = new Date().getDate();
    for (const day of this.days) {
      if (day.date <= 1 + 1) {
        this.sortedDays.push(day);
      }
    }
  }
});
</script>

<style scoped>
.main-cnt {
  padding: 20px 100px;
  overflow: auto;

  /*background: url(../assets/patterns/cb-13.jpg);*/
  background: url(../assets/patterns/blue-snow.png);
  background-repeat: repeat;
  /*background-size: contain;*/
}

.title-row {
  font-family: Dancing;
  text-align: center;
  color: #1d812b;
  text-shadow: 0px 0px 10px #56c567;
}

.title-row h2 {
  font-size: 64px;
}

@media (max-width: 1200px) {
  .title-row h2 {
    font-size: 50px;
  }
}
@media (max-width: 992px) {
  .title-row h2 {
    font-size: 38px;
  }
}
@media (max-width: 768px) {
  .title-row h2 {
    font-size: 32px;
  }
}

.days-row {
  height: calc(57vh - 70px);
  width: 100%;
  margin: 15px 0px;
  justify-content: end;
}
.days-row:last-child {
  height: 300px;
  margin: 0;
}

.days-col {
  padding-right: 7%;
}

@media (max-width: 768px) {
  .main-cnt {
    padding: 20px 50px;
  }
}

@media (max-width: 600px) {
  .days-col {
    align-items: center;
    padding-right: 0;
  }
}

@media (max-width: 420px) {
  .main-cnt {
    padding: 20px;
  }
}

/* *** FOOOOOOOG *** */
@keyframes fog-mv1 {
  0% {
    transform: translateX(0);
  }
  47% {
    transform: translateX(100px);
  }
  50% {
    transform: translateX(100px);
  }
  53% {
    transform: translateX(100px);
  }
  97% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes fog-mv2 {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-25px);
  }
  22% {
    transform: translateX(-25px);
  }
  63% {
    transform: translateX(5px);
  }
  65% {
    transform: translateX(5px);
  }
  80% {
    transform: translateX(-10px);
  }
  82% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0)
  }
}
@keyframes fog-mv3 {
  0% {
    transform: translateX(0);
  }
  35% {
    transform: translateX(10px);
  }
  37% {
    transform: translateX(10px);
  }
  70% {
    transform: translateX(-60px);
  }
  73% {
    transform: translateX(-60px);
  }
  98% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(0)
  }
}
.foot-fog {
  position: fixed;
  right: -100px;
  left: -100px;
  height: 300px;
  z-index: 1010;

  background: url(../assets/patterns/c-fog-sm.png);
  background-repeat: repeat-x;
  background-size: 400px 328px;

  animation-delay: 0s;
  animation-fill-mode: both;
  animation-duration: 90s;
  animation-iteration-count: infinite;
}
.fog1 {
  animation-name: fog-mv1;
  background-position-x: 0px;
  bottom: -100px;
}
.fog2 {
  animation-name: fog-mv3;
  background-position-x: 34px;
  bottom: -50px;
}
.fog3 {
  animation-name: fog-mv1;
  background-position-x: 69px;
  bottom: -70px;
}
.fog4 {
  animation-name: fog-mv2;
  background-position-x: 102px;
  bottom: -95px;
}
.fog5 {
  animation-name: fog-mv3;
  background-position-x: 135px;
  bottom: -25px;
}
.fog6 {
  animation-name: fog-mv1;
  background-position-x: 170px;
  bottom: -80px;
}
.fog7 {
  animation-name: fog-m
    DaySlotv3;
  background-position-x: 206px;
  bottom: 0px;
}
.fog8 {
  animation-name: fog-mv1;
  background-position-x: 240px;
  bottom: -95px;
}
.fog9 {
  animation-name: fog-mv2;
  background-position-x: 271px;
  bottom: -45px;
}
.fog10 {
  animation-name: fog-mv1;
  background-position-x: 304px;
  bottom: -5px;
}
.fog11 {
  animation-name: fog-mv3;
  background-position-x: 310px;
  bottom: -30px;
}
.fog12 {
  animation-name: fog-mv2;
  background-position-x: 340px;
  bottom: -80px;
}
</style>
