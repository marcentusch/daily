<template>
  <div class="login">
    <h2> Login </h2>
    <input type="text" name='email' placeholder="email">
    <input type="password" name="password" placeholder="password">
    <button @click="login"> Login </button>
    <p>
      You don't have an account?
      <router-link to="/sign-up"> sign up here </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    login () {
      this.$router.replace('home')
    }
  }
}
</script>

<style lang="scss" scoped>

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input, button {
  width: 20%;
  margin: 10px;
}

</style>
