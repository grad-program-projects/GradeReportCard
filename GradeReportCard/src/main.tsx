import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReportCard from "./components/ReportCard.tsx";
import Leaderboard from "./components/Leaderboard.tsx";
import './styles/index.css'

const students = [
  { name: "Alice Mercer", grade: 95 },
  { name: "Brian Okafor", grade: 82 },
  { name: "Carmen Diaz", grade: 74 },
  { name: "David Nkosi", grade: 61 },
  { name: "Ella Tremblay", grade: 55 },
  { name: "Farai Moyo", grade: 48 },
  { name: "George Tan", grade: 91 },
  { name: "Hana Petrov", grade: 33 },
  { name: "Ivan Castillo", grade: 78 },
  { name: "Jade Williamson", grade: 67 },
  { name: "Kofi Mensah", grade: 88 },
  { name: "Luna Park", grade: 72 },
  { name: "Marcus Webb", grade: 41 },
  { name: "Nadia Osei", grade: 96 },
  { name: "Omar Farouq", grade: 63 },
];

const players = [
  { name: "Liam Vorster", score: 88 },
  { name: "Zara Patel", score: 73 },
  { name: "Kwame Asante", score: 95 },
  { name: "Sofia Reyes", score: 61 },
  { name: "Noah Bergman", score: 79 },
  { name: "Aisha Nkosi", score: 95 },
  { name: "Ethan Chow", score: 44 },
  { name: "Maya Johansson", score: 82 },
  { name: "Carlos Mendes", score: 67 },
  { name: "Priya Sharma", score: 91 },
  { name: "Remi Dubois", score: 58 },
  { name: "Sana Ito", score: 76 },
  { name: "Tobias Müller", score: 85 },
  { name: "Yuki Nakamura", score: 70 },
  { name: "Zoe Adeyemi", score: 99 },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="page-header">
      <span className="eyebrow">Academic Year 2026</span>
      <h1>Student Dashboard</h1>
      <p>Track grades, rankings, and performance at a glance.</p>
    </div>

    <div className="sections">
      <ReportCard students={students} />
      <Leaderboard players={players} />
    </div>
  </StrictMode>
);
