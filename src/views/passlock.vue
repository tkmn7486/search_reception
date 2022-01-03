<template>
  <div class="about">
    <h1>パスワードを入力してください</h1>
    <p>password：<input v-model="password"></p>
    <button @click="certification">認証</button>
    <p>{{alert}}</p>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

export default {
    name:"passlock",
    setup(){
        let password = ref()
        let alert =ref()
        let router = useRouter()

        const enterApp =()=>{
          router.push({name:"Self"})
        }

        const certification =()=>{
            if(password.value == "20111109"){
                alert.value = "認証成功"
                enterApp();
            }else{
                alert.value = "パスワードが違います"
            }
        }
        return{
            password,
            alert,
            certification,
            enterApp,

        }
    }
    
}
</script>