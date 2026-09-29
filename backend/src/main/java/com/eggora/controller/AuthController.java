package com.eggora.controller;

import com.eggora.model.User;
import com.eggora.repo.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

 private final UserRepository userRepository;
 private final PasswordEncoder passwordEncoder;

 public AuthController(
         UserRepository userRepository,
         PasswordEncoder passwordEncoder
 ) {
  this.userRepository = userRepository;
  this.passwordEncoder = passwordEncoder;
 }

 @PostMapping("/login")
 public ResponseEntity<?> login(@RequestBody LoginRequest request) {

  if (request == null ||
          request.username() == null ||
          request.password() == null ||
          request.username().isBlank() ||
          request.password().isBlank()) {

   return ResponseEntity
           .status(HttpStatus.BAD_REQUEST)
           .body(Map.of(
                   "message", "Username and password are required."
           ));
  }

  User user = userRepository
          .findByUsername(request.username().trim())
          .orElse(null);

  if (user == null) {
   return ResponseEntity
           .status(HttpStatus.UNAUTHORIZED)
           .body(Map.of(
                   "message", "Invalid credentials"
           ));
  }

  if (!user.isActive()) {
   return ResponseEntity
           .status(HttpStatus.UNAUTHORIZED)
           .body(Map.of(
                   "message", "User account is inactive"
           ));
  }

  if (!passwordEncoder.matches(
          request.password(),
          user.getPassword()
  )) {
   return ResponseEntity
           .status(HttpStatus.UNAUTHORIZED)
           .body(Map.of(
                   "message", "Invalid credentials"
           ));
  }

  /*
   * Temporary development token.
   * JWT authentication can be added after the basic login flow
   * is confirmed working.
   */
  String token = UUID.randomUUID().toString();

  Map<String, Object> result = Map.of(
          "token", token,
          "username", user.getUsername(),
          "role", user.getRole()
  );

  return ResponseEntity.ok(
          Map.of("data", result)
  );
 }

 public record LoginRequest(
         String username,
         String password
 ) {
 }
}