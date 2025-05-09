<template>
  <div class="container">
    <div class="row">
      <p>책 제목</p><textarea name="bookname"></textarea>
      <p>저자</p><textarea name="writer"></textarea>
      <p>출판사</p><textarea name="company"></textarea>
      <p>ISBN</p><textarea name="ISBN"></textarea>
      <p>값</p><textarea name="price"></textarea>
      <p>내용</p><textarea class="content" name="content"></textarea>
    </div>
  </div>
</template>
<script>

</script>
<style>
  p{
    font-weight:bold;
  }
  textarea{
    resize: none;
    height: 2.5em;
    margin-bottom: 10px;
  }
  .content{
    height: 5em;
  }
</style>