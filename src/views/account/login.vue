<!-- 组件说明 -->
<template>
  <div class="content">
    <div class="content_input">
      <div class="title"><p>管理员登录</p></div>
      <el-input v-model="UserName" clearable placeholder="用户名" />
      <el-input v-model="PassWord" clearable show-password placeholder="密码" />
      <div class="content_button">
        <el-button type="primary" @click="SignIn">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import ribbon from '../../util/ribbon'
export default {
    data() {
        return {
            UserName: 'admin',
            PassWord: '1'
        }
    },
    methods: {
        SignIn() {
            const username = this.UserName
            const password = this.PassWord
            if (!username) {
                this.$message({
                    message: '用户名不能为空',
                    type: 'error'
                })
                return
            } else if (!password) {
                this.$message({
                    message: '密码不能为空',
                    type: 'error'
                })
                return
            } else {
                // this.$message({ message: '恭喜你，通过了！', type: 'success' })
                this.$router.push({ name: 'Home' })
            }
        }
    }
}
</script>

<style scoped>
.content {
	width: 500px;
	height: 300px;
	box-sizing: border-box;
	padding: 0 50px;
	border-radius: 5px;
	box-shadow: 0px 2px 12px 0px rgba(105, 105, 105, 0.07);
	background: rgba(255, 255, 255, 0.5);
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	animation: mymove 1s ease-in-out  alternate;
	overflow: hidden;
	transition: 1.5s;
}
@keyframes mymove {
	0% {
		width: 0px;
		height: 5px;
	}

	10% {
		width: 50px;
		height: 5px;
	}

	15% {
		width: 100px;
		height: 5px;
	}

	20% {
		width: 150px;
		height: 5px;
	}

	25% {
		width: 200px;
		height: 5px;
	}

	30% {
		width: 250px;
		height: 5px;
	}

	35% {
		width: 300px;
		height: 5px;
	}

	40% {
		width: 350px;
		height: 5px;
	}

	45% {
		width: 450px;
		height: 5px;
	}

	50% {
		width: 500px;
		height: 5px;
	}

	55% {
		height: 30px;
	}

	60% {
		height: 60px;
	}

	65% {
		height: 90px;
	}

	70% {
		height: 120px;
	}

	75% {
		height: 150px;
	}

	80% {
		height: 180px;
	}

	85% {
		height: 210px;
	}

	90% {
		height: 240px;
	}

	95% {
		height: 240px;
	}

	100% {
		height: 300px;
	}
}

.content_input {
	width: 300px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

}

.content_button {
	margin-top: 10px;
}

.el-input {
	margin-bottom: 25px;
}

.title {
	text-align: center;
	font-size: 24px;
	margin-bottom: 30px;
	font-weight: bold;
	color: #606266;
}

.el-button--primary {
	width: 100%;

}
</style>
