<template>
  <a-config-provider :locale="en_GB">
    <div id="app">
      <div>
        <!-- 网站头部 -->
        <a-row>
          <a-col :span="24">
            <HomeBanner></HomeBanner>
          </a-col>
        </a-row>
        <a-affix :offsetTop="0">
          <a-row>
            <a-col :span="14">
              <MainNavigator></MainNavigator>
            </a-col>
            <a-col :span="10">
              <LoginNavigator></LoginNavigator>
            </a-col>
          </a-row>
        </a-affix>
        <!-- 网站主要内容-->
        <a-row>
          <router-view :key="$route.path + $route.query.t"></router-view>
        </a-row>

        <!-- 网站footer -->
        <a-row>
          <a-col :span="24">
            <div style="height:120px"></div>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="11"></a-col>
          <a-col :span="2">
            <div>
              <a-row>
                <a-col :span="6">
                  <a-icon type="facebook" />
                </a-col>
                <a-col :span="6">
                  <a-icon type="twitter" />
                </a-col>
                <a-col :span="6">
                  <a-icon type="youtube" />
                </a-col>
                <a-col :span="6">
                  <a-icon type="weibo" />
                </a-col>
              </a-row>
            </div>
          </a-col>
          <a-col :span="11"></a-col>
        </a-row>
        <a-row>
          <a-col :span="24"></a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <div style="height:120px;background:#990000">
              <a-row>
                <a-col :span="24">
                  <div style="height:20px;background:#990000"></div>
                </a-col>
              </a-row>
              <a-row>
                <a-col :span="24">
                  <p style="color:#fff">©2020 by Asha GO. Allrights reserved.</p>
                </a-col>
              </a-row>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </a-config-provider>
</template>

<script>
import en_GB from "ant-design-vue/lib/locale-provider/en_GB";
import HomeBanner from "./components/general/HomeBanner.vue";
import MainNavigator from "./components/general/navigators/MainNavigator.vue";
import LoginNavigator from "./components/general/navigators/LoginNavigator.vue";

export default {
  name: "app",
  data() {
    return {
      en_GB
    };
  },
  components: {
    HomeBanner,
    MainNavigator,
    LoginNavigator
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>


