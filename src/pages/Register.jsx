import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import  "../css/Register.css"
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { RecipeContext } from '../context/AuthContext';


export default function Register() {
  const navigate=useNavigate()
  const{firstName, setfirstName, lastName,setLastName, email,setEmail,password,setPassword}=useContext(RecipeContext)

  const handleSubmit = (e) =>{
    e.preventDefault()
    localStorage.setItem("username",firstName)
    localStorage.setItem("userlastname",lastName)
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)

    navigate("/recipe")
  }
  
  return (

    //*onSubmit gelcek handleClick
    <div className='container'>  
    <Box onSubmit={handleSubmit} className='form'
      component="form"
      sx={{ '& > :not(style)': { m: 1,  } }}
      noValidate
      autoComplete="off"
    >
      <TextField className='textField' id="outlined-basic" label="First Name" variant="outlined" onChange={(e)=>setfirstName(e.target.value)} />
      <TextField className='textField' id="outlined-basic" label="Last Name" variant="standard"  onChange={(e)=>setLastName(e.target.value)}/>
      <TextField className='textField' id="outlined-basic" label="E-Mail" variant="filled"  onChange={(e)=>setEmail(e.target.value)}/>
      <TextField className='textField' id="outlined-basic" label="Password" variant="outlined"  onChange={(e)=>setPassword(e.target.value)}/>

      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
      {/* <Button variant="contained" startIcon={<GoogleIcon />}>
      Continue with Google
      </Button> */}

      <Button 
      variant="contained" 
      endIcon={<SendIcon />}
      onClick={()=>{navigate("/recipe")}}
      >
       Register
      </Button>
    </Stack>
    
    </Box>
    
    </div>
      
  );
}
