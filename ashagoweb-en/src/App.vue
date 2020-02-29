<template>
  <a-locale-provider :locale="en_GB">
    <div id="app">
      <div>
        <a-row>
          <a-col :span="24">
            <HomeBanner></HomeBanner>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="14">
            <MainNavigator></MainNavigator>
          </a-col>
          <a-col :span="10">
            <LoginNavigator></LoginNavigator>
          </a-col>
        </a-row>

        <a-row>
          <a-col :span="24">
            <div
              style="width:100%;height:960px;background:url(https://ashago.oss-cn-zhangjiakou.aliyuncs.com/pic/%E7%BD%91%E7%AB%99%E7%9A%84%E7%85%A7%E7%89%87%20Site%20images/42243642_327221164692666_7550992195054993408_n.jpg)"
            >
              <div>
                <a-row>
                  <a-col :span="24">
                    <div style="height:480px;"></div>
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="24">
                    <div style="height:200px;">
                      <span style="color:#fff;font-size:80px;">YOUR CHINA ADVANTURE</span>
                    </div>
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="24">
                    <div style="height:280px;">
                      <a-button size="large" ghost>Begin Now!</a-button>
                    </div>
                  </a-col>
                </a-row>
              </div>
            </div>
          </a-col>
        </a-row>

        <a-row>
          <a-col :span="24">
            <div style="height:120px"></div>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <div style="height:180px">
              <h1 style="color:#990000;font-size:60px">SEARCH</h1>
            </div>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="4"></a-col>
          <a-col :span="16">
            <div>
              <a-input-search
                placeholder="search your destinations"
                @search="onSearch"
                enterButton="GO!"
                size="large"
              />
            </div>
          </a-col>
          <a-col :span="4"></a-col>
        </a-row>

        <a-row>
          <a-col :span="24">
            <div style="height:120px"></div>
          </a-col>
        </a-row>

        <a-row>
          <a-col :span="24">
            <div style="height:180px">
              <h1 style="color:#990000;font-size:60px">FEATURED ARTICLES</h1>
            </div>
          </a-col>
        </a-row>

        <a-row>
          <a-col :span="4"></a-col>
          <a-col :span="6">
            <div>
              <a-card hoverable style="width: 300px">
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  slot="cover"
                />

                <a-card-meta title="Card title" description="This is the description">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
            </div>
          </a-col>
          <a-col :span="6">
            <div>
              <a-card hoverable style="width: 300px">
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  slot="cover"
                />

                <a-card-meta title="Card title" description="This is the description">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
            </div>
          </a-col>
          <a-col :span="6">
            <div>
              <a-card hoverable style="width: 300px">
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  slot="cover"
                />

                <a-card-meta title="Card title" description="This is the description">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
            </div>
          </a-col>
          <a-col :span="2"></a-col>
        </a-row>

        <a-row>
          <a-col :span="24">
            <div style="height:80px"></div>
          </a-col>
        </a-row>

        <a-row>
          <a-col :span="4"></a-col>
          <a-col :span="6">
            <div>
              <a-card hoverable style="width: 300px">
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  slot="cover"
                />

                <a-card-meta title="Card title" description="This is the description">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
            </div>
          </a-col>
          <a-col :span="6">
            <div>
              <a-card hoverable style="width: 300px">
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  slot="cover"
                />

                <a-card-meta title="Card title" description="This is the description">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
            </div>
          </a-col>
          <a-col :span="6">
            <div>
              <a-card hoverable style="width: 300px">
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  slot="cover"
                />

                <a-card-meta title="Card title" description="This is the description">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
            </div>
          </a-col>
          <a-col :span="2"></a-col>
        </a-row>

        <a-row>
          <a-col :span="24">
            <div style="height:240px"></div>
          </a-col>
        </a-row>

        <a-row>
          <a-col :span="24">
            <div style="height:180px">
              <h1 style="color:#990000;font-size:60px">INSPIRATION</h1>
            </div>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="6">
            <div style="height:180px"></div>
          </a-col>
          <a-col :span="12">
            <div style="height:180px">
              <p
                style="color:#990000;font-size:15px"
              >China is a huge country. With so much to do, see and experience, deciding where to go can be a difficult choice. Our China guides can help you plan your perfect trip. Take a look at our destination overviews, local perspectives, or expert articles to get a better understanding of what itinerary is right for you.</p>
            </div>
          </a-col>
          <a-col :span="6">
            <div style="height:180px"></div>
          </a-col>
        </a-row>

        <a-row>
          <a-col :span="3">=</a-col>
          <a-col :span="18">
            <div style="height:680px">
              <a-carousel :afterChange="onChange">
                <div style="height:680px"></div>
                <div>
                  <div style="height:200px;width:100%">
                    <h1 style="color:#fff">Welcome!</h1>
                  </div>
                  <div style="height:200px;width:100%">
                    <p
                      style="color:#fff;line-height:15px"
                    >China is a huge country. With so much to do, see and experience, deciding where to go can be a difficult choice.</p>
                  </div>
                  <div style="height:280px;width:100%">
                    <a-button size="small" ghost>Read more</a-button>
                  </div>
                </div>
              </a-carousel>
            </div>
          </a-col>
          <a-col :span="3"></a-col>
        </a-row>

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
          <a-col :span="24">
            <a-divider />
          </a-col>
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
  </a-locale-provider>
</template>

<script>
import en_GB from "ant-design-vue/lib/locale-provider/en_GB";
import HomeBanner from "./components/HomeBanner.vue";
import MainNavigator from "./components/navigator/MainNavigator.vue";
import LoginNavigator from "./components/navigator/LoginNavigator.vue";

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
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
    onChange(a, b, c) {
      console.log(a, b, c);
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

<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 560px;
  line-height: 160px;
  background: #990000;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
