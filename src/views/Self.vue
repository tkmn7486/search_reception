<template>
  <div class="self">
    <div class="app_display">
      <!-- <button>QRコード</button> -->
      <h2>修理受付番号を入力してください</h2>
      <p class="inputLabel">SSC0011<input class="inputForm" v-model="inputID"></p>
      <p>{{inputID}}</p>
      <!-- <qrcode-stream @decode = "onDecode" >a</qrcode-stream> -->
      <button class="recH_button" @click="open_rec">受付履歴</button>
      <button class="repH_button" @click="open_rep">修理履歴</button>
    </div>
  </div>
</template>


<script>
import {ref} from 'vue'
// import {QrcodeStream} from 'vue-qrcode-reader'

export default {
  name: 'Self',
  // components: {
  //   QrcodeStream
  // },

  setup(){
    let inputID = ref()
    let rightID = ref()
    let URL = ref()
    let changeApp = ref()

    const fusion=()=>{
      rightID.value = "SSC0011"+inputID.value;
    }

    const createURL=(ID)=>{
      URL.value = 'https://sma-sta.cybozu.com/k/search?keyword='+ID+'&app=523'
    }

    const open_rec=()=>{
      fusion();
      createURL(rightID.value);
      location.href= URL.value;
    }

    const onDecode=(decodeString)=>{ 
      decodeString
    }

    const open_rep=()=>{

    }

    return{
      inputID,
      rightID,
      changeApp,
      fusion,
      open_rec,
      open_rep,
      createURL,
      onDecode,
    }
  }
}
</script>
