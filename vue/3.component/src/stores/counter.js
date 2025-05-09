import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  // data() {return{} }
  state: () => ({ userid: 'kim', grade: 'admin' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  // methods : {}
  actions: {
   setUserid(userid){
    this.userid = userid;
   }
    },
})