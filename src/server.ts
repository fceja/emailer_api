import express, { Response } from "express"

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (res: Response) => {
    res.send("hello from ts api")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})