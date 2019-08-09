//index.js
//获取应用实例
// import { IMyApp } from '../../app'
import { card } from './card';

// const app = getApp<IMyApp>()


Page({
  data: {
    advice: '',
    adviceZh: ''
  },
  //事件处理函数
  bindViewTap() {
    const lenOfCard = card.length;
    const randomNumber = Math.floor(Math.random() * lenOfCard + 0);
    console.info(randomNumber);
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {

  },
  changeCard() {
    const lenOfCard = card.length;
    const randomNumber = Math.floor(Math.random() * lenOfCard + 0);
    console.info(randomNumber);
    (this as any).setData({
      advice: card[randomNumber] && card[randomNumber].en,
      adviceZh: card[randomNumber] && card[randomNumber].zh
    });

  }


})
