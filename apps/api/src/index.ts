import express from "express";
import { formatCurrency } from "@monorepo-setup/utils";

const app = express()
const PORT = 3001

 


app.listen(PORT,()=> {
    console.log(`Server started at PORT : ${PORT}`)})               

app.get("/",(req,res)=>{
    const formattedAmount = formatCurrency(1234.56, "USD");
   return res.json(formattedAmount)
})

