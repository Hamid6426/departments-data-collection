import { useState } from 'react';
import { List, ListItem, ListItemButton, ListItemText, Checkbox, Collapse, Container, Button, Snackbar, SnackbarContent, IconButton, Typography } from '@mui/material';
import { ExpandMore, ExpandLess, CheckCircle } from '@mui/icons-material';
import { departments, subDepartments } from './departmentData';

function NavBar() {
  const [selectedDepartments, setSelectedDepartments] = useState<{ [key: number]: boolean }>({});
  const [selectedSubDepartments, setSelectedSubDepartments] = useState<{ [key: number]: boolean }>({});
  const [expandedDepartments, setExpandedDepartments] = useState<{ [key: number]: boolean }>({});
  const [showConfirmation, setShowConfirmation] = useState(false); // State to manage confirmation message visibility

  const handleDepartmentClick = (departmentId: number) => {
    setExpandedDepartments((prevExpanded) => ({ ...prevExpanded, [departmentId]: !prevExpanded[departmentId] }));
  };

  const handleDepartmentSelect = (departmentId: number) => {
    const isSelected = !selectedDepartments[departmentId];
    setSelectedDepartments((prevSelected) => ({ ...prevSelected, [departmentId]: isSelected }));

    // Select/Deselect all sub-departments of this department
    const updatedSubDepartments = { ...selectedSubDepartments };
    subDepartments[departmentId].forEach((subDept) => {
      updatedSubDepartments[subDept.id] = isSelected;
    });
    setSelectedSubDepartments(updatedSubDepartments);
  };

  const handleSubDepartmentSelect = (subDepartmentId: number, departmentId: number) => {
    const isSelected = !selectedSubDepartments[subDepartmentId];
    setSelectedSubDepartments((prevSelected) => ({ ...prevSelected, [subDepartmentId]: isSelected }));

    // If all sub-departments are selected, select the department
    const allSelected = subDepartments[departmentId].every((subDept) => isSelected || selectedSubDepartments[subDept.id]);
    setSelectedDepartments((prevSelected) => ({ ...prevSelected, [departmentId]: allSelected }));
  };

  const handleSubmit = () => {
    console.log('Selected Departments:', selectedDepartments);
    console.log('Selected Sub-Departments:', selectedSubDepartments);
    setShowConfirmation(true); // Show confirmation message
  };

  return (
    <Container>
      <List>
        {departments.map((department) => (
          <>
            <ListItem key={department.id} disablePadding>
              <Checkbox
                checked={selectedDepartments[department.id] || false}
                onChange={() => handleDepartmentSelect(department.id)}
              />
              <ListItemButton onClick={() => handleDepartmentClick(department.id)}>
                <ListItemText primary={department.name} />
                {expandedDepartments[department.id] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={expandedDepartments[department.id]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ paddingLeft: '40px' }}>
                {subDepartments[department.id].map((subDepartment) => (
                  <ListItem key={subDepartment.id} disablePadding>
                    <Checkbox
                      checked={selectedSubDepartments[subDepartment.id] || false}
                      onChange={() => handleSubDepartmentSelect(subDepartment.id, department.id)}
                    />
                    <ListItemText primary={subDepartment.name} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </>
        ))}
      </List>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>

      {/* Confirmation Snackbar */}
      <Snackbar
        open={showConfirmation}
        autoHideDuration={6000}
        onClose={() => setShowConfirmation(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <SnackbarContent
          message={
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckCircle sx={{ mr: 1 }} />
              Data Collected, Thank You
            </Typography>
          }
          action={
            <IconButton size="small" color="inherit" onClick={() => setShowConfirmation(false)}>
              <ExpandMore fontSize="small" />
            </IconButton>
          }
        />
      </Snackbar>
    </Container>
  );
}

export default NavBar;
