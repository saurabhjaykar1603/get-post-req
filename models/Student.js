import mongoose, { Schema, model } from "mongoose";

const studentSchema = new Schema({
    fullName: String,
    email: String,
    regNo: Number
});

const Student = model('Student', studentSchema);


export default Student;
