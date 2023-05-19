// import styled from "@emotion/styled";
// import { FormControl, FormGroup, InputLabel, Input, Typography, Button } from "@mui/material";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { editUser, updateUser } from "../Services/api";



// const Container = styled(FormGroup)`
// width:40%;
// margin:5% auto 0 auto;
// & > div {
//     margin: 15px;
// }
// `
// const defaultvalue = {
//     name: "",
//     email: "",
//     password: "",
//     gender: ""
// }

// function Update() {
 
//     const [User, setUser] = useState(defaultvalue);
//     const navigate = useNavigate();
//     const { id } = useParams();
//     useEffect(() => {
//         loadUserdata();
//     },[])
//     const loadUserdata = async () => {
//         console.log(id);
//         const response = await updateUser(id);
//         setUser(response.data)
//     }


//     const onValueChange = (e) => {
//         // console.log(e.target.name, e.target.value);
//         setUser({ ...User, [e.target.name]: e.target.value })
//         console.log(User);
//     }
//     const updateUserDetails = async () => {
//         await editUser(User,id)
//         navigate('/all')
//     }
//     return (

//         <Container>
//             <Typography variant="h4">Update User</Typography>
//             <FormControl>
//                 <InputLabel>Name</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='name' value={User.name} />
//             </FormControl>
//             <FormControl>
//                 <InputLabel>Email</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='email' value={User.email} />
//             </FormControl>
//             <FormControl>
//                 <InputLabel>Password</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='password'  value={User.password}/>
//             </FormControl>
//             <FormControl>
//                 <InputLabel>Gender</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='gender' value={User.gender} />
//             </FormControl>
//             <FormControl>
//                 <Button variant="contained" onClick={() => updateUserDetails()} >Update</Button>
//             </FormControl>
//         </Container>

//     );
// }

// export default Update;









import styled from "@emotion/styled";
import { FormControl, FormGroup, InputLabel, Input, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, updateUser } from "../Services/api";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Container = styled(FormGroup)`
  width: 40%;
  margin: 5% auto 0 auto;
  & > div {
    margin: 15px;
  }
`;

const defaultValues = {
  name: "",
  email: "",
  password: "",
  gender: "",
};

function Update() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [User1, setUser] = useState(defaultValues);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    console.log(id);
    const response = await updateUser(id);
    setUser(response.data);
  };

//   const onSubmit = async (values) => {
//     await editUser(values, id);
//     navigate("/all");
//   };
const updateUserDetails = async (User) => {
    await editUser(User,id)
    navigate('/all')
}
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(8, "Password must contain at least 8 characters")
      .required("Required"),
    gender: Yup.string().required("Required"),
  });

  return (
    <Container>
      <Typography variant="h4">Update User</Typography>
      <Formik
        initialValues={User1}
        validationSchema={validationSchema}
        onSubmit={updateUserDetails}
      >
        {(formik) => (
          <Form>
            <FormControl>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Field name="name" as={Input} />
              <ErrorMessage name="name" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Field name="email" as={Input}  />
              <ErrorMessage name="email" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Field name="password" type="password" as={Input} />
              <ErrorMessage name="password" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="gender">Gender</InputLabel>
              <Field name="gender" as={Input} />
              <ErrorMessage name="gender" />
            </FormControl>
            <FormControl>
              <Button
                variant="contained"
                type="submit"
                disabled={!formik.isValid}
              >
                Update
              </Button>
            </FormControl>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Update;
