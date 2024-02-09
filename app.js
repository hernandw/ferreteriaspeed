const express = require('express')
const app = express()
const routes = require('./routes/routes')

const PORT = process.env.PORT || 3000



//Routes
app.use('/', routes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

