<template>
  <div id="search_result">
    <a-row>
      <a-col :span="24">
        <div style="height:40px"></div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <div style="height:70px">
          <h1 style="color:#990000;font-size:30px">SEARCH</h1>
        </div>
      </a-col>
    </a-row>
    <a-affix :offsetTop="10">
      <SearchInput></SearchInput>
    </a-affix>
    <a-row>
      <a-col :span="24">
        <div style="height:60px"></div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="3"></a-col>
      <a-col :span="18">
        <!-- search result -->
        <a-list itemLayout="vertical" size="large" :pagination="pagination" :dataSource="listData">
          <div slot="footer"></div>
          <a-list-item slot="renderItem" slot-scope="item" key="item.title">
            <template slot="actions" v-for="tag in item.tags">
              <span :key="tag">{{tag}}</span>
            </template>
            <img slot="extra" width="272" alt="logo" :src="item.first_pic" />
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
import Axios from "axios";

let listData = [];

export default {
  components: {
    SearchInput
  },

  data() {
    console.log("data");
    return {
      q: this.$route.query.q,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 6
      }
    };
  },
  computed: {
    listData() {
      console.log("listdata");
      return listData;
    }
  },
  mounted() {
    console.log("mounted");
    this.getSearchResult();
  },
  methods: {
    getSearchResult() {
      console.log(this.$route.query.q)
      listData = [];
      Axios({
        url: "http://39.101.195.11:9200/ashago_blog/_search",
        method: "GET",
        params: {
          q: this.$route.query.q
        }
      }).then(function(response) {
        console.log(response);
        for (let i = 0; i < response.data.hits.hits.length; i++) {
          listData.push({
            href: "",
            title: response.data.hits.hits[i]._source.base_info.title,
            avatar: "",
            description: response.data.hits.hits[i]._source.base_info.author,
            content: response.data.hits.hits[i]._source.content[1].replace(
              "(text)",
              ""
            ),
            first_pic: response.data.hits.hits[i]._source.content[0].replace(
              "(pic)",
              ""
            ),
            tags: response.data.hits.hits[i]._source.tags_for_users
          });
        }
        console.log(listData);
      });
      return listData;
    }
  }
};
</script>