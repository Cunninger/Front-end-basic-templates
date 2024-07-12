<template>
  <a-row
    id="globalHeader"
    align="center"
    class="grid-demo"
    style="margin-bottom: 16px"
  >
    <a-col flex="auto">
      <a-menu
        :selected-keys="selectedKeys"
        mode="horizontal"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <!-- logo -->
            <img class="logo" src="../assets/oj-logo.svg" />
            <div class="title">OJ</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in routes" :key="item.path"
          >{{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>
        {{ store.state.user?.loginUser?.userName ?? "未登录" }}
      </div>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { routes } from "@/router/routes";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

const router = useRouter();

// 默认主页
const selectedKeys = ref(["/"]);
router.afterEach(function (to, from, failure) {
  selectedKeys.value = [to.path];
});
const store = useStore();
console.log(store.state.user.loginUser);

// setTimeout(function () {
//   store.dispatch("user/getLoginUser", {
//     userName: "金陵易和 ",
//     role: "admin",
//   });
// }, 3000);

function doMenuClick(key: string) {
  router.push({ path: key });
}
</script>

<style scoped>
.title {
  color: #006494;
}

.title-bar {
  display: flex;
  align-items: center;
}

.logo {
  width: 32px;
  height: 32px;
  margin-right: 8px;
}
</style>
