const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// 创建角色Schema

const roleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  scope: {
    type: [{ type: Schema.Types.ObjectId, ref: "Scope" }]
  },
  source: {
    type: [{ type: Schema.Types.ObjectId, ref: "Resource" }]
  }
});

const scopeShcema = new Schema({
  title: {
    type: String,
    required: true
  },
  field: {
    type: [{ type: Schema.Types.ObjectId , ref: ""}]
  }
});
