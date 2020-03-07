<template>
	<div class="big-box">
		<div class="box-top">
			<h3>近期最受期待</h3>
			<div class="scroll-box">
				<div class="mover-b">
					<div v-for="(item,index) in moverB" :key="index" class="mover1">
						<img :src="(item.img).replace('w.h', '85.115')"/>
						<h4 v-text="item.nm"></h4>
						<p v-text="item.comingTitle"></p>
					</div>
				</div>
			</div>
		</div>
		<div class="box-floor">
			<div v-for="(item,index) in moverC" :key="index" class="mover-c">
				<p v-text="item.comingTitle"></p>
				<div class="mover2">
					<img :src="(item.img).replace('w.h', '64.90')"/>
					<div class="message">
						<h2 v-text="item.nm"></h2>
						<div class="nub">
							<span v-text="item.wish"></span>
							想看
						</div>
						<div class="actor">
							主演:&nbsp;{{item.star}}
						</div>
						<div class="time">
							{{item.rt}}&nbsp;上映
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import { mapActions , mapState } from 'vuex'
	
	export default{
		mounted(){
			this.getMoverB()
			this.getMoverC()
		},
		methods: {
			...mapActions('film',['getMoverB','getMoverC']),
			
		},
		computed: {
			...mapState('film',['moverB','moverC'])
		}
	}
</script>

<style scoped lang="scss">
	.big-box{
		width: 100%;
		background-color: #f5f5f5;
		overflow: hidden;
		margin-bottom: 3.125rem;
		.box-top{
			width: 100%;
			padding: 0.75rem 0.9375rem;
			box-sizing: border-box;
			height: 13.125rem;
			overflow: hidden;
			margin-bottom: 0.625rem;
			background-color: #fff;
			h3{
				font-size: 0.875rem;
				margin-bottom: 0.75rem;
				color: #333;
				font-weight: normal;
			}
			.scroll-box{
				width: 100%;
				overflow-x: scroll;
				height: 12rem;
				.mover-b{
					width: 75rem;
					.mover1{
						float: left;
						width: 5.3125rem;
						height: 9.8125rem;
						margin-right: 0.625rem;
						img{
							width: 5rem;
							height: 7.1875rem;
							display: block;
							margin-bottom: 0.375rem;
						}
						h4{
							font-size: 0.8125rem;
							margin-bottom: 0.1875rem;
							color: #222;
							white-space: nowrap;
							text-overflow: ellipsis;
							overflow: hidden;
						}
						p{
							font-size: 0.75rem;
							color: #999;
						}
					}
				}
			}
		}
		.box-floor{
			background-color: #fff;
			.mover-c{
				height: 9.0625rem;
				width: 100%;
				p{
					padding: 0.75rem 0 0 0.9375rem;
					font-size: 0.875rem;
					color: #333;
				}
				.mover2{
					padding-left: 0.9375rem;
					img{
						display: block;
						margin-top: 0.75rem;
						width: 4rem;
						height: 5.625rem;
						float: left;
					}
					.message{
						float: left;
						margin-top: 0.625rem;
						margin-left: 0.625rem;
						h2{
							font-size: 1.0625rem;
							color: #333;
							margin-bottom: 0.375rem;
						}
						.nub{
							font-size: 13px;
							margin-left: -0.125rem;
							color: #666;
							span{
								font-size: 0.9375rem;
								font-weight: 600;
								color: #faaf00;
							}
						}
						.actor{
							font-size: 13px;
							color: #666;
							margin-top: 0.3125rem;
						}
						.time{
							font-size: 13px;
							color: #666;
							margin-top: 0.3125rem;
						}
					}
				}
			}
		}
	}
</style>
