<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <view>
      <button open-type="getUserInfo" @getuserinfo="getUserInfo">
        open0-type 授权登录 getUserInfo
      </button>
      <button open-type="getUserInfo" @click="getUserProfile">
        click 授权登录 wx.getUserProfile
      </button>
    </view>
    <view>
      <view @click="goPage(0)">使用扩展组件wxml-to-canvas</view>
    </view>
  </view>
</template>

<script>
import { showLoading, showToast } from "../../utils/toast";
import request from "../../api/request";

const pageMap = {
  0: "/pages/wxml-to-canvas/index"
};
export default {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {},
  methods: {
    goPage(index) {
      uni.navigateTo({
        url: pageMap[index]
      });
    },
    getUserInfo(detail) {
      console.log("getUserInfo detail = ", detail);
    },
    getUserProfile() {
      wx.getUserProfile({
        desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: res => {
          console.log("wx getUserProfile detail = ", res);
        },
        fail: err => {
          console.log("wx getUserProfile err = ", err);
        }
      });
    }
  },
  mounted() {
    // request({
    //   url: '/api/drugstore/1.0/get_default_store_info_v2',
    //   method: 'GET',
    //   params: { version: 2 },
    //   data: { v: 1 }
    // }).then((res) => {
    //   console.log('res = ', res);
    // });
  }
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
