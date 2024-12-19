import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getStudents, getTotalStudents } from './utils/getStudents';
import { Student } from './types/student';
import StudentTable from './components/StudentTable';
import StudentCard from './components/StudentCard';
import { Loader2 } from 'lucide-react';
import Pagination from './components/Pagination';

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const PAGE_SIZE = 8;
  const totalStudents = getTotalStudents();
  const totalPages = Math.ceil(totalStudents / PAGE_SIZE);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async (currentPage = page) => {
    setLoading(true);
    try {
      const newStudents = await getStudents(PAGE_SIZE, currentPage);
      
      if (currentPage === 1) {
        setStudents(newStudents);
      } else {
        setStudents(prevStudents => [...prevStudents, ...newStudents]);
      }
      
      setHasMore(currentPage < totalPages);
      setPage(currentPage);
    } catch (error) {
      console.error('Error fetching students', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      fetchStudents(newPage);
    }
  };

  const renderMobileView = () => (
    <InfiniteScroll
      dataLength={students.length}
      next={fetchStudents}
      hasMore={hasMore}
      loader={
        <div className="flex justify-center items-center p-4">
          <Loader2 className="animate-spin" />
        </div>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:hidden">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </InfiniteScroll>
  );

  const renderDesktopView = () => (
    <div className="hidden sm:block p-4">
      <StudentTable students={students} />
      <div className="mt-4">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center my-6">Student Management</h1>
        
        {loading && students.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin h-12 w-12" />
          </div>
        ) : (
          <>
            {renderMobileView()}
            {renderDesktopView()}
          </>
        )}
      </div>
    </div>
  );
};

export default App;

 