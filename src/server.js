import express from 'express'

const app = express();

app.use(app.json())

app.listen(3333);