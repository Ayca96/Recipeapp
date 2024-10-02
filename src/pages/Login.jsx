import { Box, Button, Stack, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
// import GoogleIcon from '@mui/icons-material/Google';
import "../css/Login.css"
import { useContext } from "react";
import { RecipeContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


function Login() {
  const{email,setEmail,password,setPassword}=useContext(RecipeContext)
  const navigate = useNavigate()

 const handleSubmit = (e)=>{
  e.preventDefault()

localStorage.setItem("email",email)
localStorage.setItem("password",password)

navigate("/home")
 }

  return (
    <div className='loginContainer'>
    <Box onSubmit={handleSubmit}  className='loginForm'
      component="form"
      sx={{ '& > :not(style)': { m: 1,  } }}
      noValidate
      autoComplete="off"
    >
      
      <TextField className='textField' id="outlined-basic" label="E-Mail" variant="outlined"  onChange={(e) => setEmail(e.target.value)}/>
      <TextField className='textField' id="outlined-basic" label="Password" variant="outlined"  onChange={(e) => setPassword(e.target.value) }/>

      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
      {/* <Button variant="outlined" startIcon={<GoogleIcon />}>
      Continue with Google
      </Button> */}
      <Button type="submit" variant="contained" endIcon={<SendIcon />}>
      Login
      </Button>
    </Stack>
    
    </Box>
    
    </div>
  )
}

export default Login