import axios from "axios";

////////////////////////////////////Signup API///////////////////////////////////////////

export const addUser=async(data)=>{
    try {
       return await axios.post("http://localhost:4000/api/signup",data)
     
    } catch (error) {
        console.log("error while calling the signup api", error)
    }
}

///////////////////////////Get All Users api////////////////////

export const getUser=async()=>{
  try {
    return await axios.get("http://localhost:4000/api/all")
  } catch (error) {
    console.log("error while calling getuserapi",error);
  }
    
}


/////////////////////////////////////Find User by Id for edit////////////////////////////////

export const updateUser=async(id)=>{
    try {
        return await axios.get(`http://localhost:4000/api/userFind/${id}`);
        
    } catch (error) {
        console.log("error while calling the update user api", error);
    }
}

/////////////////////////Update User api//////////////////////

export const editUser=async(user,id)=>{
    console.log(user);
try {
    return await axios.patch(`http://localhost:4000/api/edit/${id}`, user)

} catch (error) {
    console.log("error while calling the edit user api",error);
}
}


//////////////////////////delete User/////////////////////////////

export const deluser=async(_id)=>{
    try {
        return await axios.delete(`http://localhost:4000/api/delete/${_id}`)
    } catch (error) {
        console.log("error while calling delete user api",error);
    }
}