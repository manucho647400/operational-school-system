import { schoolStore } from '../data/store.js';

export const getDashboardSummary = () => {
  const totalStudents = schoolStore.students.length;
  const activeStudents = schoolStore.students.filter((student) => student.status === 'Active').length;
  const totalTeachers = schoolStore.teachers.length;
  const recentAttendance = schoolStore.attendance[0];
  const pendingFees = schoolStore.fees.filter((fee) => fee.status !== 'Paid').length;

  return {
    schoolName: schoolStore.school.name,
    location: schoolStore.school.location,
    principal: schoolStore.school.principal,
    totalStudents,
    activeStudents,
    totalTeachers,
    attendance: recentAttendance,
    pendingFees,
    classes: schoolStore.classes.length,
    feesCollected: schoolStore.fees.filter((fee) => fee.status === 'Paid').reduce((sum, fee) => sum + fee.amount, 0)
  };
};

export const getStudents = () => schoolStore.students;
export const getTeachers = () => schoolStore.teachers;
export const getAttendance = () => schoolStore.attendance;
export const getFees = () => schoolStore.fees;
export const getClasses = () => schoolStore.classes;
export const getTimetable = () => schoolStore.timetable;

export const addStudent = (studentData) => {
  const nextId = schoolStore.students.length ? Math.max(...schoolStore.students.map((student) => student.id)) + 1 : 1;

  const student = {
    id: nextId,
    name: studentData.name,
    className: studentData.className,
    age: Number(studentData.age),
    gender: studentData.gender,
    status: studentData.status || 'Active',
    admissionDate: studentData.admissionDate || new Date().toISOString().slice(0, 10)
  };

  schoolStore.students.push(student);
  return student;
};

export const addFeeRecord = (feeData) => {
  const nextId = schoolStore.fees.length ? Math.max(...schoolStore.fees.map((fee) => fee.id)) + 1 : 1;

  const fee = {
    id: nextId,
    student: feeData.student,
    amount: Number(feeData.amount),
    status: feeData.status || 'Pending',
    dueDate: feeData.dueDate || new Date().toISOString().slice(0, 10)
  };

  schoolStore.fees.push(fee);
  return fee;
};

export const addAttendanceEntry = (attendanceData) => {
  const entry = {
    date: attendanceData.date || new Date().toISOString().slice(0, 10),
    present: Number(attendanceData.present),
    absent: Number(attendanceData.absent),
    late: Number(attendanceData.late)
  };

  schoolStore.attendance.unshift(entry);
  return entry;
};
