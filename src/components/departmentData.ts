// Address: Project/src/components/DepartmentData.tsx
export interface Department {
    id: number;
    name: string;
  }
  
  export interface SubDepartment {
    id: number;
    name: string;
  }
  
  export const departments: Department[] = [
    { id: 1, name: 'Design' },
    { id: 2, name: 'Computer Science' },
    { id: 3, name: 'Data Science' },
    { id: 4, name: 'Computer Engineering' },
  ];
  
  export const subDepartments: { [key: number]: SubDepartment[] } = {
    1: [
      { id: 1, name: 'Graphic Design' },
      { id: 2, name: 'UI/UX Design' },
      { id: 3, name: 'Web Design' },
      { id: 4, name: 'Product Design' },
      { id: 5, name: 'Interior Design' },
    ],
    2: [
      { id: 6, name: 'Algorithms' },
      { id: 7, name: 'Data Structures' },
      { id: 8, name: 'Operating Systems' },
      { id: 9, name: 'Networks' },
      { id: 10, name: 'Databases' },
    ],
    3: [
      { id: 11, name: 'Machine Learning' },
      { id: 12, name: 'Data Mining' },
      { id: 13, name: 'Big Data' },
      { id: 14, name: 'Statistics' },
      { id: 15, name: 'Data Visualization' },
    ],
    4: [
      { id: 16, name: 'Embedded Systems' },
      { id: 17, name: 'Hardware Design' },
      { id: 18, name: 'Robotics' },
      { id: 19, name: 'VLSI Design' },
      { id: 20, name: 'Computer Architecture' },
    ],
  };
  