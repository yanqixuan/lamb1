<template>
  <div class="phone"></div>
</template>
<script>
export default {
  name: 'Phone'
}
</script>
<style scoped>
.phone{
  height: 6.6rem;
  width: 5.32rem;
  background: url('../assets/phone.png') no-repeat;
  background-size: 100% 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>