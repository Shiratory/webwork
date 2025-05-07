<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ boardInfo.id }}</td>
            <th scope="col" class="text-center table-primary">작성일</th>
            <td scope="col" class="text-center">{{ boardInfo.created_date }}</td>
            <th scope="col" class="text-center table-primary">이름</th>
            <td scope="col" class="text-center">{{ boardInfo.writer }}</td>
          </tr>
          <tr>
            <th colspan="2" class="text-center table-primary">제목</th>
            <td colspan="4">{{ boardInfo.title }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre
                style="white-space: pre-wrap; border: none; background-color: white;">
                {{ boardInfo.content }}
              </pre>
            </td>
          </tr>
          <tr>
            <td colspan="6" class="text-center">
              <button class="btn btn-xs btn-info" @click="goToUpdateForm(boardInfo.id)">
                수정
              </button>
              <button class="btn btn-xs btn-info" @click="deleteForm">
                삭제
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 댓글 컴포넌트 -->
    <div class="row">
      <!-- <CommentComp :bid="boardInfo.id" /> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
// import CommentComp from '@/components/CommentComp.vue';

const boardInfo = ref({});
const route = useRoute();
const router = useRouter();

const searchNo = route.query.id;

const getBoardInfo = async () => {
  try {
    const response = await axios.get(`/api/board/${searchNo}`);
    boardInfo.value = response.data[0];
  } catch (error) {
    console.error('게시글 조회 실패:', error);
    alert('게시글을 불러오는 데 실패했습니다.');
  }
};

const goToUpdateForm = (id) => {
  router.push({ path: '/boardForm', query: { id } });
};

const goToListForm = () => {
  router.push({ path: '/boardList' });
};

const deleteForm = async () => {
  if (confirm('게시물을 삭제하시겠습니까?')) {
    try {
      const response = await axios.delete(`/api/board/${searchNo}`);
      if (response.status === 200) {
        alert('삭제 완료');
        goToListForm();
      } else {
        alert('삭제 실패');
      }
    } catch (error) {
      console.error('삭제 중 오류:', error);
      alert('삭제 중 오류가 발생했습니다.');
    }
  }
};

onMounted(() => {
  getBoardInfo();
});
</script>
