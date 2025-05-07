<template>
  email <input v-model="email">
  pw <input v-model="pw">
  <button @click.prevent="login">로그인</button>
</template>
<script>
import axios from "axios";
export default{
  data(){
    return{
      email : "",
      pw: ""
    };
  },
  methods:{
    async login(){
      this.$store.commit('loginSuccess');
      const url = "/api/users/login";
      const data = {email : this.email, pw : this.pw};
      // axios({url:'', method:'', data:{}})
      const result = await axios.post(url, data);
      alert(result.data.code)
      // 이메일도 저장하도록 추가
      // this.$store.commit('changeEmail',{email:this.email});
      this.$store.dispatch('login', {email:this.email});
      this.$router.push({path: "/"});
    }
  }
}



</script>