import React from 'react';
import styles from './Header.module.css';

function Header({ onNavigate, currentPage }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>⚔️ Leveling Up Fitness</h1>
        <p className={styles.subtitle}>Your Personal Workout & Calorie Tracker</p>
        <nav className={styles.nav}>
          <button
            className={`${styles.navButton} ${currentPage === 'dashboard' ? styles.active : ''}`}
            onClick={() => onNavigate('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`${styles.navButton} ${currentPage === 'workouts' ? styles.active : ''}`}
            onClick={() => onNavigate('workouts')}
          >
            Workouts
          </button>
          <button
            className={`${styles.navButton} ${currentPage === 'calories' ? styles.active : ''}`}
            onClick={() => onNavigate('calories')}
          >
            Calories
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
