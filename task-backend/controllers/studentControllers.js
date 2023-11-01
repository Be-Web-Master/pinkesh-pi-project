const Student = require("../models/studentModel");

const uploadData = async (req, res) => {
    const {name,email,phone,profile}=req.body
    try {
        const studentData = await Student.create({
            name,
            email,
            phone,profile
        })
        res.status(200).json({ studentData });
    } catch (err) {
     res.status(400).json({ err });
    }
}

const getAllData = async (req, res) => {
  try {
    const studentsData = await Student.find({});
    console.log({ studentsData });
    res.status(200).json({ studentsData });
  } catch (err) {
    res.status(400).json({ err });
  }
};

module.exports = {
  uploadData,
  getAllData,
};
