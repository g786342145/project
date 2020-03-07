<template>
	<div class="big-box">
		<div class="box-top">
			<a href="#" class="top-up">
				<img src="../../public/maoyan.png" class="a1" />
				<div class="a2">
					<h3>猫眼</h3>
					<p>在线选座，热门影视，爱上看电影</p>
				</div>
				<p class="a3">立即打开</p>
			</a>
			<div class="top-down">
				<div class="b1">
					<span>城市</span>
					<i></i>
				</div>
				<div class="b2">
					<router-link to="/flim/nowplaying" tag="span" class="but" active-class="act">正在热映</router-link>
					<router-link to="/flim/comingsoon" tag="span" class="but" active-class="act">即将上映</router-link>
				</div>
				<div class="b3">
					<p>搜索</p>
				</div>
			</div>
			<router-view class="conter"></router-view>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="scss">
	.big-box{
		width: 100%;
		// height: 100%;
		.box-top{
			width: 100%;
			height: 6.8125rem;
			.top-up{
				height: 4rem;
				display: flex;
				text-decoration: none;
				position: relative;
				border-bottom: 0.0625rem solid #ccc;
				.a1{
					width: 2.75rem;
					height: 2.75rem;
					position: absolute;
					top: 0.6875rem;
					left: 0.9375rem;
					display: block;
				}
				.a2{
					position: absolute;
					top: 0.8125rem;
					left: 4.125rem;
					h3{
						font-size: 1.0625rem;
						color: #222;
						font-weight: normal;
					}
					p{
						font-size: 0.75rem;
						color: #999;
					}
				}
				.a3{
					width: 4.25rem;
					height: 1.875rem;
					font-size: 0.8125rem;
					background-color: rgb(239,66,56);
					color: #fff;
					line-height: 1.875rem;
					text-align: center;
					border-radius: 0.125rem;
					position: absolute;
					top: 1.0625rem;
					right: 0.9375rem;
				}
			}
			.top-down{
				height: 2.8125rem;
				display: flex;
				border-bottom: 0.0625rem solid #ccc;
				justify-content: space-between;
				.b1{
					line-height: 2.8125rem;
					span{
						padding-left: 0.9375rem;
						line-height: 2.8125rem;
					}
					i{
						border: 0.25rem solid #b0b0b0;
						border-left-color: transparent;
						border-right-color: transparent;
						border-bottom-color: transparent;
						line-height: 2.8125rem;
						display: inline-block;
						margin: 0.3125rem 0 0 0.25rem;
					}
				}
				.b2{
					display: flex;
					.but{
						display: block;
						box-sizing: border-box;
						line-height: 2.8125rem;
						margin: 0 0.75rem;
						width: 4.8125rem;
						height: 2.9rem;
						text-align: center;
						border-bottom: 0.125rem solid transparent;
					}
					.act{
						border-color: red;
						color: red
					}
				}
				.b3{
					p{
						margin: 0.625rem 0.9375rem 0.625rem 0.625rem
					}
				}
			}
		}
	}
</style>
