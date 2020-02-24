<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="24">
            <div class="demo-image">
              <div class="block"></div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1">
            <div class="grid-content bg-red"></div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content">
              <Navigator />
            </div>
          </el-col>
          <el-col :span="5">
            <NavigatorForSide />
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="block">
              <el-carousel trigger="click" height="550px">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div style="height:100px"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div style="height:100px">
              <span style="font-size:24px;color:#990000;">SEARCH FOR ANYTHING</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3" class="grid-content"></el-col>
          <el-col :span="18">
            <div style="height:100px">
              <el-input
                placeholder="Please type some"
                prefix-icon="el-icon-search"
                v-model="input2"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="3" />
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              />
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6"></el-col>
          <el-col :span="6"></el-col>
          <el-col :span="6"></el-col>
        </el-row>
        <el-row></el-row>
      </el-main>
      <el-footer>
        <el-col :span="24">
          <div class="grid-content bg-red" style="height:250px"></div>
        </el-col>
      </el-footer>
    </el-container>
  </div>
</template>

<style>
.font-white {
  color: #f9fafc !important;
}

.el-row {
  margin-bottom: 20px;
}
.bg-red {
  background: #990000;
}
.grid-content {
  height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-main {
  padding: 0px !important;
}
.el-header {
  padding: 0px !important;
}
.el-footer {
  padding: 0px !important;
}
</style>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>

<script>
import Navigator from "./components/Navigator.vue";
import NavigatorForSide from "./components/NavigatorForSide.vue";

export default {
  name: "app",
  components: {
    Navigator,
    NavigatorForSide
  },

  //for navigator
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
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
  margin-top: 60px;
}
</style>
