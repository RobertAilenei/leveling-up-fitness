import React, { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className={styles.app}>
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className={styles.mainContent}>
        <div className={styles.container}>
          {currentPage === 'dashboard' && <Dashboard />}
        </div>
      </main>
    </div>
  );
}

export default App;
