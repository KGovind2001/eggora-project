package com.eggora.config;

import com.eggora.model.User;
import com.eggora.repo.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  public UserDetailsService userDetailsService(UserRepository userRepository) {
    return username -> {
      User user = userRepository.findByUsername(username)
              .orElseThrow(() ->
                      new UsernameNotFoundException("User not found: " + username));

      if (!user.isActive()) {
        throw new UsernameNotFoundException("User account is inactive");
      }

      return org.springframework.security.core.userdetails.User
              .withUsername(user.getUsername())
              .password(user.getPassword())
              .roles(user.getRole())
              .build();
    };
  }

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

    http
            .csrf(csrf -> csrf.disable())
            .cors(cors -> {})
            .sessionManagement(session ->
                    session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .authorizeHttpRequests(auth ->
                    auth
                            .requestMatchers("/api/auth/**", "/api/public/**")
                            .permitAll()
                            .anyRequest()
                            .permitAll()
            );

    return http.build();
  }
}