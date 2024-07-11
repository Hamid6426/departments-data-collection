// Address: project/src/components/SignUpForm.tsx
import { useState, useEffect } from 'react';
import { TextField, Button , Box , Typography } from '@mui/material';

interface SignUpFormProps {
    onSubmit: (details: any) => void;
}

function SignUpForm({ onSubmit }: SignUpFormProps) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

// LOCAL STORAGE SETUP

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !phone || !email) {
      setError('All fields are required.');
      return;
    }
    onSubmit({ name, phone, email });
    localStorage.setItem('formData', JSON.stringify({ name, phone, email }));
  };
  
  // Retrieve the data from localStorage with type safety
  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const { name, phone, email } = JSON.parse(storedData);
      setName(name);
      setPhone(phone);
      setEmail(email);
    }
  }, []);

    return (
         
            <Box
            sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            outline: 'none',
            textAlign: 'center',
            }}
        >

<Typography variant="h3" component="h2" gutterBottom>
          Refer a Friend
        </Typography>

            <form onSubmit={handleSubmit}>
                <TextField 
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    label="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    error={!name && !!error} 
                    helperText={!name && !!error ? "Name is required" : ""}
                />
                <TextField 
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    label="Phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    error={!phone && !!error} 
                    helperText={!phone && !!error ? "Phone is required" : ""}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    label="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    error={!email && !!error} 
                    helperText={!email && !!error ? "Email is required" : ""}
                />
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
            </form>

        </Box>
    );
} 

export default SignUpForm;
