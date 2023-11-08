const {data1,data2,data3,data4,data5,data6}  =require("../controller/userController")


const route=require("express").Router()
route.post("/data1",data1)
route.get("/data2",data2)
route.get("/data3",data3)
route.get("/data4",data4)
route.post("/data5",data5)
route.delete("/data6",data6)

module.exports=route;