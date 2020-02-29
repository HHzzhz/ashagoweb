<template>
  <div>
    <a-menu v-model="current" mode="horizontal" theme="light">
      <a-menu-item key="home">Home</a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">
          China Travel Guide
          <a-icon type="down" />
        </span>
        <a-menu-item key="Dest:All">All</a-menu-item>

        <a-menu-divider />
        <a-menu-item key="Dest:Beijing">Beijing</a-menu-item>
        <a-menu-item key="Dest:Xizang">Xizang</a-menu-item>
      </a-sub-menu>

      <a-menu-item key="Blog">Blog
      </a-menu-item>

      <a-menu-item key="About">About</a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ["home"]
    };
  }
};
</script>
<style scoped>
</style>