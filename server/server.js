const express = require('express')
const app = express()

const path = require('path')
const publicPath = path.join(__dirname, '..', 'public')
//ovo je path to public foldera

const port = process.env.PORT || 3000

app.use(express.static(publicPath))

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
    console.log('Server is up')
}) //port koji express koristi a koji ne smeta sustavu

