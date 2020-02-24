<template>
  <el-menu
    mode="horizontal"
    background-color="#990000"
    text-color="#fff"
    active-text-color="#fff"
    @select="handleSelect"
  >
    <el-menu-item index="1">Home</el-menu-item>
    <el-menu-item index="2">About</el-menu-item>
    <el-menu-item index="2">China Travel Guide</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Navigator",
  props: {
    msg: String
  }
};
</script>

<style>
.el-menu--horizontal > .el-menu-item {
  height: 36px !important;
  line-height: 36px !important;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
