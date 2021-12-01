<template>
  <div class="day-slot flex column flex-center">
    <div class="day-cnt flex flex-center">
      <div class="day-etq" :style="{transform: `rotate(${getTitleRotate}deg)`}">
        <div class="day-title">
          {{ getDate }}
        </div>
      </div>
      <img class="ruban" src="../assets/images/ruban.png" alt="Ruban cadeau">
    </div>

    <button class="open-btn" :disabled="!matchDate" @click="openDay()">
      Ouvrir
    </button>

    <router-view v-if="matchDate" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <div class="g-strp-x g-strp" :style="{top: `${getXStripeTop}px`}"></div>
    <div class="g-strp-y g-strp" :style="{left: `${getYStripeLeft}px`}"></div>
  </div>
</template>

<script>
export default {
  name: 'DaySlot',
  props: {
    day: {
      type: Object,
      required: true
    },
  },
  computed: {
    getDate() {
      return this.day.date ? this.day.date : "-";
    },
    getTitleRotate() {
      return this.day.titleRotate ? this.day.titleRotate : "-4";
    },
    getXStripeTop() {
      return this.day.xStripeTop ? this.day.xStripeTop : "50";
    },
    getYStripeLeft() {
      return this.day.yStripeLeft ? this.day.yStripeLeft : "40";
    },
    matchDate() {
      let currentDate = new Date().getDate();
      return Number.parseInt(currentDate) === Number.parseInt(this.day.date);
    }
  },
  methods: {
    openDay() {
      if (this.matchDate) {
        this.$router.push(`/cadeau/${this.day.date}`)
      }
    }
  }
}
</script>

<style>
.day-slot {
  position: relative;
  width: 300px;
  height: 175px;
  padding: 15px 10px;
  z-index: auto;

  color: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.6);
  border-radius: 2px;

  background: url(../assets/patterns/cb-0.jpg);
  background-size: 100%;
}

@media (max-width: 600px) {
  .day-slot {
    width: 260px;
    height: 150px;
    padding: 5px 5px;
  }
}

.day-cnt {
  position: relative;
  flex: 1;
  width: 100%;
  z-index: 1009;
}

.day-etq {
  margin-left: 20px;
  height: 65px;
  width: 100px;
  z-index: 1009;

  background: url(../assets/patterns/cb-10.png);
  background-repeat: repeat;
  background-size: 100%;
  background-position-x: 100%;
  
  border: 2px solid #9c935f;
  border-radius: 3px;
}

.day-title {
  line-height: 60px;
  z-index: 1009;

  text-align: center;
  font-family: "Dancing";
  font-size: 60px;
  color: #ffffff;
}

button {
  background: transparent;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  transition-duration: 0.3s;
  transition-delay: 0s;
  cursor: pointer;
  z-index: 1009;
}
button:hover {
  transition-delay: 0.05s;
  transition-duration: 0.2s;
}

.open-btn {
  flex: 0;
  height: 40px;
  width: 100%;
  z-index: 1009;

  font-family: "Dancing";
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  background-color: #41414160;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
}
.open-btn:hover {
  background-color: #1d1c1c98;
}
.open-btn:disabled {
  background-color: #41414160;
}

/* DECO CADEAUX */
.g-strp-x {
  position: absolute;
  left: -1px;
  right: -1px;
  height: 40px;
  z-index: 1008;

  border-top: 3px solid #f0f0f0;
  border-bottom: 3px solid #f0f0f0;
}

.g-strp-y {
  position: absolute;
  top: -1px;
  bottom: -1px;
  width: 50px;
  z-index: 1008;

  border-left: 3px solid #f0f0f0;
  border-right: 3px solid #f0f0f0;
}

.g-strp {
  background: url(../assets/patterns/cb-paper.png);
  background-color: #1d812b;
  background-repeat: repeat;
  background-size: 60px;
}

.ruban {
  position: absolute;
  top: -75px;
  right: -70px;
  height: 170px;
  width: 170px;
  z-index: 1010;
}

@media (max-width: 600px) {
  .g-strp-y {
    left: 30px !important;
  }

  .ruban {
    position: absolute;
    top: -65px;
    right: -55px;
    height: 150px;
    width: 150px;
    z-index: 1010;
  }
}

/* TRANSITION ROUTER */
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>