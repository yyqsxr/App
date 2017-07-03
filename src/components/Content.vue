<template>
	<div id="show">
		<h3 v-html="date.title"></h3>
		<p v-html="date.con"></p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				date:{}
			}
		},
		methods:{
			
		},
		created(){
			var data = this.$route.params.content
			// console.log(this.$route.params.content);
			var date =data.split(",");
			// console.log(date)
			this.date.title = date[1]
			this.date.con = date[0]
			console.log(this.date)
		}
	}
</script>

<style>
	#show{
		padding: 1.3125rem 1.625rem;
		background: #ECFFEC;
	}

	#show h3{
		font-weight: bold;
	}

	#show p{
		font-size: 1.0rem;
	}
</style>	