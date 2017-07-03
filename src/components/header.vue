<template>
  <div id="app">
    <div class="Header_head">
      <span class="Header_logo"></span>
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
      <img class="tian" src="./assets/lun/tian.jpg" alt="">
    </div>
      <!-- 定义显示的区域 -->
      <router-view></router-view>
  </div>  
</template>

<script>
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
      }
    },
    methods: {
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
          // if(err){
          //   alert('别闹');
          // }
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

li{
  list-style: none;
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

</style>