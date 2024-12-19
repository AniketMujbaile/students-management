import React from 'react';
import { Student } from '../types/student';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from './ui/table';

interface StudentTableProps {
  students: Student[];
}

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Roll Number</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Marks</TableHead>
            <TableHead>Avg Marks</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Attendance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={index}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.age}</TableCell>
              <TableCell>{student.rollNumber}</TableCell>
              <TableCell>{student.class}</TableCell>
              <TableCell>{student.marks}</TableCell>
              <TableCell>{student.avgMarks}</TableCell>
              <TableCell>{student.city}</TableCell>
              <TableCell>{student.attendance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StudentTable;