package com.eggora.model;
import jakarta.persistence.*; import lombok.*; import java.math.BigDecimal; import java.time.LocalDate;
@Entity @Table(name="expenses")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Expense {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) Long id;
 String category; String description; BigDecimal amount; LocalDate expenseDate;
}