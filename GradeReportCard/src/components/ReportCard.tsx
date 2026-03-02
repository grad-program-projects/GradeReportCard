
import GetGrade from '../utils/utils';

interface Student {
  name: string;
  grade: number;
}

interface ReportCardProp {
  students: Student[];
}

export default function ReportCard({ students }: ReportCardProp) {
  const averageGrade = Math.round(
    students.reduce((runningTotal, currentStudent) => runningTotal + currentStudent.grade, 0)
    / students.length
  );
  const passingCount = students.filter((currentStudent) => currentStudent.grade >= 50).length;
  const topGrade = Math.max(...students.map((currentStudent) => currentStudent.grade));
    //students.sort((a,b) => b.grade -a.grade); - mutating array, not allowed, createa copy instead
  //const sorted= [...students].sort((a,b) => b.grade - a.grade);

  const items = students.map((student) => {
    const gradeInfo = GetGrade(student.grade);
    return (
      <li key={student.name} className={`report-item ${gradeInfo.className}`}>
        <span className="grade-badge">{gradeInfo.gradeLabel}</span>
        <span className="student-name">{student.name}</span>
        <span className="score-num">{student.grade}%</span>
      </li>
    );
  });

  return (
    <div className="panel">
      <div className="panel-header">
        <div className="panel-icon green">📋</div>
        <div>
          <div className="panel-title">Report Card</div>
          <div className="panel-subtitle">{students.length} students enrolled</div>
        </div>
      </div>
      <div className="panel-body">
        <div className="stats-bar">
          <div className="stat-chip">
            <span className="val">{passingCount}</span>
            <span className="lbl">Passing</span>
          </div>
          <div className="stat-chip">
            <span className="val">{topGrade}%</span>
            <span className="lbl">Highest</span>
          </div>
          <div className="stat-chip">
            <span className="val">{averageGrade}%</span>
            <span className="lbl">Average</span>
          </div>
        </div>
        <ul className="report-list">{items}</ul>
      </div>
    </div>
  );
}
