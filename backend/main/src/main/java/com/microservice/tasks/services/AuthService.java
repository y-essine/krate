package com.microservice.tasks.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.microservice.tasks.models.User;
import com.microservice.tasks.repositories.UserRepo;
import com.microservice.tasks.security.JwtService;

@Service
public class AuthService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private JwtService jwtService;

    public ResponseEntity<?> login(String username, String password) {
        try {
            String lowerCaseUsername = username.toLowerCase();
            Authentication auth = authManager.authenticate(new UsernamePasswordAuthenticationToken(lowerCaseUsername, password));
            String access = jwtService.generateAccessToken(auth);
            String refresh = jwtService.generateRefreshToken(auth);
            // create a map object with the access and refresh tokens
            Map<String, Object> tokens = new HashMap<>();
            // map where the key is string and the value is string or int
            tokens.put("access_token", access);
            tokens.put("expires_in", 1800);
            tokens.put("refresh_token", refresh);
            return ResponseEntity.ok().body(tokens);
        } catch (AuthenticationException e) {
            return ResponseEntity.badRequest().body("Invalid username/password");
        }
    }

    public ResponseEntity<?> register(String username, String password) {
        String lowerCaseUsername = username.toLowerCase(); 
        if (userRepo.findByUsername(lowerCaseUsername) != null) {
            return ResponseEntity.badRequest().body("Username already exists");
        }
        User user = new User(lowerCaseUsername, passwordEncoder.encode(password));
        user = userRepo.save(user);
        return ResponseEntity.ok().body(user);
    }

    public ResponseEntity<?> getUser(String token) {
        String username = jwtService.getUsernameFromToken(token);
        User user = userRepo.findByUsername(username);
        return ResponseEntity.ok().body(user);
    }
}
