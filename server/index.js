const express = require('express')
const cors = require('cors')
const app = express()
const {register, login} = require('./controllers/auth')
const {getAllPosts, getCurrentUserPosts, addPost, editPost, deletePost} = require('./controllers/posts')
const {isAuthenticated} = require('./middleware/isAuthenticated')

app.use(express.json())
app.use(cors())

app.post('/register', register)
app.post('/login', login)

app.get('/posts', getAllPosts)

app.get('/userposts/:userId', getCurrentUserPosts)
app.post('/posts', isAuthenticated, addPost)
app.put('/posts/:id', isAuthenticated, editPost)
app.delete('/posts/:id', isAuthenticated, deletePost)


app.listen(4004, () => console.log(`Running on Port 4004`))