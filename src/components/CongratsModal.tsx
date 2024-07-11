// Address: project/src/components/CongratsModal.tsx
import { Dialog, DialogActions, Button, Typography , Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface CongratsModalProps {
    userDetails: {
        name: string;
        phone: string;
        email: string;
    };
}

function CongratsModal({ userDetails }: CongratsModalProps) {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false);
    };

    const handleContinue = () => {
        handleClose();
        navigate('/second-page');
    };

    return (
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',  // Center the dialog
            borderRadius: '20px',  // Rounded corners
            backgroundColor: '#fff !important',  // Background color
            padding: 4,  // Padding inside the dialog
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: 400,
        }}>

        <Dialog open={open} onClose={handleClose}>
            <Typography variant="h5" sx={{ fontSize: '20px', padding: 4, textAlign: 'center', minWidth: 600, }}>  {/* Use h5 with larger font size */}
              Congratulations, {userDetails.name}!
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '16px', paddingBottom: 3, marginX:4 , textAlign: 'center', minWidth: 400,}}> {/* Use body1 with slightly smaller font size */}
              Your phone number is {userDetails.phone} and email is {userDetails.email} is saved. Please CONTINUE.
            </Typography>
            <DialogActions sx={{ display: 'flex', mb: 3 ,justifyContent: 'center' }}> {/* Center button using flexbox */}
              <Button onClick={handleContinue} variant="contained" autoFocus>
                CONTINUE
              </Button>
            </DialogActions>
          </Dialog>
          </Box>
    );
}

export default CongratsModal;
