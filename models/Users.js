const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// 使用Schema创建用户model

const userSchema = new Schema({
  __v: {
    type: Number,
    select: false // select 代表find用户对象时，默认不显示
  },

  // 姓名，可能重复，可能是中文或者英文
  name: {
    type: String,
    required: true
  },

  // 用户名，不允许重复，必须是英文
  username: {
    type: String,
    required: true,
    unique: true
  },

  // password 必须是经过md5加密后的字串, 默认不显示
  password: {
    type: String,
    required: true,
    select: false
  },

  // age，年龄，或者出生日期
  age: {
    type: Number,
    default: 18
  },

  // avatar是头像的地址，头像应该至少128*128，原则不大于128k，大小，以便于满足加载速度
  avatar_url: {
    type: String,
    default: "/static/pic/default_avatar.png"
  },

  // 性别，默认男性，只有两个选择
  gender: {
    type: String,
    enum: ["male", "female"],
    default: "male"
  },

  // slug，一种短标识uuid，一般用于文章标识
  slug: {
    type: String
  },

  // 居住地，所在地，可以是多个，数组
  locations: {
    type: [{ String }],
    select: false
  },

  // 职业生涯，职业生涯对象数组
  career: {
    type: [{ type: Schema.Types.ObjectId, ref: "Career" }]
  },

  // educations 受教育水平
  educations: {
    type: [{ type: Schema.Types.ObjectId, ref: "Educations" }]
  },

  // skills 专业技能
  skills: {
    type: [{ type: Schema.Types.ObjectId, ref: "Skill" }]
  },

  roles: {
    type: [{ type: Schema.Types.ObjectId, ref: "Role" }]
  },

  isAdmin: {
    type: Boolean,
    default: false
  },

  isSuperAdmin: {
    type: Boolean,
    default: false
  }
});

// 职业生涯对象
const careerSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
  company: {
    type: String,
    required: true
  },
  hiredate: {
    type: Date,
    required: true
  },
  leavedate: {
    type: Date,
    required: true
  }
});

// 教育经历 对象
const educationSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
  school: {
    type: String,
    required: true
  },

  from: {
    type: Date,
    required: true
  },
  to: {
    type: Date,
    required: true
  },
  types: {
    type: String,
    enum: [
      "小学",
      "初中",
      "高中",
      "大学专科",
      "大学本科",
      "硕士研究生",
      "博士",
      "博士后",
      "院士"
    ],
    required: true
  }
});
