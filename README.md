how to crate api server 

1: npm init  
2: npm i --save-dev nodemon typescript ts-node  
3: put inside package jason on script:  "run-tsc":"tsc --init"  
4: put iside package jason instead of test : "dev": "nodemon ./src/index.ts"  
5: crate folder src and inside crate index.ts  
6: check that everything work  
7: npm i express  
8: npm i @types/express --save-dev  
9: write the following code :  
```
 import express  from "express";

const app = express()

app.listen(3000)
```

10: npm i dotenv  
11: create .env file  
12: update code 

```
import express  from "express";
import dotenv from "dotenv"
dotenv.config()



const app = express()

app.get("/",(req,res,next)=>{
    res.send("api is okay")
})

app.listen(process.env.PORT, ()=> {
    console.log(`api is running on port ${process.env.PORT}`);
    
})




```
13: npm i cors


14: npm install --save mysql2  
15: npm install --save-dev @types/node
16: npm i body-parser
17: npm i @types/body-parser
18 : npm i zod



```
import express from "express"
import dotenv from "dotenv"
import { router as customersRouter } from "./customers"
import bodyParser from "body-parser"
import cors from "cors"
dotenv.config()
const app = express()
console.log("Application Start")
app.use(cors())
app.use(bodyParser.json())

app.get("/health-check", (req, res, next) => {
    return res.json({ message: "Server is up - Docker/Not" })
})

app.use("/customers", customersRouter)


app.listen(process.env.PORT, () => {
    console.log(`Application Listen to Port: ${process.env.PORT}`)
})



```