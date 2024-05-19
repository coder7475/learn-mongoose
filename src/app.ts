// const express = require('express')
import express, { Application, Request, Response } from 'express'
const app: Application = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// console.log(process.cwd());
export default app;