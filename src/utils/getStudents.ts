import { Student } from '../types/student';
import students from '../data/students.json';

export const getStudents = (pageSize: number, pageNumber: number): Promise<Student[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const startIndex = (pageNumber - 1) * pageSize;
      const paginatedData = students.slice(startIndex, startIndex + pageSize);
      resolve(paginatedData);
    }, 2000);
  });
};

export const getTotalStudents = (): number => {
  return students.length;
};

 