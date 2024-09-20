import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import  "../css/Register.css"

export default function Register() {
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
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
    
    </Box>
    
    </div>
      
  );
}
