package com.eggora.model;
import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
@Entity @Table(name="products")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Product {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) Long id;
 @Column(nullable=false) String name;
 String sku;
 String category;
 @Builder.Default int stock=0;
 @Builder.Default BigDecimal purchasePrice=BigDecimal.ZERO;
 @Builder.Default BigDecimal sellingPrice=BigDecimal.ZERO;
 @Builder.Default int minimumStock=0;
 @Builder.Default boolean active=true;
}