<template>
	<div class="home">
		<div class="nav">
			<span class="left">Multiomics.info</span>
			<span class="right">
				<span @click="setActive('home')" :class="{ active: isActive('home') }">Home</span>
				<span @click="setActive('data')" :class="{ active: isActive('data') }">Data</span>
				<span @click="setActive('pipelines')" :class="{ active: isActive('pipelines') }">Pipelines</span>
				<span @click="setActive('terms')" :class="{ active: isActive('terms') }">Terms</span>
				<span @click="setActive('contact')" :class="{ active: isActive('contact') }">Contact</span>
			</span>
		</div>
		<div class="container">
			<div class="banner">
				<img class="banner-image" style="height: 280px;" src="/banner.png">
			</div>
			<div class="info">
				<Card style="width: 700px; margin:-70px auto 0 auto; text-align: center;">
			         <h2 class="title">Multiomics Data Portal</h2>
			         <div style="display: flex; justify-content: space-between; margin:20px 0 30px 0">
			         	<img style="height: 50px;" src="/logo-mdb-small.png">
			         	<span style="text-align: left">Collection of Multiomics Datasets and Services. The <strong>multiomics.info</strong> data portal crosslink different omics types (proteomics, genomics and metabolomics) </span>
			         </div>
			       	 <a class="action"><i class="fa fa-graduation-cap" aria-hidden="true"></i>Official Documents</a>
			    </Card>
			</div>
			<div class="content">
				<h2 class="title">What is Multiomics?</h2>
				<p>Multiomics, multi-omics or integrative omics is a biological analysis approach in which the data sets are multiple "omes", such as the genome, proteome, transcriptome, epigenome, and metabolome; in other words, the use of multiple omics technologies to study life in a concerted way. Multiomics integrates diverse omics data to find a coherently matching geno-pheno-envirotype relationship or association.</p>
			</div>
			<div class="card-container">
				<Card class="card-item">
			        <img src="/workflow-2.png" style="width: 250px">
			        <div class="title"><i class="fa fa-cubes" aria-hidden="true"></i>Pipelines</div>
			        <div class="description">Animations, colors, shadows, skins and many more! Get to know all our css styles in one place.</div>
			        <div class="action"><a>MORE</a></div>
			    </Card>
			    <Card class="card-item" >
			        <img src="/data-vizualization.png" style="width: 250px">
			        <div class="title"><i class="fa fa-television" aria-hidden="true"></i>Data Visualization</div>
			        <div class="description">Ready-to-use components that you can use in your applications. Both basic and extended versions!</div>
			        <div class="action"><a>MORE</a></div>
			    </Card>
			    <Card class="card-item">
			        <img src="/data-registry.png" style="width: 250px">
			        <div class="title"><i class="fa fa-code" aria-hidden="true"></i>Download Data</div>
			        <div class="description">Advanced components such as charts, carousels, tooltips and popovers. All in Material Design version.</div>
			        <div class="action"><a>MORE</a></div>
			    </Card>
			</div> 
		</div>
		<div class="footer">
			@2019 Copyright Multiomics.info 
		</div>
	</div>
</template>
<script>
	export default {
	  name: 'home',
	  data(){
	  	return {
	  		activeItem:'home'

	  	}
	  },
	  methods:{
		setActive(menuItem){
		    this.activeItem = menuItem
		    console.log('setAcitve')
		},
		isActive(menuItem){
			console.log('isActive')
			return this.activeItem === menuItem
		}
	  },
	  mounted () {
	    
	  }
	}
</script>
<style scoped>
.home {
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
}
.nav{
	display: flex;
	background-color: #094d8e;
	color: #eaeaea;
	width: 100%;
	justify-content: space-between;
    align-items: center;
}
.nav .left{
	margin-left: 5px;
	font-weight: bold;
}
.nav .right{
	display: flex;
}
.nav .right span{
	padding:10px 5px;
	/*margin:0 5px;*/
	cursor: pointer;
	width: 70px
}
.nav .right span:last-child{
	/*margin-right: 0;*/
}
.nav .right span:hover, .active{
	background-color: #4787c582;
	opacity: 0.8
}
.container{
	position: relative;
	margin-bottom: 50px;
}
.banner{
	text-align: right;
	padding: 10px;
	background: #f8f8f8;
}
.info .title{
	font-size: 24px;
    color: black;
    margin-top: 10px;
}
.info .action{
	color: #64b499;
	padding: 5px 10px;
    border: 1px solid #e8eaec;
    border-radius: 3px;
    display: inline-block;
    margin-bottom: 10px;
}
.info .action i{
	margin-right: 5px;
}
.content{
	width: 50%;
	margin:40px auto 30px auto;
}
.content .title{
	font-size: 24px;
    color: black;
    margin-bottom: 15px;
}
.card-container .card-item{
	display: inline-block;
	width: 280px;
	margin: 20px;
	height: 330px;
}
.card-container .card-item .title{
	text-align: left;
	font-size: 18px;
    font-weight: bold;
    color: black;
}
.card-container .card-item .title i{
	color: #258cea;
	margin-right:5px;
}
.card-container .card-item .description{
	text-align: left;
	font-size: 12px;
	margin: 10px 0 20px 0;
}
.card-container .card-item .action{
	text-align: right;
}
.card-container .card-item .action a{
	padding: 10px 20px;
    background: black;
    color: white;
    font-size: 10px;
    font-weight: bold;
}
.footer{
	text-align: center;
	background-color: #343840;
	padding:10px;
	color: #eaeaea;
}
</style>
<style>

</style>

