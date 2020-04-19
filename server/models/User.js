const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");
//해시 알고리즘 적용 회수, 높을수록 보안은 높음 속도는 느려짐
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const moment = require("moment");

function hash(password) {
  return CryptoJS.createHmac("sha256", process.env.SECRET_KEY)
    .update(password)
    .digest("hex");
}

const userSchema = mongoose.Schema({
  email: {
    type: String,
  },
  username: {
    type: String,
  },
  password: String, // 로컬계정의 경우엔 비밀번호를 해싱해서 저장
  // 소셜 계정으로 회원가입을 할 경우 각 서비스에서 제공되는 id 와 accessToken을 저장
  social: {
    facebook: {
      id: String,
      accessToken: String,
    },
    google: {
      id: String,
      accessToken: String,
    },
    github: {
      id: String,
      accessToken: String,
    },
  },
  point: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

// userSchema.pre("save", function (next) {
//   var user = this;

//   if (user.isModified("password")) {
//     // console.log('password changed')
//     bcrypt.genSalt(saltRounds, function (err, salt) {
//       if (err) return next(err);

//       bcrypt.hash(user.password, salt, function (err, hash) {
//         if (err) return next(err);
//         user.password = hash;
//         next();
//       });
//     });
//   } else {
//     next();
//   }
// });

// userSchema.methods.comparePassword = function (plainPassword, cb) {
//   bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
//     if (err) return cb(err);
//     cb(null, isMatch);
//   });
// };

// userSchema.methods.generateToken = function (cb) {
//   var user = this;
//   var token = jwt.sign(user._id.toHexString(), "secret");
//   var oneHour = moment().add(1, "hour").valueOf();

//   user.tokenExp = oneHour;
//   user.token = token;
//   user.save(function (err, user) {
//     if (err) return cb(err);
//     cb(null, user);
//   });
// };

// userSchema.statics.findByToken = function (token, cb) {
//   var user = this;

//   jwt.verify(token, "secret", function (err, decode) {
//     user.findOne({ _id: decode, token: token }, function (err, user) {
//       if (err) return cb(err);
//       cb(null, user);
//     });
//   });
// };

// 메소드를 만들면, 우리가 원하는 작업마다 이름을 붙여 줄 수있게 되고 코드를 분리시킬 수 있게 되어
// 가독성도 높아지고, 쿼리를 작성 할 때 데이터 구조를 확인하기 위하여
// 컨트롤러 파일과 모델 파일을 동시에 볼 필요도 없어서 편해집니다.

userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email }).exec();
};

userSchema.statics.findByUsername = function (username) {
  return this.findOne({ username }).exec();
};

userSchema.statics.findByEmailOrUsername = function ({ username, email }) {
  return this.findOne({
    // $or 연산자를 통해 둘중에 하나를 만족하는 데이터를 찾습니다
    $or: [{ username }, { email }],
  }).exec();
};

userSchema.statics.localRegister = function ({ username, email, password }) {
  // 데이터를 생섷랄 때는 new this()를 사용한다.
  // statics 의 this 가 userSchema 모델이기 떄문 (인스턴스 X)
  const user = new this({
    email,
    username,
    password: hash(password),
  });

  return user.save();
};

userSchema.methods.validatePassword = function (password) {
  // 함수로 전달받은 password 의 해시값과, 데이터에 담겨있는 해시값과 비교를 합니다.
  const hashed = hash(password);
  return this.password === hashed;
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
