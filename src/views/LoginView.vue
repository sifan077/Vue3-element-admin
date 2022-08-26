<template>
  <div class="login">
    <div class="login-con">
      <!-- 顶部切换 -->
      <ul class="menu-tab">
        <li
            v-for="item in menuData"
            :key="item.type"
            :class="{ current: item.current }"
            @click="clickMenu(item)"
        >
          {{ item.txt }}
        </li>
      </ul>

      <!--表单-->
      <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          class="demo-ruleForm"
      >
        <el-form-item prop="email">
          <label>邮箱</label>
          <el-input v-model="ruleForm.email"/>
        </el-form-item>

        <el-form-item prop="pass">
          <label>密码</label>
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off"/>
        </el-form-item>
        <el-form-item prop="checkPass" v-show="model==='register'">
          <label>确认密码</label>
          <el-input
              v-model="ruleForm.checkPass"
              type="password"
              autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.prevent="submitForm(ruleFormRef)"
                     class="login-btn block"
          >{{ model === "login" ? "登录" : "注册" }}
          </el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script setup>
import {reactive, ref} from "vue";
import link from "../api/Link.js";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router"

let router = useRouter()


/**
 * 创建变量
 */
const menuData = reactive([
  {txt: "登录", current: true, type: "login"},
  {txt: "注册", current: false, type: "register"},
]);
const model = ref("login");
/**
 * 声明函数
 */
// 切换模块
const clickMenu = (data) => {
  //先让所有的数据都变成false没有选中状态
  menuData.forEach((elem) => {
    elem.current = false;
  });
  // 在让点击的哪一项编程选中状态
  data.current = true;
  // 修改模块值
  model.value = data.type;
};


// element 表单部分
const ruleFormRef = ref();

const checkEmail = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("Email is not null"));
  } else {
    callback();
  }
}

const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule, value, callback) => {
  if (model.value === "login") {
    callback();
  }
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  email: '',
})

const rules = reactive({
  pass: [{validator: validatePass, trigger: 'blur'}],
  checkPass: [{validator: validatePass2, trigger: 'blur'}],
  email: [{validator: checkEmail, trigger: 'blur'}],
})

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      let data = {
        "name": ruleForm.email,
        "password": ruleForm.pass,
      }
      if (model.value === "login") {
        link("/user", "GET", null, data).then((res) => {
          console.log(res.data)
          if (res.data.length !== 0) {
            ElMessage.success("登陆成功");
            router.push("/home")
          } else {
            ElMessage.error("登陆失败");
          }
        })
      } else {
        link("/user", "POST", data).then((res) => {
          console.log(res.data);
          if (res.data.length !== 0) {
            ElMessage.success("注册成功");
            model.value = "login";
            menuData.forEach(v => {
              v.current = false;
            })
            menuData[0].current = true;
          } else {
            ElMessage.error("注册失败");
          }
        })
      }
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style>
.login {
  background-color: #0eaeb4;
  height: 100%;
}

html, body, #app {
  height: 100%;
}


.login-wrap {
  width: 330px;
  margin: auto;
}

.menu-tab {
  text-align: center;
}

.menu-tab li {
  display: inline-block;
  width: 88px;
  line-height: 36px;
  font-size: 14px;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;
}

.menu-tab .current {
  background-color: rgba(255, 255, 255, 0.5);
}

.demo-ruleForm {
  width: 30%;
  margin: 50px auto;
}

.demo-ruleForm label {
  margin-bottom: 3px;
  font-size: 14px;
  color: white;
}

.block {
  display: block;
  width: 100%;
}

.login-btn {
  margin-top: 20px;
}

</style>