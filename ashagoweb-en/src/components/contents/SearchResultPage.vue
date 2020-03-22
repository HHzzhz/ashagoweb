<template>
  <div id="search_result">
    <a-row>
      <a-col :span="24">
        <div style="height:40px">
        </div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <div style="height:70px">
          <h1 style="color:#990000;font-size:30px">SEARCH</h1>
        </div>
      </a-col>
    </a-row>
    <a-affix :offsetTop="this.top">
    <SearchInput></SearchInput>
    </a-affix>
    <a-row>
      <a-col :span="24">
        <div style="height:60px">
        </div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="3"></a-col>
      <a-col :span="18">
        <!-- search result -->
        <a-list itemLayout="vertical" size="large" :pagination="pagination" :dataSource="listData">
          <div slot="footer">
          </div>
          <a-list-item slot="renderItem" slot-scope="item" key="item.title">
            <template slot="actions" v-for="{type, text} in actions">
              <span :key="type">
                <a-icon :type="type" style="margin-right: 8px" />
                {{text}}
              </span>
            </template>
            <img
              slot="extra"
              width="272"
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
            <a-list-item-meta :description="item.description">
              <a slot="title" :href="item.href">{{item.title}}</a>
              <a-avatar slot="avatar" :src="item.avatar" />
            </a-list-item-meta>
            {{item.content}}
          </a-list-item>
        </a-list>
      </a-col>
      <a-col :span="3"></a-col>
    </a-row>
  </div>
</template>

<script>
import SearchInput from "../../components/general/SearchInput.vue";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://www.antdv.com/",
    title: Math.random(),
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}

export default {
  components: {
    SearchInput
  },

  data() {
    return {
      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 6
      },
      actions: [
        { type: "star-o", text: "156" },
        { type: "like-o", text: "156" },
        { type: "message", text: "2" }
      ]
    };
  }
};
</script>