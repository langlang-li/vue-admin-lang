<template>
  <div>
    <div class="login-title">
      <h1>
        后台管理系统
      </h1>
    </div>
    <div class="login-middle">
      <div class="login-loge">
        <img src="@/assets/img/loge.png" alt="" />
      </div>
      <div class="midcourt">

      </div>
      <div class="Login-frame">
        <el-form
          label-position="right"
          label-width="80px"
          :model="formLabelAlign"
        >
          <el-form-item label="账号">
            <el-input v-model="formLabelAlign.name" clearable></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              type="password"
              v-model="formLabelAlign.region"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div>
      浪浪-的后台管理系统
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formLabelAlign: {
        name: "",
        region: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style lang="less" scope>
.login-title {
  margin-top: 100px;
  h1 {
    text-align: center;
    color: red;
  }
}
.login-middle {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  margin: auto;
  .login-loge {
    width: 100px;
    img {
      width: 100%;
    }
  }
  .midcourt{
    width: 160px;
  }
  .Login-frame{
    width: 400px;
  }
}
.el-button {
  width: 100%;
}
</style>
