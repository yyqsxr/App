<template>
	<div>
	    <div id="weather-bg">
	        <div class="IndexWeather_title"></div>
	        <div class="IndexWeather_phone"></div>
	        <div class="IndexWeather_desc">
	            <div class="IndexWeather_time">
	                <b>分钟极</b>
	                <span>短时预报分钟</span>
	            </div>
	            <div class="IndexWeather_KM">
	                <b>公里极</b>
	                <span>预报范围缩小到1公里</span>
	            </div>
	            <div class="IndexWeather_AI">
	                <b>AI智能</b>
	                <span>
	                  机械学习技术结合
	                </span>
	            </div>
	            <div class="IndexWeather_view">
	                <b>可视化</b>
	                <span>
	                    全球数据预报可视化
	                </span>
	            </div>
	        </div>
	    </div>

	    <div class="IndexInfo_info">
	        <title class="IndexInfo_title"></title>
	        <div class="IndexInfo_more">
	            <router-link :to="{name:'list',params:{times:citytime.times}}">点击获取更多资讯 ></router-link>
	        </div>
	        <div class="IndexInfo_list" >
	            <ul >
	              <li v-for="item in news" class="IndexInfo_item">
	                  <p class="IndexInfo_pic">
	                      <img v-if="item.img" width="100%" height="100%":src="item.img" alt="">
	                      <img v-else="item.img" width="100%" height="100%"src="../assets/lun/tian.jpg" alt="">

	                  </p>
	                  <p class="IndexInfo_text">
	                      <a href="">{{item.title}}</a>
	                      <b>{{item.pdate_src}}</b>
	                      <span>{{item.content}}</span>
	                  </p>
	              </li>
	            </ul>
	        </div>
	    </div>
	</div>
</template>
<style>
li{
  list-style: none;
}


.IndexWeather_desc{
  padding: 0 .4rem;
  font-size: 0.75rem;
  height: 7.375rem;
  color: #fff;
}
.IndexWeather_AI, .IndexWeather_KM, .IndexWeather_time, .IndexWeather_view {
    float: left;
    margin: .4rem 0.2rem 0;
    padding-left: 1.06667rem;
    line-height: 1.5;
}
.IndexWeather_time {
    margin-left: 0.625rem;
    background: url(../assets/lun/time.png) no-repeat 0;
    background-size: 2rem 2rem; 
}
.IndexWeather_AI span, .IndexWeather_KM span, .IndexWeather_time span, .IndexWeather_view span {
    display: block;
    font-size: 10px;
    margin-left: 2.1875rem;
  }

.IndexWeather_AI b, .IndexWeather_KM b, .IndexWeather_time b, .IndexWeather_view b {
    display: block;
    font-size: 15px;
    font-weight: 100;
    margin-left: 2.1875rem;
}
.IndexWeather_KM {
    margin-left: 1.4rem;
    background: url(../assets/lun/KM.png) no-repeat 0;
    background-size: 2rem 2rem; 
}
.IndexWeather_AI {
    background: url(../assets/lun/AI.png) no-repeat 0;
    background-size: 2rem 2rem; 
}
.IndexWeather_view {
    background: url(../assets/lun/view.png) no-repeat 0;
    background-size:2rem 2rem; 
}

.IndexInfo_info {
    width: 100%;
    color: #fff;
    background: url(../assets/lun/bg_info.jpg) no-repeat;

    overflow: hidden;
    /*background-size: 100%;*/
}

.IndexInfo_title {
    display: block;
    width: 7.625rem;
    height: 6.1875rem;
    margin: 0 auto;
    padding: 1.2rem 0 .53333rem;
    background: url(../assets/lun/info.png) no-repeat center 2.5rem;
    background-size: 100%;
    color: #fff;
}
.IndexInfo_more, .IndexInfo_more a {
    color: #aaaeb7;
    text-decoration: none;
}
.IndexInfo_more {
    margin: 0 auto;
    padding-right: .34667rem;
    line-height: 1;
    text-align: center;
    font-size: 14px;
}

.IndexInfo_list {
    padding: .8rem .66667rem 1.06667rem;
    position: relative;
}
.IndexInfo_list>ul{
    margin-left: -1.25rem;
}
.IndexInfo_pic {
    float: left;
    width: 4.375rem;
    height:4.5rem;
    margin: 0 .4rem 0 0;
    overflow: hidden;
}
.IndexInfo_pic img{
  display: block;
}
.IndexInfo_item{
    display: block;
    padding-bottom: .4rem;
    margin-bottom: .4rem;
    border-bottom: 1px solid hsla(0,0%,100%,.1);
}
.IndexInfo_text a {
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    overflow: hidden;
}

.IndexInfo_text b {
    display: block;
    font-size: 12px;
    font-weight: 100;
    color: #989ba3;
}

.IndexInfo_text span {
    margin: .18667rem 0 0;
    font-size: 12px;
    color: #b8bcc6;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>	
<script>
export default{
    data() {
      return {
        citytime:{},
        news:[]
      }
    },
    methods: {

      //获取新闻
      getNew(){
          //请求新闻
          this.$http.get('/afd/api/ActNews/Query',{
            params:{
              key:'af4caf5be4734c30a042c206c98efb17',
              keyword:'滑坡'
            }
          }).then(function(msg){
            // console.log(msg.data.result[0].pdate_src);

            this.news = msg.data.result;
            this.citytime.times = msg.data.result[0].pdate_src;

          }.bind(this)).catch(function(err){
            console.log(err);
          })
      }

    },
    created(){
      this.getNew();
      
    }

  }
</script>