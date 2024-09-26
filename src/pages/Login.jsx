import { Box, Button, Stack, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import GoogleIcon from '@mui/icons-material/Google';
import "../css/Login.css"


function Login() {
  return (
    <div className='loginContainer'>
    <Box className='loginForm'
      component="form"
      sx={{ '& > :not(style)': { m: 1,  } }}
      noValidate
      autoComplete="off"
    >
      
      <TextField className='textField' id="outlined-basic" label="E-Mail" variant="outlined" />
      <TextField className='textField' id="outlined-basic" label="Password" variant="outlined" />

      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
      <Button variant="outlined" startIcon={<GoogleIcon />}>
      Continue with Google
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
      Login
      </Button>
    </Stack>
    
    </Box>
    
    </div>
  )
}

export default Login