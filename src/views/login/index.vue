<template>
  <div class="login-container">
    <!-- 1.标题通栏 -->
    <van-nav-bar title="登录" class="page-nav-bar" />
    <!-- 2.表单 -->
    <van-form @submit="onSubmit">
      <van-field name="手机号" placeholder="请输入手机号" v-model="user.mobile">
        <i class="toutiao toutiao-shouji" slot="left-icon"></i>
      </van-field>
      <van-field name="验证码" placeholder="请输入验证码" v-model="user.code">
        <i class="toutiao toutiao-yanzhengma" slot="left-icon"></i>
        <template #button>
          <van-button class="send-sms-btn" size="small" round>发送验证码</van-button>
        </template>
      </van-field>
      <!-- 3.登录按钮 -->
      <div class="login-btn-wrap">
        <van-button block type="info" native-type="submit" class="login-btn">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { postLoginDatas } from "@/api/index";
export default {
  name: "LoginIndex",
  data() {
    return {
      user: {
        code: "",
        mobile: ""
      },
    };
  },
  methods: {
    async onSubmit() {
      // try-catch 处理运行时的异常
      // try-catch 可以不影响后面代码的运行
      // ★ try-catch 只能用于同步代码,一定要与catch一起使用,无法捕获异步的异常
      // ★ try-catch 异步任务要使用try-catch的话 可以结合async 和await 相结合
      // const user = this.user
      try {
        const res = await postLoginDatas(this.user);
        console.log("登录成功", res);
      } catch (err) {
        if (err.response.status == 400) {
          console.log("手机号或者验证码有误" + err.response.data.message);
        }
      }
      console.log("我是后面的代码");
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  .toutiao {
    font-size: 37px;
  }
  .send-sms-btn {
    width: 152px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>
