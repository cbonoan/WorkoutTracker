package com.example.workout_tracker.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {
    // @Autowired
    // private UserService userService;

    // @PostMapping
    // public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
    //     UserDTO createdUser = userService.createUser(userDTO);
    //     return ResponseEntity.ok(createdUser);
    // }

    // @GetMapping
    // public ResponseEntity<List<UserDTO>> getAllUsers() {
    //     List<UserDTO> users = userService.getAllUsers();
    //     return ResponseEntity.ok(users);
    // }
}
