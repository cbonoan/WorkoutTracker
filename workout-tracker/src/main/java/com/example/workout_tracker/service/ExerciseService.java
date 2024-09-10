package com.example.workout_tracker.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.workout_tracker.dto.ExerciseDTO;
import com.example.workout_tracker.model.Exercise;
import com.example.workout_tracker.model.User;
import com.example.workout_tracker.repository.ExerciseRepository;
import com.example.workout_tracker.repository.UserRepository;

@Service
public class ExerciseService {
    @Autowired
    private ExerciseRepository exerciseRepository;

    @Autowired
    private UserRepository userRepository;

    public List<ExerciseDTO> getDefaultExercises() {
        List<Exercise> exercises = exerciseRepository.findByUserId(Long.valueOf(-1));

        List<ExerciseDTO> exerciseDTOs = new ArrayList<>();
        for (Exercise exercise : exercises) {
            ExerciseDTO exerciseDTO = new ExerciseDTO(exercise);
            exerciseDTOs.add(exerciseDTO);
        }

        return exerciseDTOs;
    }

    public ExerciseDTO createExercise(Long userId, String name, String bodyPart) throws Exception {
        Optional<User> user = userRepository.findById(userId);
        
        if (!user.isPresent()) {
            throw new Exception("User not found, cannot save exercise");
        }

        Exercise newExercise = new Exercise();
        newExercise.setBodypart(bodyPart);
        newExercise.setName(name);
        newExercise.setUser(user.get());

        Exercise savedExercise = exerciseRepository.save(newExercise);
        return new ExerciseDTO(savedExercise);
    }
}
