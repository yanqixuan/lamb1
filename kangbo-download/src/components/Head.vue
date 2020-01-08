<template>
  <h2 class="head">{{ text }}</h2>
</template>
<script>
export default {
  name: "Head",
  data() {
    return {
      text: "随时管理您的数字资产"
    };
  }
};
</script>
<style scoped>
.head {
  font-size: .4rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
</style>