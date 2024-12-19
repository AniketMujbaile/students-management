import React from 'react';
import { Student } from '../types/student';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <Card className="w-full mb-4 shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{student.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-sm text-gray-600">Age</p>
            <p className="font-semibold">{student.age}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Marks</p>
            <p className="font-semibold">{student.marks}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Roll Number</p>
            <p className="font-semibold">{student.rollNumber}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentCard;