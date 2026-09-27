export const schoolStore = {
  school: {
    name: 'Joy Valley Academy',
    location: 'Nairobi, Kenya',
    schoolYear: '2026/2027'
  },
  classes: [
    { id: 1, name: 'Grade 1', teacher: 'Ms. Amina Kibet', students: 42 },
    { id: 2, name: 'Grade 4', teacher: 'Mr. Daniel Otieno', students: 38 },
    { id: 3, name: 'Grade 7', teacher: 'Mrs. Ruth Wanjiku', students: 35 },
    { id: 4, name: 'Form 2', teacher: 'Mr. Peter Njoroge', students: 31 }
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
    { id: 4, name: 'Mr. Peter Njoroge', subject: 'History', department: 'Senior School', status: 'Assigned' }
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
  ]
};
