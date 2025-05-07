<script setup>
// 메인 화면에 로그인 정보 표시
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    count : {{ $store.state.count }} <br>
    login : {{ $store.state.loginYn }} <br>
    email : {{ $store.state.email }}
    <TheWelcome />
  </main>
</template>
