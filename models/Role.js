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
  resource: {
    type: [{ type: Schema.Types.ObjectId, ref: "Resource" }]
  },
  builders: [
    {
      name: String,
      createtime: Date,
      modify: String,
      modifiedby: String
    }
  ]
});

const rescourceShema = new Schema({
  style: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  }
});

const scopeShcema = new Schema({
  title: {
    type: String,
    required: true
  },
  field: {
    type: String,
    enum: ["personal", "team", "department", "company", "super"],
    default: ["personal"]
  }
});

const feildSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const permassionSchema = new Schema({
  roleId: {
    type: Schema.Types.ObjectId,
    ref: "Roles"
  },
  functionId: {
    type: Schema.Types.ObjectId,
    ref: "Functions"
  },
  modelId: {
    type: Schema.Types.ObjectId,
    ref: "Models"
  },
  resourceId: {
    type: Schema.Types.ObjectId,
    ref: "Resource"
  }
});
