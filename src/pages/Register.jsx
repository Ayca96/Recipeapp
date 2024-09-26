import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import  "../css/Register.css"
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const navigate=useNavigate()
  
  return (
    <div className='container'>
    <Box className='form'
      component="form"
      sx={{ '& > :not(style)': { m: 1,  } }}
      noValidate
      autoComplete="off"
    >
      <TextField className='textField' id="outlined-basic" label="First Name" variant="outlined" />
      <TextField className='textField' id="outlined-basic" label="Last Name" variant="outlined" />
      <TextField className='textField' id="outlined-basic" label="E-Mail" variant="outlined" />
      <TextField className='textField' id="outlined-basic" label="Password" variant="outlined" />

      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
      <Button variant="outlined" startIcon={<GoogleIcon />}>
      Continue with Google
      </Button>

      <Button 
      variant="contained" 
      endIcon={<SendIcon />}
      onClick={()=>{navigate("/Recipe")}}
      >
       Register
      </Button>
    </Stack>
    
    </Box>
    
    </div>
      
  );
}
