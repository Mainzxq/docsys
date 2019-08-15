const mongoose = require("mongoose");
const { Schema, model } = mongoose;


// 使用Schema创建用户model

const userSchema = new Schema({
  __v: {
    type: Number,
    select: false, // select 代表find用户对象时，默认不显示
  }
})