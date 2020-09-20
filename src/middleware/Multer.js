const multer = require("multer");
const helper = require("../helper/index");
const { request } = require("express");

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, "./uploads/");
  },
  filename: (request, file, callback) => {
    callback(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const fileFilter = (request, file, callback) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    callback(null, true);
  } else {
    return callback(new Error("Extension File Must be PNG or JPG"));
  }
};

const limits = { fileSize: 1024 * 1024 * 1 };
let upload = multer({ storage, fileFilter, limits }).single("image");

const uploadFilter = (request, response, next) => {
  upload(request, response, function (err) {
    if (err instanceof multer.MulterError) {
      return helper.response(response, 400, err.message);
    } else if (err) {
      return helper.response(response, 400, err.message);
    }
    next();
  });
};

module.exports = uploadFilter;

// const multer = require("multer");
// const helper = require("../helper/index");
// const { request } = require("express");
// const storage = multer.diskStorage({
//   destination: function (request, file, callback) {
//     console.log(file.mimetype);
//     if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//       callback(null, "./uploads/");
//     } else {
//       return callback(
//         new Error("Invalid image format, only jpeg / png are allowed")
//       );
//     }
//   },
//   filename: function (request, file, callback) {
//     console.log(file);
//     callback(
//       null,
//       new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
//     );
//   },
// });

// let upload = multer({
//   storage: storage,
//   limits: { fileSize: 1 * 1024 * 1024 },
// }).single("image");
// const uploadFilter = (request, response, next) => {
//   upload(request, response, function (error) {
//     if (error instanceof multer.MulterError) {
//       return helper.response(response, 400, error.message);
//     } else if (error) {
//       return helper.response(response, 400, error.message);
//     }
//     next();
//   });
// };
// module.exports = uploadFilter;
