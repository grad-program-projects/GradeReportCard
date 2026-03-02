
interface GradeInfo {
  gradeLabel: string;
  className: string;
}

export default function GetGrade(grade: number): GradeInfo {
  switch (true) {
    case grade >= 80:
      return { gradeLabel: 'A', className: 'PassA' };
    case grade >= 70:
      return { gradeLabel: 'B', className: 'PassB' };
    case grade >= 60:
      return { gradeLabel: 'C', className: 'PassC' };
    case grade >= 50:
      return { gradeLabel: 'D', className: 'PassD' };
    default:
      return { gradeLabel: 'F', className: 'Fail' };
  }
}
