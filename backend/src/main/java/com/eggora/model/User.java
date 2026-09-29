package com.eggora.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 @Column(nullable = false, unique = true)
 private String username;

 @Column(nullable = false, unique = true)
 private String email;

 @Column(nullable = false)
 private String password;

 @Builder.Default
 private String role = "ADMIN";

 @Builder.Default
 private boolean active = true;
}