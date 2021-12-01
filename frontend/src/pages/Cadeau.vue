<template>
  <div class="cadeau row flex flex-center">
    <transition name="scale" mode="out-in">
      <div class="cadeau-cnt" v-if="show">
        <div class="cadeau-overlay">
          <div class="back-row row justify-start">
            <img 
              class="back-icon" 
              src="../assets/icons/backw.png" 
              alt="Back icon"
              @click="backToCalendar()"
            >
          </div>
          <div class="title-row row justify-center">
            <h4 class="title">
              Jour {{currentDay?.date}}
            </h4>
          </div>
          <div class="question-col col" v-if="!showPresent">
            <div class="question row flex flex-center">
              <p>
                {{currentDay?.question}}
              </p>
            </div>
            <div class="answer row flex flex-center">
              <input 
                class="answer-input" 
                :class="{'wrong': wrongAttempt}"
                :placeholder="getPlaceholder"   
                v-model="mAnswer" 
                v-on:keyup.enter="answerQuestion()"
              >
            </div>
          </div>
          <div class="gift-col col" v-else>
            <div class="gift-text row flex flex-center">
              <p>
                {{currentDay?.text}}
              </p>
            </div>
            <div class="gift-content row flex flex-center">
              <img 
                v-if="currentDay && currentDay.type === 'audio'" 
                class="play-icon" 
                :class="{'playing': playAudiotrack}"
                src="../assets/icons/play.png" 
                alt="Play icon" 
                @click="playAudiotrack = !playAudiotrack">
              <a 
                v-if="currentDay && currentDay.type === 'audio'" 
                :href="getAudioSrc"
                class="flex flex-center"
              >
                <img 
                  class="dl-audio-icon" 
                  src="../assets/icons/dl.png" 
                  alt="DL icon"
                >
              </a>

              <img v-if="currentDay && currentDay.type === 'image'" src="" alt="">
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { DayList } from "../params/days";

export default {
  name: 'Cadeau',
  data() {
    return {
      currentDay: null,
      mAnswer: '',
      show: false,
      wrongAttempt: false,
      showPresent: false,
      audiotrack: null,
      playAudiotrack: false,
    }
  },
  watch: {
    mAnswer: function() {
      this.wrongAttempt = false;
    },
    playAudiotrack: function(val) {
      if (val) {
        this.audiotrack.play();
      }
      else {
        this.audiotrack.pause();
      }
    }
  },
  computed: {
    getPlaceholder() {
      return this.currentDay && this.currentDay.placeholder ? this.currentDay.placeholder : "Réponse"
    },
    getAudioSrc() {
      return require('../assets/audio/mykonos.mp3');
    }
  },
  methods: {
    answerQuestion() {
      if (this.currentDay?.answer && this.mAnswer === this.currentDay.answer) {
        this.showPresent = true;
      }
      else {
        this.wrongAttempt = true;
      }
    },
    backToCalendar() {
      this.playAudiotrack = false,
      this.$router.back();
    },
  },
  mounted() {
    let date = this.$route.params.id;
    if (date && Number.parseInt(date) === new Date().getDate()) {
      date = Number.parseInt(date);
      this.currentDay = DayList[date - 1];
      this.show = true;
      this.audiotrack = new Audio(require('../assets/audio/mykonos.mp3'));
    }
    else {
      this.$router.push('/');
    }
  }
}
</script>

<style>
.cadeau {
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3001;

  background: #131313aa;
}

.cadeau-cnt {
  height: 500px;
  width: 900px;
  z-index: 3002;

  padding: 20px;

  opacity: 1;
  background: url(../assets/patterns/cb-10.png) repeat;
  border: 1px solid #fdfdfd;
}

.back-icon {
  height: 45px;
  cursor: pointer;
}

.title {
  z-index: 3005;
  color: #fdfdfd;
  font-family: Dancing;
  font-size: 48px;
  margin: 50px 0px;
  text-shadow: 0px 0px 5px #ffffff93;
}

.question-col {
  padding: 0px 30px;
}
.question {
  z-index: 3005;
  color: #fdfdfd;
  text-align: center;
  font-family: Dancing;
  font-size: 30px;
  text-shadow: 0px 0px 5px #ffffff38;
  margin-bottom: 20px;
}
.answer-input {
  min-width: 200px;
  height: 35px;
  padding: 3px 10px;
  background: rgb(255, 255, 255);
  border: 2px solid #1d812b;
  border-radius: 3px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25)
}
.answer-input:focus-visible {
  outline: none;
}

.wrong {
  border: 2px solid red;
}

.gift-text {
  z-index: 3005;
  color: #fdfdfd;
  text-align: center;
  font-family: Dancing;
  font-size: 30px;
  padding: 0px 30px;
  margin: 10px 0px;
  text-shadow: 0px 0px 5px #ffffff38;
}

.gift-content {
  z-index: 3005;
  padding: 20px;
}

.dl-audio-icon {
  height: 50px;
  width: auto;
  margin: 0px 50px;
}
.dl-audio-icon:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.play-icon {
  height: 50px;
  width: auto;
  margin: 0px 50px;
}
.play-icon:hover {
  cursor: pointer;
  transform: scale(1.1);
}

@keyframes grow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.075);
  }
  1000% {
    transform: scale(1);
  }
}

.playing {
  animation-name: grow;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@media (max-width: 992px) {
  .cadeau-cnt {
    height: 400px;
    width: 700px;
    opacity: 1;
  }

  .back-icon {
    height: 30px;
  }

  .title {
    margin: 25px 0px;
    font-size: 40px;
  }

  .question-col {
    padding: 0px 20px;
  }
  .question {
    font-size: 26px;
    margin-bottom: 15px;
  }

  .gift-text {
    font-size: 26px;
    padding: 0px 20px;
  }

  .dl-audio-icon {
    height: 40px;
    margin: 0px 30px;
  }

  .play-icon {
    height: 40px;
    margin: 0px 30px;
  }
}

@media (max-width: 768px) {
  .cadeau-cnt {
    height: 325px;
    width: 500px;

    padding: 15px;
  }

  .back-icon {
    height: 25px;
  }

  .title {
    font-size: 32px;
    margin: 15px 0px;
  }

  .question-col {
    padding: 0px 10px;
  }
  .question {
    font-size: 24px;
    margin-bottom: 15px;
  }

  .gift-text {
    font-size: 24px;
    padding: 0px 10px;
    margin: 10px 0px;
  }

  .gift-content {
    padding: 20px;
  }

  .dl-audio-icon {
    height: 35px;
    margin: 0px 30px;
  }

  .play-icon {
    height: 35px;
    margin: 0px 30px;
  }
}

@media (max-width: 600px) {
  .cadeau-cnt {
    height: 300px;
    width: 290px;

    padding: 10px;
  }

  .back-icon {
    height: 25px;
  }

  .title {
    font-size: 26px;
    margin: 0px 0px 10px 0px;
  }

  .question-col {
    padding: 0px 5px;
  }
  .question {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .gift-text {
    font-size: 18px;
    padding: 0px 5px;
    margin: 10px 0px 5px 0px;
  }

  .gift-content {
    padding: 10px;
  }

  .dl-audio-icon {
    height: 35px;
    margin: 0px 30px;
  }

  .play-icon {
    height: 35px;
    margin: 0px 30px;
  }
}

/* TRANSITION ROUTER */
.scale-enter-active,
.scale-leave-active {
  transition: all 1s ease;
  transition-delay: 0.5;
}


.scale-enter-from,
.scale-leave-to {
  transform: scale(0.1);
  opacity: 0;
}
</style>