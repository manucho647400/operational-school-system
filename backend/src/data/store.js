export const schoolStore = {
  school: {
    name: 'Joy Valley Academy',
    location: 'Nairobi, Kenya',
    schoolYear: '2026/2027',
    principal: 'Mrs. Grace Njeri'
  },
  classes: [
    { id: 1, name: 'Grade 1', teacher: 'Ms. Amina Kibet', students: 42 },
    { id: 2, name: 'Grade 4', teacher: 'Mr. Daniel Otieno', students: 38 },
    { id: 3, name: 'Grade 7', teacher: 'Mrs. Ruth Wanjiku', students: 35 },
    { id: 4, name: 'Form 2', teacher: 'Mr. Peter Njoroge', students: 31 }
  ],
  users: [
    { id: 1, name: 'School Admin', email: 'admin@joyvalley.ac.ke', password: 'admin123', role: 'admin' },
    { id: 2, name: 'Math Teacher', email: 'teacher@joyvalley.ac.ke', password: 'teacher123', role: 'teacher' },
    { id: 3, name: 'Accounts Officer', email: 'accounts@joyvalley.ac.ke', password: 'account123', role: 'accountant' }
  ],
  students: [
    { id: 1, name: 'Alice Wanjiru', className: 'Grade 4', age: 10, gender: 'Female', status: 'Active', admissionDate: '2025-01-15' },
    { id: 2, name: 'Brian Mutua', className: 'Grade 1', age: 7, gender: 'Male', status: 'Active', admissionDate: '2025-02-04' },
    { id: 3, name: 'Cynthia Achieng', className: 'Form 2', age: 15, gender: 'Female', status: 'Active', admissionDate: '2024-09-09' },
    { id: 4, name: 'Daniel Kamau', className: 'Grade 7', age: 13, gender: 'Male', status: 'On Leave', admissionDate: '2024-08-20' },
    { id: 5, name: 'Faith Wambui', className: 'Grade 4', age: 10, gender: 'Female', status: 'Active', admissionDate: '2025-01-28' }
  ],
  teachers: [
    { id: 1, name: 'Ms. Amina Kibet', subject: 'Mathematics', department: 'Primary', status: 'Assigned' },
    { id: 2, name: 'Mr. Daniel Otieno', subject: 'Science', department: 'Primary', status: 'Assigned' },
    { id: 3, name: 'Mrs. Ruth Wanjiku', subject: 'English', department: 'Middle School', status: 'Available' },
    { id: 4, name: 'Mr. Peter Njoroge', subject: 'History', department: 'Senior School', status: 'Assigned' },
    { id: 5, name: 'Mrs. Jane Mugo', subject: 'Biology', department: 'Senior School', status: 'Available' }
  ],
  attendance: [
    { date: '2026-09-25', present: 184, absent: 12, late: 7 },
    { date: '2026-09-24', present: 180, absent: 16, late: 9 },
    { date: '2026-09-23', present: 189, absent: 9, late: 5 }
  ],
  fees: [
    { id: 1, student: 'Alice Wanjiru', amount: 24000, status: 'Paid', dueDate: '2026-09-15' },
    { id: 2, student: 'Brian Mutua', amount: 16000, status: 'Pending', dueDate: '2026-09-30' },
    { id: 3, student: 'Cynthia Achieng', amount: 28000, status: 'Paid', dueDate: '2026-09-18' },
    { id: 4, student: 'Daniel Kamau', amount: 20000, status: 'Partial', dueDate: '2026-10-05' }
  ],
  timetable: [
    { day: 'Monday', period: '08:00-09:00', class: 'Grade 4', subject: 'Mathematics', teacher: 'Ms. Amina Kibet' },
    { day: 'Monday', period: '09:00-10:00', class: 'Grade 1', subject: 'English', teacher: 'Mrs. Ruth Wanjiku' },
    { day: 'Tuesday', period: '10:00-11:00', class: 'Form 2', subject: 'Biology', teacher: 'Mrs. Jane Mugo' },
    { day: 'Wednesday', period: '11:00-12:00', class: 'Grade 7', subject: 'Science', teacher: 'Mr. Daniel Otieno' },
    { day: 'Thursday', period: '08:00-09:00', class: 'Form 2', subject: 'History', teacher: 'Mr. Peter Njoroge' }
  ],
  examResults: [
    { id: 1, student: 'Alice Wanjiru', className: 'Grade 4', subject: 'Mathematics', score: 86, grade: 'A', term: 'Term 1', date: '2026-05-16' },
    { id: 2, student: 'Brian Mutua', className: 'Grade 1', subject: 'English', score: 74, grade: 'B', term: 'Term 1', date: '2026-05-18' },
    { id: 3, student: 'Cynthia Achieng', className: 'Form 2', subject: 'Biology', score: 91, grade: 'A', term: 'Term 1', date: '2026-05-20' },
    { id: 4, student: 'Daniel Kamau', className: 'Grade 7', subject: 'Science', score: 68, grade: 'C', term: 'Term 1', date: '2026-05-22' }
  ],
  reportCards: [
    { id: 1, student: 'Alice Wanjiru', className: 'Grade 4', average: 86, term: 'Term 1', remarks: 'Excellent progress and strong participation in class.' },
    { id: 2, student: 'Brian Mutua', className: 'Grade 1', average: 74, term: 'Term 1', remarks: 'Good effort; continue reading and writing practice.' },
    { id: 3, student: 'Cynthia Achieng', className: 'Form 2', average: 91, term: 'Term 1', remarks: 'Outstanding performance across all core subjects.' },
    { id: 4, student: 'Daniel Kamau', className: 'Grade 7', average: 68, term: 'Term 1', remarks: 'Encourage more revision and attendance in science practical work.' }
  ]
};
