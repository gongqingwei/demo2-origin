<template>
    <div>
        <form v-if="!isReg">
            用户名：
            <input type="text" v-model="name">
            密码：
            <input type="password" v-model="password">
            <p>
                <button v-on:click="login()">登录</button>
                <button v-on:click="reg()">注册</button>
            </p>
        </form>
        <form v-else>
            <p>
                用户名：
                <input type="text" v-model="name">
            </p>
            <p>
                密码：
                <input type="password" v-model="password">
            </p>
            再次确认密码：
            <input type="password" v-model="repeat">
            <p>
                <button v-on:click="addUser()">确定</button>
                <button v-on:click="cancel()">取消</button>
            </p>
        </form>
    </div>
</template>

<script>
    import store from "../store";

    export default {
        name: "Login",
        store,
        data() {
            return {
                count: 0,
                isReg: false,
                name: '',
                password: '',
                repeat: ''
            }
        },
        methods: {
            login: function () {
                if (localStorage.getItem('name') == this.name && localStorage.getItem('password') == this.password) {
                    this.$router.push('/home')
                } else {
                    alert('用户名或者密码错误')
                }
            },
            reg: function () {
                this.isReg = true//赋值无效
                this.count++
            },
            addUser: function () {
                if (this.password == this.repeat) {
                    localStorage.setItem('name', this.name)
                    localStorage.setItem('password', this.password)
                    this.isReg = false
                } else {
                    alert('两次密码不一致')
                }
            },
            cancel: function () {
                return this.isReg = false
            }
        }
    }
</script>

<style scoped>

</style>
