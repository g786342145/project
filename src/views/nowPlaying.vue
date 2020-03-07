<template>
	<div class="big-box">
		<div class="center">
			<h3>热门影人</h3>
			<div class="scroll-box">
				<ul class="box">
					<li>
						<img src='../../public/films-img/9ccb37abf959c64231184506debf5def146192.jpg'/>
						<p>甄子丹</p>
					</li>
					<li>
						<img src='../../public/films-img/1fb88ccc945980801701d50597bae66553347.jpg'/>
						<p>曾志伟</p>
					</li>
					<li>
						<img src='../../public/films-img/e60b091ba479e5951331069e561977ab50378.jpg'/>
						<p>马泰</p>
					</li>
					<li>
						<img src='../../public/films-img/97d6840d9605478e91912d5f05e9c55634719.jpg'/>
						<p>孟鹤堂</p>
					</li>
					<li>
						<img src='../../public/films-img/ae497712ff7d5004d0bebb6154b30d9457982.jpg'/>
						<p>郑云</p>
					</li>
					<li>
						<img src='../../public/films-img/b201f991c2cf98dfd6fafe97ad90eecd176389.png'/>
						<p>郭德纲</p>
					</li>
					<li>
						<img src='../../public/films-img/c7d7683eeb659efb9270fb38cda1704d118177.jpg'/>
						<p>于谦</p>
					</li>
					<li>
						<img src='../../public/films-img/0a93613649a148e0ff55f53d02668db0141734.jpg'/>
						<p>胡夏</p>
					</li>
					<li>
						<img src='../../public/films-img/4fa712b10064eb84420cee5782f97b9831472.jpg'/>
						<p>杨九郎</p>
					</li>
					<li>
						<img src='../../public/films-img/d290c66b4c40f6d676c64054b9ef4d1a55520.jpg'/>
						<p>沈梦辰</p>
					</li>
				</ul>
			</div>
		</div>
		<!-- <div class="foot">
			
		</div> -->
	</div>
</template>

<script>
	// import { mapActions } from 'vuex'
	
	// export default{
	// 	mounted(){
	// 		this.getMover()
	// 	},
	// 	methods:{
	// 		...mapActions('film',['getMover']),
		
	// 	}
	// }
</script>

<style scoped lang="scss">
	.big-box{
		background-color: #f5f5f5;
		width: 100%;
		overflow: hidden;
		.center{
			padding: 0.75rem 0.9375rem 0.75rem 0.9375rem;
			width: 100%;
			background-color: #FFFFFF;
			margin: 0.625rem 0;
			box-sizing: border-box;
			height: 11rem;
			height: 12.5rem;
			overflow: hidden;
			h3{
				font-weight: normal;
				font-size: 0.875rem;
				color: #333;
				margin-bottom: 0.75rem;
			}
			.scroll-box{
				width: 100%;
				overflow-x: scroll;
				height: 13.5625rem;
				.box{
					width: 1000px;
					height: 9.875rem;
					li{
						float: left;
						width: 5.3125rem;
						height: 8.8125rem;
						margin-right: 0.75rem;
						list-style: none;
						img{
							width: 5.3125rem;
							display: block;
							margin-bottom: 0.375rem;
						}
						p{
							font-size: 13px;
							color: #222;
							font-weight: bold;
						}
					}
				}
			}
			
		}
	}
</style>
