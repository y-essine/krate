package com.microservice.tasks.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.tasks.models.User;
import com.microservice.tasks.services.AuthService;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    @ResponseStatus
    public ResponseEntity<?> login(@RequestBody User user) {
        return authService.login(user.getUsername(), user.getPassword());
    }

    @PostMapping("/register")
    @ResponseStatus
    public ResponseEntity<?> register(@RequestBody User user) {
        return authService.register(user.getUsername(), user.getPassword());
    }
}
