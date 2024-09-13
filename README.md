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