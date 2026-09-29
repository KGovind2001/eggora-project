package com.eggora.model;
import jakarta.persistence.*; import lombok.*;
@Entity @Table(name="customers")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Customer {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) Long id;
 @Column(nullable=false) String name;
 String phone; String email; String address; String gstNumber;
}