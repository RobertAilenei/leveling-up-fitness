import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import WorkoutForm from '../WorkoutForm/WorkoutForm';
import WorkoutList from '../WorkoutList/WorkoutList';

function Dashboard() {
  const [workouts, setWorkouts] = useState([
    {
      id: 1,
      name: 'Morning Run',
      type: 'Cardio',
      duration: 30,
      calories: 300,
      date: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      name: 'Strength Training',
      type: 'Strength',
      duration: 45,
      calories: 250,
      date: new Date().toLocaleDateString(),
    },
  ]);

  const [totalCalories, setTotalCalories] = useState(550);

  const addWorkout = (workout) => {
    const newWorkout = {
      id: workouts.length + 1,
      ...workout,
      date: new Date().toLocaleDateString(),
    };
    setWorkouts([...workouts, newWorkout]);
    setTotalCalories(totalCalories + parseInt(workout.calories));
  };

  const deleteWorkout = (id) => {
    const workout = workouts.find(w => w.id === id);
    setWorkouts(workouts.filter(w => w.id !== id));
    setTotalCalories(totalCalories - workout.calories);
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <h3>Total Workouts</h3>
          <p className={styles.statNumber}>{workouts.length}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Total Calories</h3>
          <p className={styles.statNumber}>{totalCalories}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Avg Duration</h3>
          <p className={styles.statNumber}>
            {workouts.length > 0
              ? Math.round(workouts.reduce((sum, w) => sum + w.duration, 0) / workouts.length)
              : 0}
            m
          </p>
        </div>
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.formSection}>
          <WorkoutForm onAddWorkout={addWorkout} />
        </div>
        <div className={styles.listSection}>
          <WorkoutList workouts={workouts} onDeleteWorkout={deleteWorkout} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
