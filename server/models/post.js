const mongoose = require("mongoose");
const { Schema } = mongoose;

const Post = new Schema({
  title: String,
  body: String,
  tags: [String],
  created_at: {
    type: Date,
    default: new Date(), // 현재 날짜를 기본 값으로 설정
  },
});

module.exports = mongoose.model("Post", Post);
