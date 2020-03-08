<template>
  <div class="content-inner">
    <div class="content-item"  v-for="(item,inx) in cinemasData" v-show="new RegExp(filter).test(item.nm)" :key="inx" >
      <div class="shop-name">{{item.nm}}</div>
      <div class="shop-address">
        <span class="shop-address-inner">{{item.addr}}</span>
        <span class="shop-range">{{item.distance}}</span>
      </div>
      <div class="shop-details">
        <span class="refund" v-if="item.tag.allowRefund">退</span>
        <span class="resign" v-if="item.tag.endorse">改签</span>
        <span class="snack" v-if="item.tag.snack">小吃</span>
        <span class="discount-card" v-if="item.tag.vipTag">折扣卡</span>
        <span class="normal" v-for="(it,ix) in item.tag.hallType" :key="ix">{{it}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cinemasData: {},
    filter:{}
  },
  data() {
    return {
      lxr: "",
      lxdh: "",
      show: false,
      //省市区
      province: "",
      city: "",
      area: ""
    };
  },
  methods: {},
  mounted() {
    console.info(this.cinemasData);
  },
  computed: {}
};
</script>

<style lang="scss" scope>
.content-inner {
  margin: 0.8rem;
  .content-item{
    margin-bottom: 10px;
  }
  .shop-name,
  shop-address,
  shop-details {
    width: 100%;
  }
  .shop-name {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .shop-address {
    display: flex;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0.8rem;
    color: rgb(131, 127, 127);

    .shop-address-inner {
      flex: 4;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .shop-range {
      flex: 1;
    }
  }
  .shop-details {
    font-size: 0.8rem;
    .refund,
    .resign,
    .movie-hall-type,
    .normal,
    .D-type {
      color: rgb(0, 174, 255);
      border: 1px solid rgb(0, 174, 255);
      padding: 0 0.2rem;
      border-radius: 0.2rem;
      margin: 0 0.2rem;
    }
    .snack,
    .discount-card {
      color: orange;
      border: 1px solid orange;
      padding: 0 0.2rem;
      border-radius: 0.2rem;
      margin: 0 0.2rem;
    }
  }
}
</style>
