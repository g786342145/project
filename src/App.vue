<template>
  <div id="app">
	<router-view></router-view>
	<div class="floor">
		<router-link to="/flim" tag="span" active-class="active" class="butten">电影</router-link>
		<router-link to="/cinema" tag="span" active-class="active" class="butten">影院</router-link>
		<router-link to="/center" tag="span" active-class="active" class="butten">我的</router-link>
	</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
	
  }
}
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0
	}
	#app{
		// height: 100%;
		.floor{
			position: fixed;
			bottom: 0;
			display: flex;
			width: 100%;
			border-top: 1px solid #ccc;
			.active{
				color: red;
			}
			.butten{
				flex: 1;
				text-align: center;
				height: 3rem;
				line-height: 3rem;
			}
		}
	}
		
			
				
</style>
