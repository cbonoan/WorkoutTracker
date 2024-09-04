package com.example.workout_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.workout_tracker.model.ExerciseSet;

public interface ExerciseSetRepository extends JpaRepository<ExerciseSet, Long> {
    
}
