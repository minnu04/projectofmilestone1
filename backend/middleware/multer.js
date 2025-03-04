let multer=require("multer")
let path=require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../upload"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random())
      cb(null, file.fieldname + '-' + uniqueSuffix+".png")
    }
  })

  const prodsuctStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../productUpload"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random())
      cb(null, file.fieldname + '-' + uniqueSuffix+".png")
    }
  })
  
  const upload = multer({ storage: storage })
  const productUpload = multer({ storage: prodsuctStorage })

  module.exports={upload,productUpload};