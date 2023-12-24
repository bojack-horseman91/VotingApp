const express = require('express')
const app = express()
const port = 3000|process.env.PORT
const location_router=require("./VotingLocation/VotingLocationRouter")

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/api/location",location_router)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})