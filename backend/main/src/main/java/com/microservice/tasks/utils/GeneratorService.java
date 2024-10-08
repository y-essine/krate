package com.microservice.tasks.utils;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class GeneratorService {
    private static final List<String> ADJECTIVES = Arrays.asList(
            "quirky", "fluffy", "brave", "happy", "sleepy", "mysterious", "silent", "fuzzy", "wild", "electric",
            "dizzy", "silly", "dummy", "funny", "crazy", "sneaky", "sunny", "breezy", "dopey", "grumpy", "jumpy",
            "lucky", "noisy", "rowdy", "sassy", "zany");

    private static final List<String> NOUNS = Arrays.asList(
            "otter", "cupcake", "cloud", "phoenix", "unicorn", "panda", "dragon", "pigeon", "robot", "rainbow",
            "cookie", "ninja", "pirate", "alien", "dinosaur", "monster", "vampire", "zombie", "werewolf", "ghost",
            "mermaid", "fairy", "wizard", "sorcerer", "witch");

    private final Random random = new Random();

    public String generateUsername() {
        String adjective = ADJECTIVES.get(random.nextInt(ADJECTIVES.size()));
        String noun = NOUNS.get(random.nextInt(NOUNS.size()));
        return adjective + "-" + noun + random.nextInt(100); // Adding a random number for uniqueness
    }

    public String generatePassword() {
        // generate a random password of length 10
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
        StringBuilder password = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            password.append(chars.charAt(random.nextInt(chars.length())));
        }
        return password.toString();
    }
}
