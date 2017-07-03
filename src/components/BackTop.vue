<template>
  <div class="backTop"  v-show="isShow" @click="goTop">
  </div>
</template>

<script>
    import $ from 'jquery'
    export default{
      data () {
        return {
          isShow: false
        }
      },
      methods:{
        goTop(){ 
          $('body').animate({scrollTop: 0}, 500)
        }
      },
      created(){
          var vThis = this;
          $(window).scroll(function(){
            // console.log($(window).scrollTop());
            if($(window).scrollTop()>=150){
                vThis.isShow = true;
              } else {
                vThis.isShow = false;
              }
          })
      }
  }
</script>

<style lang="css" scoped>
.backTop{
    display: block;
    position: fixed;
    z-index: 999;
    right: 2%;
    bottom: 1.84rem;
    width: 15%;
    height: 15%;
    background: url(../assets/lun/toTop.png) no-repeat 50%;
    background-size: 100%;
}
</style>
