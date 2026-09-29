package com.eggora;

import org.springframework.boot.CommandLineRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AdminPasswordReset implements CommandLineRunner {

    private final JdbcTemplate jdbcTemplate;

    public AdminPasswordReset(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void run(String... args) {

        String passwordHash =
                new BCryptPasswordEncoder().encode("admin");

        int updated = jdbcTemplate.update(
                "UPDATE users SET password = ?, role = 'ADMIN', active = 1 WHERE id = 1",
                passwordHash
        );

        System.out.println();
        System.out.println("========================================");
        System.out.println(" ADMIN PASSWORD RESET");
        System.out.println(" Username: admin");
        System.out.println(" Password: admin");
        System.out.println(" Rows updated: " + updated);
        System.out.println("========================================");
        System.out.println();
    }
}