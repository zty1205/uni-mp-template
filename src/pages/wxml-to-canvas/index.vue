<template>
  <view id="box">
    <wxml-to-canvas class="widget"></wxml-to-canvas>
    <button @click="renderToCanvas">渲染到canvas</button>
    <button @click="extraImage">导出图片</button>
    <button @click="saveImage">保存图片</button>
    <image
      :src="src"
      :style="{ width: width + 'px', height: height + 'px' }"
    ></image>
  </view>
</template>

<script>
import { wxml, style } from "./demo.js";
export default {
  data() {
    return {
      widget: "",
      src: "",
      width: "",
      height: ""
    };
  },
  onLoad() {
    this.widget = this.selectComponent(".widget");
  },
  methods: {
    renderToCanvas() {
      const p1 = this.widget.renderToCanvas({ wxml, style });
      p1.then(res => {
        console.log("res", res);
        console.log("container", res.layoutBox);
        this.container = res;
        // setTimeout(() => {
        //   this.run();
        // });
      });
    },
    run() {
      const query = wx.createSelectorQuery();
      query
        .select("#canvas")
        .fields({ node: true, size: true })
        .exec(res => {
          console.log("res = ", res);
          const canvas = res[0].node;
          const ctx = canvas.getContext("2d");

          ctx.fillRect(0, 0, 100, 100);
        });
    },
    extraImage() {
      const p2 = this.widget.canvasToTempFilePath();
      p2.then(res => {
        this.src = res.tempFilePath;
        this.height = this.container.layoutBox.height;
        this.width = this.container.layoutBox.width;
      });
    },
    saveImage() {
      if (!this.src) return;
      console.log("src = ", this.src);
      wx.authorize({
        scope: "scope.writePhotosAlbum",
        success: () => {
          wx.saveImageToPhotosAlbum({
            filePath: this.src,
            success(res) {
              console.log("res = ", res);
              wx.showToast({
                title: "保存成功"
              });
            },
            fail(err) {
              console.log("err = ", err);
              wx.showToast({
                title: "保存失败"
              });
            }
          });
        },
        fail(err) {
          console.log("err= ", err);
          wx.showToast({
            title: "授权失败"
          });
        }
      });
    }
  }
};
</script>

<style>
.text {
  color: red;
  font-family: PingFangSC-Regular, PingFang SC;
}
</style>
