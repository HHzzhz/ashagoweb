<template>
  <div>
    <a-menu mode="horizontal" theme="light">
      <a-menu-item v-if="!isLogin" key="sign_up">
        <router-link to="/sign_up">SignUp</router-link>
      </a-menu-item>
      <a-menu-item v-if="!isLogin" key="login">
        <router-link to="/login">
          <a-icon type="user" />Login
        </router-link>
      </a-menu-item>
      <a-menu-item v-if="isLogin" key="profile">
        <router-link to="/profile/">
          <a-icon type="user" />
          {{userName}}
        </router-link>
      </a-menu-item>
      <a-menu-item v-if="isLogin" key="logout" v-on:click="logout">Logout</a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    console.log(this.$store);
    return {};
  },
  methods: {
    logout() {
      console.log('logout')
      this.$store.commit('logout');
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.login;
    },
    userName() {
      return this.$store.state.nick_name;
    }
  }
};
</script>