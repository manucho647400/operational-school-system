import { schoolStore } from '../data/store.js';

export const getDashboardSummary = () => {
  const totalStudents = schoolStore.students.length;
  const activeStudents = schoolStore.students.filter((student) => student.status === 'Active').length;
  const totalTeachers = schoolStore.teachers.length;
  const recentAttendance = schoolStore.attendance[0];
  const pendingFees = schoolStore.fees.filter((fee) => fee.status !== 'Paid').length;

  return {
    schoolName: schoolStore.school.name,
    totalStudents,
    activeStudents,
    totalTeachers,
    attendance: recentAttendance,
    pendingFees,
    classes: schoolStore.classes.length
  };
};

export const getStudents = () => schoolStore.students;
export const getTeachers = () => schoolStore.teachers;
export const getAttendance = () => schoolStore.attendance;
export const getFees = () => schoolStore.fees;
export const getClasses = () => schoolStore.classes;
