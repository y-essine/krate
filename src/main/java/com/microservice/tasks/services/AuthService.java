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

    public ResponseEntity<?> login(String username, String password ){
        try {
            Authentication auth = authManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
            String access = jwtService.generateAccessToken(auth);
            String refresh = jwtService.generateRefreshToken(auth);
            // create a map object with the access and refresh tokens
            Map<String, String> tokens = new HashMap<>();
            tokens.put("access_token", access);
            tokens.put("refresh_token", refresh);
            return ResponseEntity.ok().body(tokens);
        } catch (AuthenticationException e) {
            return ResponseEntity.badRequest().body("Invalid username/password");
        }
    }
    
    public ResponseEntity<?> register(String username, String password) {
        if (userRepo.findByUsername(username) != null) {
            return ResponseEntity.badRequest().body("Username already exists");
        }
        User user = new User(username, passwordEncoder.encode(password));
        userRepo.save(user);
        return ResponseEntity.ok().body("User created");
    }
}
