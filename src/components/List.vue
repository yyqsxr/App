<template>
	<div id="show">
		<img v-if="arr.length==0" width="100%" src="../assets/lun/loading.gif" alt="">
		<div v-else class="NewsList_newsList">
			<ul>
				<li v-for="item in arr" class="NewsList_item">
					<p class="NewsList_title">
						<router-link :to="{name:'content',params:{content:item.content+','+item.title}}">{{item.title}}</router-link>

						<p>时间:{{times.date}}</p>
					</p>
					<p class="NewsList_text" v-html="item.digest"></p>
					<p class="NewsList_img">
						<img :src="item.top_image" alt="">
					</p>
				</li>
			</ul>
		</div>
			
	</div>
</template>

<script>
export default{
	data(){
		return{
			arr:[],
			times:{}
		}
	},
	methods:{
      getNews(){
      	this.$http.get('/news',{
      		params:{
      			tableNum:1,
      			pagesize:20,
      			
      		}
      	}).then(function(msg){
      		// console.log(msg.data.data.)
      		this.arr = msg.data.data;
      	}.bind(this)).catch(function(err){
      		console.log(err)
      	})	
      }
	},
	created(){
		this.getNews();
		var data = this.$route.params.times.substring(0,10) 
		// console.log(this.$route.params.times)
		this.times.date = data;
	}
}
</script>

<style>
#show{
	width:100%;
	overflow: hidden;
}
.NewsList_newsList {
    padding: .53333rem;
    background: #ECFFEC;
}
.NewsList_item {
    padding: .5rem 0;
    border-bottom: 1px solid #ccc;
    margin-left: -8%;
    margin-bottom: 0.625rem;
}
.NewsList_title a {
    color: #333;
    font-size: 16px;
    text-decoration: none;
    font-weight: bold;
}
.NewsList_text {
    margin: .13333rem 0;
    line-height: 1.5;
    color: #767d89;
    font-size: 14px;
}
.NewsList_img{
	width: 100%;
	overflow: hidden;
}
.NewsList_title>a{
	font-size: 20px;
	font-weight: bold;
}
</style>	