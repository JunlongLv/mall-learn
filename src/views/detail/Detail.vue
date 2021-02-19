<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";

  import {getDetail} from 'network/detail'

    export default {
      name: "Detail",
      components: {
        DetailNavBar,
        DetailSwiper
      },
      data() {
          return {
            iid: null,
            topImages: []
          }
      },
      created() {
        // 1.保存输入的iid
        this.iid = this.$route.params.iid

        // 2.根据iid请求详情数据
        getDetail(this.iid).then(res => {
          console.log(res)
          // 1.获取顶部的轮播图数据
          this.topImages = res.result.itemInfo.topImages
        }, error => {
          console.log(error)
        })
      }
    }
</script>

<style scoped>

</style>
