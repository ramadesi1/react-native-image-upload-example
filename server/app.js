const express = require('express')
const multer = require('multer')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  },
})
const upload = multer({ storage })
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.post('/', upload.single('image'), (req, res) => {
  console.log(req.file, 'INI FILENYAA')
  res.send(req.file)
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
