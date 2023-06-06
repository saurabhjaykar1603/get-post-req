import express, { response } from "express";
import mongoose from "mongoose";
import Student from "./models/student.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

async function connectMongoDB() {
    const conn = await mongoose.connect(process.env.MONGO_URL)

    if (conn) {
        console.log('Mongo DB Connected')
    }
    else {

        console.log('Erro')
    }
}
connectMongoDB();

app.post("/student", async (req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const regNo = req.body.regNo;

    const newStud = new Student({
        fullName: fullName,
        email: email,
        regNo: regNo
    })
    const savedStudent = await newStud.save();

    res.json({
        success: true,
        massage: "student saved successfully",
        data: savedStudent
    })
})

app.get('/students', async (req, res) => {
    const students = await Student.find();
    res.json({
        success: true,
        message: 'students fetched syccessfully',
    })
})

app.listen(5000, () => {
    console.log("5000 on bord");
});