package com.eggora.model;
import jakarta.persistence.*; import lombok.*;
@Entity @Table(name="suppliers")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Supplier {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) Long id;
 @Column(nullable=false) String name;
 String phone; String email; String address; String gstNumber;
}