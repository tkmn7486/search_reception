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
    let URL_rec = ref()
    let URL_rep = ref()
    let changeApp = ref()

    const fusion=()=>{
      rightID.value = "SSC0011"+inputID.value;
    }

    const createURL_rec=(ID)=>{
      URL_rec.value = 'https://sma-sta.cybozu.com/k/search?keyword='+ID+'&app=522'
    }

    const createURL_rep=(ID)=>{
      URL_rep.value = 'https://sma-sta.cybozu.com/k/search?keyword='+ID+'&app=523'
    }

    const open_rec=()=>{
      fusion();
      createURL_rec(rightID.value);
      location.href= URL_rec.value;
    }

    const open_rep=()=>{
      fusion();
      createURL_rep(rightID.value);
      location.href= URL_rep.value;
    }

    return{
      inputID,
      rightID,
      changeApp,
      fusion,
      open_rec,
      open_rep,
      createURL_rec,
      createURL_rep,
    }
  }
}
</script>
