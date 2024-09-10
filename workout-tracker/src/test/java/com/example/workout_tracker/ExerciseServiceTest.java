package com.example.workout_tracker;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.workout_tracker.repository.ExerciseRepository;
import com.example.workout_tracker.service.ExerciseService;

@SpringBootTest
public class ExerciseServiceTest {
    @Mock
    private ExerciseRepository exerciseRepository;
    @InjectMocks
    private ExerciseService exerciseService;
}
