// Address: project/src/components/SecondPage.tsx
import DepartmentList from './DepartmentList';
import { Box } from '@mui/material'

function SecondPage() {
  return (

  <Box sx={{
    borderRadius: '20px',
    backgroundColor: '#fff !important',
    padding: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 400,
    minHeight: 'fit-content',
}}>
  <DepartmentList />;
  </Box>
)
}

export default SecondPage;