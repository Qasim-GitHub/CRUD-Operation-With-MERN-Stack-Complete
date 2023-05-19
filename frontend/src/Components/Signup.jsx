// import styled from "@emotion/styled";
// import { FormControl, FormGroup, InputLabel, Input, Typography, Button } from "@mui/material";




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

// function Signup() {

//     const [User, setUser] = useState(defaultvalue);
// const navigate=useNavigate();
    


//     const onValueChange = (e) => {
//         console.log(e.target.name, e.target.value);
//         setUser({ ...User, [e.target.name]: e.target.value })
//         console.log(User);
//     }
//     const addUserDetails =async () => {
//         await addUser(User)
//         navigate('/all')
//     }
//     return (

//         <Container>
//             <Typography variant="h4" style={{textAlign:'center'}}>Register</Typography>
//             <FormControl>
//                 <InputLabel>Name</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='name'/>
//             </FormControl>
//             <FormControl>
//                 <InputLabel>Email</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='email' />
//             </FormControl>
//             <FormControl>
//                 <InputLabel>Password</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='password' />
//             </FormControl>
//             <FormControl>
//                 <InputLabel>Gender</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='gender' />
//             </FormControl>
//             <FormControl>
//                 <Button variant="contained" onClick={() => addUserDetails()} >Submit</Button>
//             </FormControl>
//         </Container>

//     );
// }

// export default Signup;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { addUser } from "../Services/api";
// import { Formik, Form, Field } from "formik";
// import { TextField } from "@material-ui/core/TextField";
// import * as Yup from "yup";
// import { Button } from "@mui/material";



// const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string().email().required("Email is required"),
//     password: Yup.string().required("Password is required"),
//     gender: Yup.string().required("Gender is required"),
//   });

//   const Signup = () => {
  
//   <Formik
//     initialValues={{ name: "", email: "", password: "", gender: "" }}
//     validationSchema={validationSchema}
//     onSubmit={(values, actions) => {
//       console.log(values);
//       addUser();
//       actions.setSubmitting(false);
//     }}
//   >
//     {({ isSubmitting }) => (
//       <Form>
//         <Field
//           as={TextField}
//           name="name"
//           label="Name"
//           variant="outlined"
//           margin="normal"
//           fullWidth
//         />
//         <Field
//           as={TextField}
//           name="email"
//           label="Email"
//           variant="outlined"
//           margin="normal"
//           fullWidth
//         />
//         <Field
//           as={TextField}
//           name="password"
//           label="Password"
//           type="password"
//           variant="outlined"
//           margin="normal"
//           fullWidth
//         />
//         <Field
//           as={TextField}
//           name="gender"
//           label="Gender"
//           variant="outlined"
//           margin="normal"
//           fullWidth
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           disabled={isSubmitting}
//         >
//           Submit
//         </Button>
//       </Form>
//     )}
//   </Formik>
//   }

//   export default Signup




import styled from "@emotion/styled";
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, FormHelperText } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addUser } from "../Services/api";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";



const Container = styled(FormGroup)`
  width: 80%;
  margin: 5% auto 0 auto;
//   border: 1px solid black;
 
  & > div {
    margin: 15px;

    
  }
`
const Container1 = styled(Form)`
  width: 50%;
  margin: 5% auto 0 auto;
//   border: 1px solid black;
 
  & > div {
    margin: 15px;

    
  }
`
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  gender: Yup.string().required("Gender is required"),
});

function Signup() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    gender: "",
  };
//   const [User, setUser] = useState(initialValues);
  const navigate=useNavigate();
      
  
  
    //   const onValueChange = (e) => {
    //       console.log(e.target.name, e.target.value);
    //       setUser({ ...User, [e.target.name]: e.target.value })
    //       console.log(User);
    //   }
      const addUserDetails =async (User) => {
          await addUser(User)
          navigate('/all')
      }

//   const onSubmit = async(values) => {
//     console.log(values);
//     await addUser(User)
//     navigate('/all')
//   };

  return (
    <Container>
      <Typography variant="h4" style={{ textAlign: "center" }}>
        Register
      </Typography>
      <Formik initialValues={initialValues} onSubmit={addUserDetails} validationSchema={validationSchema}>
        {({ errors, touched }) => (
          <Container1>
            <FormControl error={touched.name && Boolean(errors.name)}>
              <InputLabel>Name</InputLabel>
              <Field as={Input} name="name" />
              <ErrorMessage name="name" component={FormHelperText} />
            </FormControl>
            <FormControl error={touched.email && Boolean(errors.email)}>
              <InputLabel>Email</InputLabel>
              <Field as={Input} name="email"  />
              <ErrorMessage name="email" component={FormHelperText} />
            </FormControl>
            <FormControl error={touched.password && Boolean(errors.password)}>
              <InputLabel>Password</InputLabel>
              <Field as={Input} type="password" name="password" />
              <ErrorMessage name="password" component={FormHelperText} />
            </FormControl>
            <FormControl error={touched.gender && Boolean(errors.gender)}>
              <InputLabel>Gender</InputLabel>
              <Field as={Input} name="gender" />
              <ErrorMessage name="gender" component={FormHelperText} />
            </FormControl>
            <FormControl>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </FormControl>
          </Container1>
        )}
      </Formik>
    </Container>
  );
}

export default Signup;
