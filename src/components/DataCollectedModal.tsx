// Address: project/src/components/DataCollectedModal.tsx
import { Dialog, DialogActions, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Define types for Department and SubDepartment
interface Department {
    id: number;
    name: string;
}

interface SubDepartment {
    id: number;
    name: string;
}

interface DataCollectedModalProps {
    userDetails: {
        name: string;
        phone: string;
        email: string;
        selectedDepartments: { [key: number]: boolean };
        selectedSubDepartments: { [key: number]: boolean };
    };
    onClose: () => void;
}

// Example departments and subDepartments
const departments: Department[] = [
    { id: 1, name: 'Department 1' },
    { id: 2, name: 'Department 2' },
    { id: 3, name: 'Department 3' },
];

const subDepartments: { [key: number]: SubDepartment[] } = {
    1: [
        { id: 1, name: 'Sub-department 1.1' },
        { id: 2, name: 'Sub-department 1.2' },
    ],
    2: [
        { id: 3, name: 'Sub-department 2.1' },
        { id: 4, name: 'Sub-department 2.2' },
    ],
    3: [
        { id: 5, name: 'Sub-department 3.1' },
        { id: 6, name: 'Sub-department 3.2' },
    ],
};

function DataCollectedModal({ userDetails, onClose }: DataCollectedModalProps) {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false);
        onClose();
    };

    const handleContinue = () => {
        handleClose();
        navigate('/second-page');
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <Typography>
                Congratulations, {userDetails.name}! Your phone number is {userDetails.phone} and email is {userDetails.email}.
            </Typography>
            <Typography>
                Selected Departments: {Object.keys(userDetails.selectedDepartments).filter(id => userDetails.selectedDepartments[parseInt(id)]).map(id => departments.find(dept => dept.id === parseInt(id))?.name).join(', ')}
            </Typography>
            <Typography>
                Selected Sub-Departments: {Object.keys(userDetails.selectedSubDepartments).filter(id => userDetails.selectedSubDepartments[parseInt(id)]).map(id => {
                    const parentDeptId = Object.keys(subDepartments).find(key => subDepartments[parseInt(key)].some(subDept => subDept.id === parseInt(id)));
                    return subDepartments[parseInt(parentDeptId!)].find(subDept => subDept.id === parseInt(id))?.name;
                }).join(', ')}
            </Typography>
            <DialogActions>
                <Button onClick={handleContinue}>CONTINUE</Button>
            </DialogActions>
        </Dialog>
    );
}

export default DataCollectedModal;
