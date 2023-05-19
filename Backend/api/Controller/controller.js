const { response } = require('express');
const userModel= require('../model/schema')


////////////////////////////////////Signup API///////////////////////////////////////////
exports.Signup=async (req,res)=>{
    let {name,email,password,gender}=req.body
    console.log(req.body);
    const user_Signup= new userModel({
        name,
        email,
        password,
        gender
    });
    const result= await user_Signup.save();
    res.status(200).json(result);
};

///////////////////////////Get All Users api////////////////////
exports.getUser=async(req,res)=>{
    try {
        const users=await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json(error)
    }
    }

/////////////////////////////////////Find User by Id for edit////////////////////////////////
exports.userById = async(req,res)=>{
 const id = req.params.id
 const data = await userModel.findById({_id:id})
 res.status(200).json(data)
}



/////////////////////////Update User api//////////////////////


// exports.updateUser=async(req,res)=>{
   
//     // try {
//     //     const user1= await userModel.findById(req.params.id);
//     //     res.status(200).json(user1); 
//     // } catch (error) {
//     //     res.status(404).json(error)
//     // }

//     try {
// const user= await userModel.findByIdAndUpdate(req.params.id, req.body ,{
//     new: true,
// });
// res.status(200).json(user);
//     } catch (error) {
//         res.status(404).json(error)
//     }
// }
 
///////////////////////////////////Update  user////////////////////////////////////

exports.edituser=async(req,res)=>{

try {
    const user= await userModel.findByIdAndUpdate(req.params.id, req.body ,{
        new: true,
    });
    res.status(200).json(user);
        } catch (error) {
            res.status(404).json(error)
        }
}


//////////////////////////delete User/////////////////////////////
exports.deleteUser=async(req,res)=>{
    
    try {
      await  userModel.deleteOne({ _id:req.params.id});
      res.status(200).json({message:"user delete successfully"})
    } catch (error) {
        res.status(404).json(error)
    }
}