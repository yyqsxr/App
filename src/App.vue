<template>
  <div id="app">
    <div class="Header_head">
      <router-link class="Header_logo" to="/home"></router-link>
      <div class="weizhi">
        <span id="wxb">
          <img src="./assets/lun/wxb.png" alt="">
        </span>
        <span @click="setInt">{{area.city_name}}</span>
        <span id="xian"></span>
        <span @click="setWea">{{area.weather?area.weather.temperature:''}} 度</span>
        <span id="duoyun">
            <img src="./assets/lun/duoyun.png" alt="">
        </span>
      </div>
    </div>

    <div id="sou" v-show="memeda">
        <el-input
        placeholder="请输入要查询天气的城市"
        icon="search"
        v-model="cityname"
        @click="getWeather" class="put">
        </el-input>
    </div>

    <div id="weat" v-show="weat" >
        <span id="data">{{area.date}} 农历 {{area.moon}}</span>
        <ul class="Header_items" >
          <li class="Header_item" v-for="item in w">
            <span>{{item.week}}</span>
            <span>{{item.date}}</span>
            <span>{{item.info.day[2]}}</span>
            <span id="duo">
              <img src="./assets/lun/duoyun.png" alt="">
            </span>
            <span>{{item.info.day[1]}}</span>
            <span>{{item.info.day[3]}}</span>
            <span>优</span>
          </li>

        </ul>
    </div>
    <div>
      <p id="welcom" v-show="haha">欢迎使用有趣天气</p>
      <div class="tian">
          <img src="./assets/lun/tian.jpg" alt="">

          <video id="video" loop="loop" autoplay="autoplay" controls="true" v-show="video"> 
             <source src="http://cdn.moji.com/websrc/video/video621.mp4" type="video/mp4">
          </video>

          <el-button class="btn" size="mini" type="primary" v-show = "clo" icon="close" @click="dian"></el-button>
          
      </div>
      
    </div>
    <backTop></backTop>
      <!-- 定义显示的区域 -->
      <router-view></router-view>
  </div>  
</template>

<script>
    //关闭视频
	import $ from 'jquery'
  		
  	$(function(){
	    // console.log($('#video'))
	    $('.btn').click(function(){
	      // console.log(111)
	        // this.clo = false;
	        $('.btn').css('display','none')
	       
	        this.video = false;
	    })

	})
  import backTop from './components/BackTop.vue'
  export default{
    data() {
      return {
        input2: '',
        memeda:false,
        haha:true,
        weat:false,
        // w 表示天气
        w : [],
        area:{},
        cityname : '',
        video:true,
        clo:true
      }
    },
    components:{
      backTop
    },
    methods: {
      dian(){
        this.video = false;
      },
      setInt(){
        if(!this.haha){
          this.haha = true;
          this.memeda = false;
          return;
        }
        this.haha = false,
        this.memeda = true
      },
      setWea(){
        if(this.weat){
          this.weat = false;
          return;
        }

        this.weat=true;
      },
      handClick(){},

      getWeather(){
        // 调用函数
        if(!this.cityname){
          this.cityname = '北京'
        }

        // 请求天气
        this.$http.get('/afd/api/Weather/Query',{
          params : {
            key : 'f9d34cb7fe574d23be415dfd7adfd2e8',
            cityname : this.cityname
          }
        }).then(function(msg){
          // console.log(msg.data.result.weather); 
          // console.log(msg.data.result.realtime)

         var areas =  msg.data.result.realtime;

          this.area = areas;
          // console.log(areas);

          this.w = msg.data.result.weather;
          // 清除当前天气的值
          this.cityname = ''
        }.bind(this)).catch(function(err){
          console.log(err);
        })
      }
    },
    created(){
      // 获取天气
      this.getWeather();

    }
  }
</script>
<style>

ul,li{
  list-style: none;
}
.btn{

  position: absolute;
  z-index: 930;
  top:10%;
  right: 15%;
}
#video{
    display: inline-block;
    width:70%; 
    left: 15%;
    top: 10%;
    position: absolute;
    z-index: 800;
}
.logo {
    display: block;
    width: 11.5625rem;
    float: left;
    margin: 1.25rem 0.9375rem;
    text-align: left;
}
.Header_head {
    width: 100%;
    height: 2.75rem;
    color: #fff;
    background: #262a32;
}
.Header_logo {
    float: left;
    width: 5.625rem;
    height: 1.4375rem;
    margin: 0.65625rem 0 0 0.6562rem;
    background: url(./assets/lun/logo.png) no-repeat;
    background-size: 100%;  
}
#sou{ 
  width:100%;
  height:2.75rem;
  line-height: 2.75rem;
  background: #000000;
}
.put{
  width:80%;
  margin:0 auto;
  margin-left:10%;
}
.IndexWeather_title {
    display: block;
    width: 12.1875rem;
    height: 10.3125rem;
    margin: 0 auto;
    padding: 1.2rem 0;
    background: url(./assets/lun/weather.png) no-repeat 50%;
    background-size: 100%
}
#weather-bg{
  background: url(./assets/lun/bg_weather.jpg) no-repeat;
    background-size: 100%;
}
.IndexWeather_phone{
  display: block;
    width: 20.0rem;
    height: 19.625rem;
    margin: 0 auto;
    background: url(./assets/lun/phone.png) no-repeat 50%;
    background-size: 100%;
}
.tian{
  width:100%;
  height:13.1875rem;
  position: relative;
}
.tian>img{
  width:100%;
  height:13.1875rem;
}
#wxb{
  display: block;
  width:1.5625rem;
  height:1.5625rem;
}
#wxb>img{
  width: 100%;
  height:100%;
}
.weizhi{
  float: right;
  height:2.75rem;
  line-height: 2.75rem;
}
.weizhi span{
  float: left;
  display: block;
}
#duoyun img{
  width:1.5rem;
  height:1.5rem;
  margin-left: 0.3125rem;
}
#xian{
  width:1px;
  background: #fff;
  height:15px;
  margin-top: 0.9375rem;
  margin-left: 0.625rem;
  margin-right: 0.625rem;
}
#welcom{
  width:100%;
  height:2.75rem;
  line-height:2.75rem; 
  background: #30343F;
  text-align: center;
  margin:0;
  color:#fff;
  font-size: 1.0rem;
}

#weat{
    width: 100%;
    position: absolute;
    background: rgba(0,0,0,.7);
    z-index: 950;
    color: #fff;
}

#data{
  width:100%;
  display: block;
  font-size: 1.0rem;
  color: #fff;
  height: 2.75rem;
  line-height: 2.75rem;
  background: #000000;
}
.Header_items {
    position: relative;
    width: 100%;
    z-index: 2;
    padding-left:0;
}
.Header_item {
    float: left;
    width: 25%;
    margin: 1.2rem 0;
    padding: .13333rem 0;
    border-right: 1px solid hsla(0,0%,100%,.2);
    line-height: 1;
    text-align: center;
    display: block;
    overflow: hidden;
}
.Header_item span {
    display: block;
    margin-top: 0.3125rem;
    padding: .13333rem 0;
    font-size: 0.875rem;
}
#duo{
  width:2.1875rem;
  height:2.1875rem;
  margin-left: 1.875rem;
}
#duo>img{
  width:100%;
  height:100%;
}
</style>