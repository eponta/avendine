<template>
  <div class="main-cnt fullscreen text-white flex flex-center">
    <div class="log-cnt">
      <h3 class="log-title">
        Qui va là ?
      </h3>

      <div class="row justify-center">
        <div class="input-cnt" v-bind:class="{'input-invalid': isPasswordValid === false}">
          <input 
            type="password" 
            name="password" 
            ref="inputPw"
            placeholder="le mot magique ?" 
            v-model="password" 
            class="input-pw"
            v-on:change="updatePassword"
            v-on:keyup.enter="connect"
          >
        </div>
      </div>
        
      <div class="btn-cnt flex-cnt-row align-center">
        <button 
          class="auth-btn bg-secondary" 
          v-bind:class="{'auth-invalid': !isPasswordValid}"
          :disabled="!isPasswordValid"
          v-on:click="connect"
        >
          Connexion
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import { pWord } from "../params/constants.js"

export default {
  name: 'CQui',
  data() {
    return {
      thePassword: pWord,
      password: '',
      isPasswordValid: false,
      wrongAttempt: false,
    }
  },
  methods: {
    connect() {
      if (this.password === this.thePassword) {
        localStorage.setItem('auth', true);
        this.$router.push("/");
      }
    },
    updatePassword() {
      console.log('changed')
      this.wrongAttempt = false;
      if (this.password) {
        if (this.password.length) {
          this.isPasswordValid = true;
        }
        else {
          this.isPasswordValid = false;
        }
      }
      else {
        this.isPasswordValid = null;
      }
    },
  }
}
</script>

<style scoped>
.main-cnt {
  background: url("../assets/patterns/blue-snow.png");
}

.log-cnt {
  background: #fdfdfd88;
  width: 400px;
  height: 320px;
  min-height: 300px;
  border-radius: 2px;
  border: 1px solid #c6d2d9;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}

.log-title {
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  color: #d97171;
  font-family: "Dancing", cursive, Arial, "Roboto";
}

.flex-cnt {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.input-cnt {
  position: relative;
  padding-right: 1px;
  margin: 3px 0px;
  width: 280px;
  background-color: rgb(250, 250, 250);
  border-radius: 2px;
  border: 1px solid #bccad1;
  box-sizing: border-box;
  height: 36px;
}
.input-cnt:focus-within {
  border: 2px solid #005fcc;
  padding-right: 0;
}

.input-pw {
  height: 100%;
  width: 240px;
  box-sizing: border-box;
  padding-left: 13px;
  border: 0;
  background-color: rgb(250, 250, 250);
  outline: 0;
}

.input-pw:focus {
  padding-left: 12px;
}

.btn-cnt {
  position: relative;
}

.auth-btn {
  margin: 3px;
  height: 30px;
  width: 280px;
  border-radius: 2px;
  border: 0;
  background-color: #37bb4c;
  color: #fff;
  box-sizing: border-box;
  padding: 0px 10px;
  font-weight: 700;
  font-family: "Dancing", 'cursive', 'Roboto', Arial;
  cursor: pointer;
  padding-bottom: 2px;
  font-size: 18px;
}
.auth-btn:hover {
  background-color: #3fa24f;
  cursor: pointer;
}

.auth-invalid {
  background-color: #9be4a7;
}
.auth-invalid:hover {
  background-color: #9be4a7;
  cursor: default;
}

.flex-cnt-row {
  display: flex;
  justify-content: space-around;
}
</style>