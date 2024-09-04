package com.example.workout_tracker.service;

import org.springframework.stereotype.Service;

@Service
public class UserService {
    // @Autowired
    // private UserRepository userRepository;

    // public UserDTO createUser(UserDTO userDTO) {
    //     User user = new User(userDTO.getName(), userDTO.getEmail());
    //     User savedUser = userRepository.save(user);
    //     return new UserDTO(savedUser.getId(), savedUser.getName(), savedUser.getEmail());
    // }

    // public List<UserDTO> getAllUsers() {
    //     return userRepository.findAll().stream()
    //         .map(user -> new UserDTO(user.getId(), user.getName(), user.getEmail()))
    //         .collect(Collectors.toList());
    // }
}
