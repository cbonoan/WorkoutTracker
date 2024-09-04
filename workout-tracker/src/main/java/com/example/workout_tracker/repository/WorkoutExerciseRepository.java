package com.example.workout_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.workout_tracker.model.WorkoutExercise;

public interface WorkoutExerciseRepository extends JpaRepository<WorkoutExercise, Long> {
    
}
