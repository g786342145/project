<template>
  <div class="content-search">
      <button>深圳</button>
      <input v-model="val" type="text" placeholder="搜影院" @input="search">
  </div>
</template>

<script>

export default {
  data() {
    return {
      val:''
    };
  },
  mounted() {
    
  },
  components: {},
  computed: {},
  methods: {
    search(){
      this.$emit('search',this.val)
    }
  }
};
</script>

<style lang="scss" scope>
.content-search {
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  height: 2.5rem;
  line-height: 2.5rem;
  background: rgb(240, 239, 239);
}
</style>
