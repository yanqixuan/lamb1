<template>
  <div>
    <a class="link" :href="url" :download="url" @click="handleClick">{{msg}}</a>
  </div>
</template>
<script>
export default {
  name: "Button",
  data() {
    return {
      msg: "下载APP",
      url: "",
      type: ""
    };
  },
  mounted: function() {
    const ua = navigator.userAgent.toLocaleLowerCase();
    if (ua.indexOf("android") !== -1) {
      this.type = "android";
      this.url = window.config.android;
    } else if (ua.indexOf("like mac") !== -1) {
      this.type = "ios";
      this.url = window.config.ios;
    } else if (ua.indexOf('micromessenger') !== -1){
      this.type = 'weChat';
      this.url = false;
    }
  },
  methods: {
    handleClick: function() {
      this.url = (this.msg == '下载中' ? false : this.url) ;
      this.msg = '下载中';
      if (this.type === 'weChat'){
        alert('去浏览器打开')
      }
    }
  }
};
</script>
<style scoped>
.link {
  font-size: 0.32rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  display: inline-block;
  text-decoration-line: none;
  border: 0.02rem solid rgba(255, 255, 255, 1);
  width: 2rem;
  padding: 0.2rem 0rem;
  border-radius: 0.08rem;
}
</style>