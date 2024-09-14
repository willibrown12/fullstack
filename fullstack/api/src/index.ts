import express  from "express";
import dotenv from "dotenv"
import mysql2 from 'mysql2/promise';
import { log } from "console";
import cors from 'cors';

dotenv.config()

const app = express()
app.use(cors())
async function initConnection(){

    try {
        const connection = await mysql2.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            database: process.env.MYSQL_SCHEME,
            password: process.env.MYSQL_PASSWORD,
            port : Number(process.env.MYSQL_PORT) || 3306
          });
          console.log('Database connected');


          app.get("/products",async(req,res,next)=>{
            const result = await connection.execute("SELECT * FROM products;")
       
    
            res.send(result[0])
            
        })


        app.get("/customers",async(req,res,next)=>{
            const result = await connection.execute("SELECT * FROM customers;")
            res.send(result[0])
            console.log("data taken");
            
        })

        app.get("/orders/:status",async(req,res,next)=>{
            const status=req.params.status
            const result = await connection.execute(`SELECT northwind.order_details.*, northwind.orders_status.status_name
FROM northwind.orders
JOIN northwind.orders_status ON northwind.orders_status.id = northwind.orders.status_id
JOIN northwind.order_details ON northwind.order_details.order_id = northwind.orders.id
WHERE northwind.orders_status.status_name = ?;`,[status])
console.log("data taken");
            res.send(result[0])
            
        })
        app.get("/orders-full-data",async(req,res,next)=>{
            const result = await connection.execute(`SELECT 
    northwind.orders.id AS 'id' , 
   CONCAT(northwind.customers.first_name, ' ', northwind.customers.last_name) AS 'customer full name',
     CONCAT(northwind.employees.first_name, ' ', northwind.employees.last_name) AS 'employees full name',
      northwind.shippers.company as 'shippers'
    
FROM
    northwind.orders
        JOIN
    northwind.orders_status ON northwind.orders_status.id = northwind.orders.status_id
    join
        northwind.shippers ON    northwind.shippers.id = northwind.orders.shipper_id
           join
        northwind.customers ON    northwind.customers.id = northwind.orders.customer_id
        JOIN
    northwind.employees ON northwind.orders.employee_id = northwind.employees.id;
                  `)
            res.send(result[0])
            
        })
         
         
        app.get("/report",async(req,res,next)=>{
            const result = await connection.execute(`SELECT 
   employee_id  , count(*) as orders,
     CONCAT(northwind.employees.first_name, ' ', northwind.employees.last_name) AS 'employeesfullname'
FROM
    northwind.orders
        JOIN
    northwind.employees ON northwind.orders.employee_id = northwind.employees.id
  GROUP BY employee_id
ORDER BY 
    orders DESC`)
            res.send(result[0])
            
        })
         
          
    } 
    catch(error) {
        
      }
}






app.listen(process.env.PORT, ()=> {
    console.log(`api is running on port ${process.env.PORT}`);
   
})


initConnection()
