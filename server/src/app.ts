import { Express, Request, Response } from "express";
import express = require("express")
import dotenv = require ("dotenv");
import fs = require("fs")
dotenv.config();
let Project:Array<JSON> ;
const app: Express = express();
const port = process.env.PORT || 3000;
app.get("/getProjects", (req: Request, res: Response) => {
    fs.readFile(process.env.PROJECT_PATH,"utf-8",(error:Error,result:string)=>{
        if(error){
            throw error
        }else{
            try{
                Project = JSON.parse(result)
                return res.json(Project)
            }catch(Error){
                return res.sendStatus(404).send("Not found")
            }
    
        }
    
    })

});
app.get("/getBlogs", (req: Request, res: Response) => {
    fs.readFile(process.env.BLOGS_PATH,"utf-8",(error:Error,result:string)=>{
        if(error){
            throw error
        }else{
            try{
            const     Blog = JSON.parse(result)
                return res.json(Blog)
            }catch(Error){
                return res.sendStatus(404).send("Not found")
            }
        }
    
    })

});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});