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
          <h1 style="color:#990000;font-size:30px">SignUp</h1>
        </div>
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="16">
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item v-bind="formItemLayout" label="E-mail">
            <a-input
              v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          },
        ]"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="Password" has-feedback>
            <a-input
              v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
              type="password"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="Confirm Password" has-feedback>
            <a-input
              v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
              type="password"
              @blur="handleConfirmBlur"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout">
            <span slot="label">
              Username&nbsp;
              <a-tooltip title="What do you want others to call you?">
                <a-icon type="question-circle-o" />
              </a-tooltip>
            </span>
            <a-input
              v-decorator="[
          'nickname',
          {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          },
        ]"
            />
          </a-form-item>

          <a-form-item v-bind="tailFormItemLayout">
            <a-checkbox
              v-decorator="['subscribe', { valuePropName: 'checked' , initialValue: true}]"
            >I want to receive the latest news about Ashago</a-checkbox>
          </a-form-item>
          <a-form-item v-bind="tailFormItemLayout">
            <a-checkbox
              v-decorator="['agreement', { valuePropName: 'checked' , rules: [{ required: true, message: 'Please agree this.' }]}]"
            >
              I have read the
              <a href>agreement</a>
            </a-checkbox>
          </a-form-item>
          <a-form-item v-bind="tailFormItemLayout">
            <a-button type="primary" html-type="submit">Register</a-button>
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
  data() {
    return {
      confirmDirty: false,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      }
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.$message.loading("Action in progress..", 0);
          Axios({
            url: "http://localhost:8080/users",
            method: "POST",
            data: {
              email: values.email,
              token: values.password,
              nickName: values.nickname,
              subscribed: values.subscribe
            }
          }).then(response => {
            this.$message.destroy()
            console.log("receive msg", response);
            if (response.data.code == "0") {
              this.$message.success("Sign up success", 5);
              this.$router.push({
                path: "/login"
              });
            } else {
              this.$message.error(response.data.msg, 5);
            }
          });
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("Two passwords that you enter is inconsistent!");
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    }
  }
};
</script>