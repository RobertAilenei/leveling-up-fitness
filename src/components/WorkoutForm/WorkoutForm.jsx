import React, { useState } from 'react';
import styles from './WorkoutForm.module.css';

function WorkoutForm({ onAddWorkout }) {
  const [formData, setFormData] = useState({
    name: '',
    type: 'Cardio',
    duration: '',
    calories: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.duration && formData.calories) {
      onAddWorkout(formData);
      setFormData({
        name: '',
        type: 'Cardio',
        duration: '',
        calories: '',
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Add Workout</h2>

      <div className={styles.formGroup}>
        <label htmlFor="name">Workout Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          placeholder="e.g., Morning Run"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="type">Type</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="Cardio">Cardio</option>
          <option value="Strength">Strength</option>
          <option value="Flexibility">Flexibility</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="duration">Duration (mins)</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className={styles.input}
            placeholder="30"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="calories">Calories Burned</label>
          <input
            type="number"
            id="calories"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
            className={styles.input}
            placeholder="300"
          />
        </div>
      </div>

      <button type="submit" className={styles.submitButton}>
        Add Workout
      </button>
    </form>
  );
}

export default WorkoutForm;
