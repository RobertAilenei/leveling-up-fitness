import React from 'react';
import styles from './WorkoutList.module.css';

function WorkoutList({ workouts, onDeleteWorkout }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent Workouts</h2>
      {workouts.length === 0 ? (
        <p className={styles.empty}>No workouts yet. Add one to start leveling up!</p>
      ) : (
        <div className={styles.list}>
          {workouts.map(workout => (
            <div key={workout.id} className={styles.workoutItem}>
              <div className={styles.workoutHeader}>
                <h3 className={styles.workoutName}>{workout.name}</h3>
                <span className={styles.workoutType}>{workout.type}</span>
              </div>
              <div className={styles.workoutDetails}>
                <div className={styles.detail}>
                  <span className={styles.label}>Duration:</span>
                  <span className={styles.value}>{workout.duration}m</span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.label}>Calories:</span>
                  <span className={styles.value}>{workout.calories}</span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.label}>Date:</span>
                  <span className={styles.value}>{workout.date}</span>
                </div>
              </div>
              <button
                className={styles.deleteBtn}
                onClick={() => onDeleteWorkout(workout.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WorkoutList;
