package com.example.workout_tracker.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.workout_tracker.model.Exercise;

public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
    List<Exercise> findByUserId(Long userId);
}
