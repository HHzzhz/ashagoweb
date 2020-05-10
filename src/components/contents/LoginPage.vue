<template>
  <div>
    <a-row>
      <a-col :span="24">
        <div style="height:40px"></div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <div style="height:70px">
          <h1 style="color:#990000;font-size:30px">Login</h1>
        </div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="6"></a-col>
      <a-col :span="12">
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
          'email',
          { rules: [{ required: true, message: 'Please input your E-mail!' }] },
        ]"
              placeholder="E-mail"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
              type="password"
              placeholder="Password"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox
              v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
            >Remember me</a-checkbox>
            <a class="login-form-forgot" href>Forgot password</a>
            <a-button type="primary" html-type="submit" class="login-form-button">Log in</a-button>Or
            <a href>register now!</a>
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="6"></a-col>
    </a-row>
  </div>
</template>

<script>
import Axios from "axios";


export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.$message.loading("Action in progress..", 0);
          Axios({
            url: "http://localhost:8080/users/"+values.email+":login",
            method: "POST",
            data: {
              email: values.email,
              token: values.password,
            }
          }).then(response => {
            this.$message.destroy()
            console.log("receive msg", response);
            if (response.data.code == "0") {
              this.$message.success("Login success", 5);
              this.$store.commit('login', response.data.nickName)
              console.log(this.$store.state)
              this.$router.push({
                path: "/home"
              });
            } else {
              this.$message.error(response.data.msg, 5);
            }
          });
        }
      });
    }
  }
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>