<template>
  <div id="basicLayout">
    <a-layout style="height: 400px">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">底部</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#basicLayout {
}

#basicLayout .header {
  /* background: red; */
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

#basicLayout .content {
  /* 渐变色背景 */
  background: linear-gradient(to right, #fafafa, #fff);
  margin-bottom: 16px;
  padding: 15px;
}

#basicLayout .footer {
  background: #efefef;
  padding: 16px;
  /* 底部布局优化:footer贴住底部 */
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center; /* 文字居中 */
}
</style>
<script lang="ts" setup>
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
