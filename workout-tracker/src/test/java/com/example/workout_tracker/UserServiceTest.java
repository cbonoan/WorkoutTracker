package com.example.workout_tracker;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.workout_tracker.dto.UserDTO;
import com.example.workout_tracker.model.User;
import com.example.workout_tracker.repository.UserRepository;
import com.example.workout_tracker.service.UserService;

@SpringBootTest
public class UserServiceTest {
    @Mock
    private UserRepository userRepository;
    @InjectMocks
    private UserService userService;

    @Test
    public void createUserTest() {
        String name = "John Doe";
        String email = "johndoe@example.com";
        String password = "password123";

        User mockUser = new User(name, email, password);

        when(userRepository.save(any(User.class))).thenReturn(mockUser);

        UserDTO createdUser;
        try {
            createdUser = userService.createUser(name, email, password);
            assertEquals(name, createdUser.getName());
            assertEquals(email, createdUser.getEmail());
            assertEquals(password, createdUser.getPassword());
            assertThat(createdUser.getWorkouts()).isEmpty();
        } catch (Exception e) {
            e.printStackTrace();
        }

        // verify save method in user repository was called exactly once
        verify(userRepository).save(any(User.class));
    }

    @Test
    public void getAllUsersTest() {
        User user1 = new User("John Doe", "johndoe@example.com", "password123");
        User user2 = new User("Jane Doe", "johndoe@example.com", "password321");
    
        when(userRepository.findAll()).thenReturn(List.of(user1, user2));

        List<UserDTO> users = userService.getAllUsers();

        assertThat(users).isNotNull();
        assertEquals(users.size(), 2);
        assertEquals(users.get(0).getName(), "John Doe");
        assertEquals(users.get(1).getName(), "Jane Doe");

        verify(userRepository).findAll();
    }

    @Test
    public void getUserByEmailAndPasswordTest() {
        String email = "johndoe@example.com";
        String password = "password123";
        User user = new User("John Doe", email, password);

        when(userRepository.findByEmailAndPassword(email, password)).thenReturn(user);

        UserDTO foundUser;
        try {
            foundUser = userService.getUserByEmailAndPassword(email, password);
            assertEquals(foundUser.getName(), user.getName());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void incorrectEmailOrPasswordTest() {
        String email = "johndoe@example.com";
        String password = "password123";

        when(userRepository.findByEmailAndPassword(email, password)).thenReturn(null);

        assertThrows(Exception.class, () -> {
            userService.getUserByEmailAndPassword(email, password);
        });
    }
}
