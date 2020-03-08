<template>
  <div class="cinema-page">
    <div class="header">
      <span>影院</span>
    </div>
    <div class="search">
      <content-search @search="search"></content-search>
    </div>
    <!-- <div class="select">
      <content-select></content-select>
    </div> -->
    <div class="content">
      <content-inner :cinemasData="cinemasData" :filter="filter"></content-inner>
     
    </div>
  </div>
</template>

<script>
import ContentSearch from './ContentSearch.vue'
import ContentInner from './ContentInner.vue'
// import axios from 'axios'
// import ContentSelect from './ContentSelect.vue'
export default {
  data() {
    return {
      cinemasData:this.getData().cinemas,
      filter:''
    };
  },
  mounted() {
    // axios.get('http://m.maoyan.com/ajax/search?kw=%E4%B8%AD&cityId=30&stype=2').then((response)=>{
    //   console.log(response);
    // })
  },
  components: {
    ContentSearch,
    ContentInner,
    // ContentSelect
  },
  computed: {},
  methods: {
    search(value){
      this.filter = value
    },
    getData(){
      var data = {"cinemas":[{"id":17398,"mark":0,"nm":"中影星河影城（大浪店）","sellPrice":"","addr":"龙华区龙华新区大浪劳动广场篮球场对面二楼","distance":"600m","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"giftTag":"","hallType":[],"hallTypeVOList":[],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":10583,"mark":0,"nm":"橙天欢乐影城（大浪店）","sellPrice":"","addr":"龙华区大浪商业中心二期纷享城3楼（万盛百货）","distance":"800m","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"giftTag":"","hallType":[],"hallTypeVOList":[],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"开卡特惠，首单2张最高立减4元","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":74,"mark":0,"nm":"大浪百誉（大浪商业中心店）","sellPrice":"","addr":"龙华区大浪街道华旺路大浪商业中心10栋3楼","distance":"900m","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"giftTag":"","hallType":[],"hallTypeVOList":[],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":16173,"mark":0,"nm":"新耀客国际影城","sellPrice":"","addr":"龙华区龙华新区大浪街道浪琴路11号城市俪人工业区C101","distance":"1.7km","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"giftTag":"","hallType":[],"hallTypeVOList":[],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"开卡特惠，首单2张最高立减4元","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":16156,"mark":0,"nm":"星悦国际影城","sellPrice":"","addr":"宝安区石岩街道石龙社区工业一路与工业二路交汇处（惠科时尚广场A栋东侧二楼）","distance":"2.7km","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"giftTag":"","hallType":[],"hallTypeVOList":[],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"开卡特惠，首单2张最高立减4元","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":16356,"mark":0,"nm":"中影熙腾影城（龙华店）","sellPrice":"","addr":"龙华区龙华街道东环一路世贸广场一楼26、27、30号","distance":"3.9km","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"giftTag":"","hallType":["4K厅","60帧厅"],"hallTypeVOList":[{"name":"4K厅","url":""},{"name":"60帧厅","url":""}],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"开卡特惠，首单2张最高立减6元","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":17337,"mark":0,"nm":"中影德金影城（龙华店）","sellPrice":"","addr":"龙华区龙华街道人民北路291号5楼D5-pt9（百佳华商场5楼）","distance":"4.3km","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"giftTag":"","hallType":[],"hallTypeVOList":[],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":25483,"mark":0,"nm":"保利国际影城（深圳龙华悦都店）","sellPrice":"","addr":"龙华区龙华新区龙观东路与清龙路交汇处保利天街3楼保利国际影城","distance":"4.3km","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"giftTag":"","hallType":["杜比全景声厅","巨幕厅"],"hallTypeVOList":[{"name":"杜比全景声厅","url":""},{"name":"巨幕厅","url":""}],"sell":1,"snack":1,"vipTag":""},"promotion":{"cardPromotionTag":"","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":10960,"mark":0,"nm":"万达影城（龙华汇海广场店）","sellPrice":"","addr":"龙华区创业路汇海广场3楼（龙华大润发斜对面）","distance":"4.5km","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"giftTag":"","hallType":["CGS中国巨幕厅","CINITY厅"],"hallTypeVOList":[{"name":"CGS中国巨幕厅","url":""},{"name":"CINITY厅","url":""}],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":16787,"mark":0,"nm":"中影金影星汇影城","sellPrice":"","addr":"宝安区石岩街道宝石东路209号星城购物中心4楼","distance":"4.7km","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"giftTag":"","hallType":["杜比全景声厅"],"hallTypeVOList":[{"name":"杜比全景声厅","url":""}],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"开卡特惠，首单2张最高立减6元","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":24135,"mark":0,"nm":"中影w影城（龙华店）","sellPrice":"","addr":"龙华区龙华街道和平路龙华地铁站D出口宝银坊一楼中影W影城","distance":"4.7km","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"giftTag":"","hallType":[],"hallTypeVOList":[],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":15021,"mark":0,"nm":"金逸新新影城","sellPrice":"","addr":"龙华区清泉路9号TTMALL星光城3楼","distance":"4.8km","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"giftTag":"","hallType":[],"hallTypeVOList":[],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"开卡特惠，首单2张最高立减6元","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":45,"mark":0,"nm":"华夏太古国际影城（龙华金銮店）","sellPrice":"","addr":"龙华区和平东路金銮时代大厦二楼204号（大润发隔壁）","distance":"4.9km","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"giftTag":"","hallType":[],"hallTypeVOList":[],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"开卡特惠，首单1张最高立减10元","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":10793,"mark":0,"nm":"华夏国际影城（观澜店）","sellPrice":"","addr":"龙华区观澜大道75号田背路口比邻新天地1楼","distance":"5.1km","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"giftTag":"","hallType":[],"hallTypeVOList":[],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"开卡特惠，首单2张最高立减6元","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":15436,"mark":0,"nm":"中影熙腾影城（观澜店）","sellPrice":"","addr":"龙华区观澜大水坑一村盛世华联4楼","distance":"5.2km","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"giftTag":"","hallType":[],"hallTypeVOList":[],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"开卡特惠，首单2张最高立减4元","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":2297,"mark":0,"nm":"金逸影城（龙华东环店）","sellPrice":"","addr":"龙华区建设路与东环路交界处人人乐百货（原崇尚百货）4楼（近地铁龙华站）","distance":"5.2km","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":0,"giftTag":"","hallType":[],"hallTypeVOList":[],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"开卡特惠，首单2张最高立减4元","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":25591,"mark":0,"nm":"CINESKY新天影院IMAX","sellPrice":"","addr":"龙华区鸿荣源壹方天地A区L2-026","distance":"5.3km","tag":{"allowRefund":0,"buyout":0,"cityCardTag":0,"deal":0,"endorse":0,"giftTag":"","hallType":["IMAX厅","杜比全景声厅","4K厅"],"hallTypeVOList":[{"name":"IMAX厅","url":""},{"name":"杜比全景声厅","url":""},{"name":"4K厅","url":""}],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"开卡特惠，首单2张最高立减2元","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":15166,"mark":0,"nm":"万成国际影城","sellPrice":"","addr":"龙华区人民路264号（得莱斯义乌商贸城4F）","distance":"5.4km","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"giftTag":"","hallType":[],"hallTypeVOList":[],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":25743,"mark":0,"nm":"上影盛泰国际影城","sellPrice":"","addr":"龙华区民治街道上塘地铁站D出口ATMALL购物中心三楼上影盛泰国际影城","distance":"5.5km","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"giftTag":"","hallType":["杜比全景声厅"],"hallTypeVOList":[{"name":"杜比全景声厅","url":""}],"sell":1,"snack":1,"vipTag":""},"promotion":{"cardPromotionTag":"","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""},{"id":1084,"mark":0,"nm":"金逸影城（观澜店）","sellPrice":"","addr":"龙华区观澜镇观光路万悦城广场4楼（富士康南门）","distance":"5.8km","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":0,"giftTag":"","hallType":[],"hallTypeVOList":[],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"开卡特惠，首单2张最高立减4元","couponPromotionTag":"","merchantActivityTag":"","packShowActivityTag":"","platformActivityTag":"","starActivityTag":""},"showTimes":""}],"ct_pois":[{"ct_poi":"936879945111165696_a17398_c0","poiid":157778805},{"ct_poi":"936879945111165696_a10583_c1","poiid":6992894},{"ct_poi":"936879945111165696_a74_c2","poiid":45798},{"ct_poi":"936879945111165696_a16173_c3","poiid":101298478},{"ct_poi":"936879945111165696_a16156_c4","poiid":105013856},{"ct_poi":"936879945111165696_a16356_c5","poiid":115875339},{"ct_poi":"936879945111165696_a17337_c6","poiid":157187132},{"ct_poi":"936879945111165696_a25483_c7","poiid":178864756},{"ct_poi":"936879945111165696_a10960_c8","poiid":40847505},{"ct_poi":"936879945111165696_a16787_c9","poiid":150063945},{"ct_poi":"936879945111165696_a24135_c10","poiid":162897906},{"ct_poi":"936879945111165696_a15021_c11","poiid":99245208},{"ct_poi":"936879945111165696_a45_c12","poiid":1027737},{"ct_poi":"936879945111165696_a10793_c13","poiid":42527383},{"ct_poi":"936879945111165696_a15436_c14","poiid":92447648},{"ct_poi":"936879945111165696_a2297_c15","poiid":1541475},{"ct_poi":"936879945111165696_a25591_c16","poiid":179651877},{"ct_poi":"936879945111165696_a15166_c17","poiid":92472070},{"ct_poi":"936879945111165696_a25743_c18","poiid":182637692},{"ct_poi":"936879945111165696_a1084_c19","poiid":1542727}],"paging":{"hasMore":true,"limit":20,"offset":0,"total":323},"resId":"1583649962521"}
      return data;
    }
  }
};
</script>

<style lang="scss" scope>
.cinema-page {
  position: relative;
  height:100vh;
  .header {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-around;
    background: red;
  }
  .search {
    position: absolute;
    left: 0;
    top: 3rem;
    right: 0;
    width: 100%;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-around;
  }
  .select {
    position: absolute;
    left: 0;
    top: 5.5rem;
    right: 0;
    height:2.5rem;
    line-height: 2.5rem;
    width: 100%;
    border-bottom:1px solid #ccc;
    font-size: 1rem;
    display: flex;
    justify-content: space-around;
  }
  .content {
    position: absolute;
    left: 0;
    top: 5.5rem;
    right: 0;
    bottom: 3rem;
    overflow: auto;
    // .content-search {
    //   display: flex;
    //   justify-content: space-around;
    //   width: 100%;
    //   align-items: center;
    //   height:2.5rem;
    //   line-height: 2.5rem;
    //   background:rgb(240, 239, 239);
    // }
    // .content-inner {
    //   display: flex;
    //   justify-content: space-around;
    //   width: 100%;
    //   align-items: center;
    //   height:5rem;
    //   line-height: 5rem;
    // }
  }
}
</style>
