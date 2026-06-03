import Link from 'next/link';
import styles from './page.module.css';

const TEAMS = [
  'Argentina', 'Brazil', 'France', 'Germany', 
  'England', 'Portugal', 'Spain', 'Netherlands', 
  'Morocco', 'Croatia'
];

export default function Teams() {
  return (
    <div className="container">
      <h1 style={{ marginTop: '3rem', textAlign: 'center', color: 'var(--accent)', fontSize: '2.5rem' }}>
        Shop by Team
      </h1>
      <div className={styles.teamsGrid}>
        {TEAMS.map(team => (
          <Link href={`/teams/${team.toLowerCase()}`} key={team} className={styles.teamCard}>
            <div className={styles.flagPlaceholder}></div>
            <h2 className={styles.teamName}>{team}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
