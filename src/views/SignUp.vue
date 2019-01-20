<template>
  <div class="sign-up">
    <h2> Create your account </h2>
    <input type="text" v-model="email" name='email' placeholder="email">
    <input type="password" v-model="password" name="password" placeholder="password">
    <button @click="signUp"> Create account </button>
    <router-link to="/login"> Go back to login </router-link>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'signUp',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch((error) => {
        // Handle Errors here
        console.log(error.code)
        console.log(error.message)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.sign-up {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input, button {
  width: 20%;
  margin: 10px;
}

</style>
