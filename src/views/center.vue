<template>
  <div>
    <div class="Top">
      <div class="back">
        <a class="iconfont icon-zuojiantou" href="javascript:history.back()"></a>
      </div>
      <div class="maoyan">
        <span>猫眼电影</span>
      </div>
    </div>
    <div class="main">
      <div @click="num=1">美团账号登录</div>
      <div @click="num=2">手机验证登录</div>
    </div>
    <div class="l">
      <div :class="{active:num == 1}"></div>
      <div :class="{active:num == 2}"></div>
    </div>
    <div>
      <form>
        <div>
          <input type="text" class="form_text" placeholder="账户名/手机号/Email" />
        </div>
        <div>
          <input type="text" class="form_text" placeholder="请输入您的密码" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1
    };
  }
};
</script>

<style lang="scss" scoped>
.Top {
  background: #df2d2d;
  height: 3.125rem;
}
.back {
  height: 100%;
  width: 45%;
  float: left;
}
.maoyan {
  height: 100%;
  width: 55%;
  float: left;
  color: white;
}
.icon-zuojiantou {
  display: inline-block;
  color: white;
  font-size: 2.1875rem;
  line-height: 3.125rem;
  width: 3.125rem;
  background-color: rgba(0, 0, 0, 0.1);
  text-align: center;
}
.maoyan > span {
  color: white;
  font-size: 1.125rem;
  line-height: 3.125rem;
}
.main {
  overflow: hidden;
}
.main > div {
  height: 2.5rem;
  width: 46%;
  margin: 0 2%;
  float: left;
  line-height: 2.5rem;
  text-align: center;
  font-size: 0.8125rem;
}
.l {
  border-bottom: 0.25rem solid #ccc;
}
.l > div {
  height: 0.25rem;
  width: 44%;
  margin: 0 3%;
  float: left;
}
.active {
  background: #ffc300;
}
form {
  padding: 0 3%;
}
form > div {
  padding: 0.5rem 0;
  height: 1.875rem;
  border-bottom: 1px solid #d6d6d6;
}
.form_text {
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  background-color: #f1f1f1;
  display: block;
  padding-left: .25rem;
  border-radius: 4px;
  font-size: 1rem;
}
a {
  text-decoration: none;
}
</style>
