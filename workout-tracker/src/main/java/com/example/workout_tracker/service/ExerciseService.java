package com.example.workout_tracker.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.workout_tracker.repository.ExerciseRepository;

@Service
public class ExerciseService {
    @Autowired
    private ExerciseRepository exerciseRepository;

    public void createExercise(String name, String bodyPart) {

    }
}
