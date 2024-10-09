package com.microservice.tasks.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.microservice.tasks.models.User;
import com.microservice.tasks.repositories.UserRepo;
import com.microservice.tasks.security.JwtService;
import com.microservice.tasks.security.OAuthProvider;
import com.microservice.tasks.utils.GeneratorService;

@Service
public class AuthService {
    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);

    @Autowired
    private UserRepo userRepo;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    private OAuthProvider oauthProvider;

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private GeneratorService userGenService;

    public ResponseEntity<?> login(User user) {
        try {
            String input = user.getEmail() != null && !user.getEmail().isEmpty() ? user.getEmail() : user.getUsername();
            boolean isEmailLogin = input.contains("@");

            // Sanitize input
            String sanitizedInput = input.trim().toLowerCase();

            // Check if user exists
            User existingUser = isEmailLogin ? userRepo.findByEmail(sanitizedInput)
                    : userRepo.findByUsername(sanitizedInput);
            if (existingUser == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }

            // Get the username for authentication
            String username = existingUser.getUsername();
            String password = user.getPassword(); // Assuming password is provided in the user object

            Authentication auth = authManager
                    .authenticate(new UsernamePasswordAuthenticationToken(username, password));
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

    public ResponseEntity<?> googleAuth(String googleToken) {
        try {
            // Send request to Google to retrieve user info
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            String bearer = "Bearer " + googleToken;

            headers.set("Authorization", bearer);
            HttpEntity<String> entity = new HttpEntity<>(headers);

            ResponseEntity<Map> response = restTemplate.exchange(
                    "https://www.googleapis.com/oauth2/v3/userinfo",
                    HttpMethod.GET,
                    entity,
                    Map.class);

            if (response.getStatusCode() == HttpStatus.OK) {
                @SuppressWarnings("unchecked")
                Map<String, Object> userInfo = (Map<String, Object>) response.getBody();
                if (userInfo == null) {
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                            .body("Couldn't retrieve user info. Invalid Google token.");
                }
                String email = (String) userInfo.get("email");
                System.out.println(email);
                String sanitizedEmail = email.trim().toLowerCase();

                // Check if user exists
                User existingUser = userRepo.findByEmail(sanitizedEmail);
                if (existingUser == null) {
                    // Create new user
                    String username = userGenService.generateUsername();
                    String password = userGenService.generatePassword();
                    User newUser = new User(sanitizedEmail, username, passwordEncoder.encode(password));
                    newUser = userRepo.save(newUser);
                    existingUser = newUser;
                }

                try {
                    Authentication auth = oauthProvider
                            .authenticate(new UsernamePasswordAuthenticationToken(existingUser.getUsername(), null,
                                    existingUser.getAuthorities()));
                    SecurityContextHolder.getContext().setAuthentication(auth);

                    String access = jwtService.generateAccessToken(auth);

                    String refresh = jwtService.generateRefreshToken(auth);

                    // Create a map object with the access and refresh tokens
                    Map<String, Object> tokens = new HashMap<>();
                    tokens.put("access_token", access);
                    tokens.put("expires_in", 1800);
                    tokens.put("refresh_token", refresh);

                    return ResponseEntity.ok().body(tokens);
                } catch (Exception e) {
                    logger.error("Error during authentication or token generation", e);
                    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Authentication failed");
                }
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Google token");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Google token");
        }
    }

    public ResponseEntity<?> register(String email, String password) {
        String sanitizedEmail = email.trim().toLowerCase();
        if (userRepo.findByEmail(sanitizedEmail) != null) {
            return ResponseEntity.badRequest().body("Email already exists");
        }
        String generatedUsername = userGenService.generateUsername();
        User user = new User(sanitizedEmail, generatedUsername,
                passwordEncoder.encode(password));
        user = userRepo.save(user);
        return ResponseEntity.ok().body(user);
    }

    public ResponseEntity<?> getUser(String token) {
        String username = jwtService.getUsernameFromToken(token);
        User user = userRepo.findByUsername(username);
        return ResponseEntity.ok().body(user);
    }

    public ResponseEntity<?> validate(String token) {
        String username = jwtService.getUsernameFromToken(token);
        User user = userRepo.findByUsername(username);
        return ResponseEntity.ok().body(user);
    }
}
