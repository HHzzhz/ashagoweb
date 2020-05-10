 <template>
  <div id="search_input">
    <a-row>
      <a-col :span="4">
        <div style="height:40px;background:#fff;"></div>
      </a-col>
      <a-col :span="16">
        <div>
          <a-input-search
            placeholder="search your destinations"
            @search="onSearch"
            enterButton
            size="large"
          />
        </div>
      </a-col>
      <a-col :span="4">
        <div style="height:40px;background:#fff;"></div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <div style="height:1px;background:#fff;">
        </div>
      </a-col>
    </a-row>
    
  </div>
</template>
<script>
export default {
  methods: {
    onSearch(value) {
      console.log(value);
      this.$router.push({
        path: "/search_result",
        query: { 
          q: value,
          t:Date.now()
         }
      });
    }
  }
};
</script>