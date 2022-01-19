<template>
  <div v-if="!isAuth">
    <p>Enter your name</p>
    <input type="text" v-model="userName" />
    <p>Enter your pass</p>
    <input type="text" v-model="userPass" />
    <button @click="userLogin(userName, userPass)">Login</button>
  </div>
  <button @click="logout" v-if="isAuth">Logout</button>
</template>
<script>
export default {
  data() {
    return {
      name: 'admin',
      pass: '123456',
    };
  },
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
      this.userName = '';
      this.userPass = '';
    },
    userLogin(userName, userPass) {
      if (this.name === userName && this.pass === userPass) {
        this.$store.dispatch('login');
      }
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
};
</script>
