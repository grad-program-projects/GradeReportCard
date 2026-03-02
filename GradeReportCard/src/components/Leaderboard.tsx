
interface Player {
    name: string;
    score: number;
}
interface LearderboardProp{
    players: Player[];
} 
 
export default function Leaderboard({ players }: LearderboardProp) {
  const sorted = [...players].sort((playerA, playerB) => playerB.score - playerA.score);
  const maxScore = sorted[0]?.score ?? 100;

  const averageScore = Math.round(players.reduce((runningTotal, currentPlayer) => runningTotal + currentPlayer.score, 0) / players.length);
  const topScore = sorted[0]?.score ?? 0;

  const medals = ['🥇', '🥈', '🥉'];

  const items = sorted.map((player, index) => {
    const rankClass =
      index === 0 ? 'rank-1' : index === 1 ? 'rank-2' : index === 2 ? 'rank-3' : '';

    return (
      <li key={player.name} className={`leaderboard-item ${rankClass}`}>
        <span className={`rank-badge ${index < 3 ? 'medal' : ''}`}>
          {index < 3 ? medals[index] : index + 1}
        </span>
        <span className="player-name">{player.name}</span>
        <div className="score-bar-wrap">
          <div
            className="score-bar-fill"
            style={{ width: `${(player.score / maxScore) * 100}%` }}
          />
        </div>
        <span className="score-pill">{player.score} pts</span>
      </li>
    );
  });

  return (
    <div className="panel">
      <div className="panel-header">
        <div className="panel-icon blue">🏆</div>
        <div>
          <div className="panel-title">Leaderboard</div>
          <div className="panel-subtitle">{players.length} players ranked</div>
        </div>
      </div>
      <div className="panel-body">
        <div className="stats-bar">
          <div className="stat-chip">
            <span className="val">{players.length}</span>
            <span className="lbl">Players</span>
          </div>
          <div className="stat-chip">
            <span className="val">{topScore}</span>
            <span className="lbl">Top Score</span>
          </div>
          <div className="stat-chip">
            <span className="val">{averageScore}</span>
            <span className="lbl">Average</span>
          </div>
        </div>
        <ul className="leaderboard-list">{items}</ul>
      </div>
    </div>
  );
}


