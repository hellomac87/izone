const express = require("express");
const router = express.Router();
const Post = require("../models/post");

// const { auth } = require("../middleware/auth");

//=================================
//             Post
//=================================

// router.get("/auth", auth, (req, res) => {
//   res.send("auth");
// });

router.get("/", (req, res) => {});
// write
router.post("/", async (req, res) => {
  const { title, body, tags } = req.body;
  const post = new Post({
    title,
    body,
    tags,
  });

  try {
    const result = await post.save();
    res.status(200).json({ success: true, result });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id).exec();
    res.status(200).json({
      success: true,
      post,
    });
    if (!post) {
      res
        .status(404)
        .json({ success: false, message: "포스트가 존재하지 않습니다." });
    }
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndUpdate(id, req.body, {
      new: true, // 업데이트 된 객체를 반환, 설정하지 않으면 업데이트 되기 전의 객체 반환
    }).exec();

    res.status(200).json({
      success: true,
      post,
    });

    if (!post) {
      res
        .status(404)
        .json({ success: false, message: "포스트가 존재하지 않습니다." });
    }
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndDelete(id).exec();

    res.status(204).json({
      success: true,
      post,
    });

    if (!post) {
      res
        .status(404)
        .json({ success: false, message: "포스트가 존재하지 않습니다." });
    }
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

module.exports = router;
