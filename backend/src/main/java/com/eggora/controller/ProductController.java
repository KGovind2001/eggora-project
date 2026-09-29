package com.eggora.controller;
import com.eggora.model.Product; import com.eggora.repo.ProductRepository; import org.springframework.web.bind.annotation.*; import java.util.*;
@RestController @RequestMapping("/api/products") @CrossOrigin(origins="http://localhost:5173")
public class ProductController {
 private final ProductRepository repo; public ProductController(ProductRepository r){repo=r;}
 @GetMapping public List<Product> all(){return repo.findAll();}
 @GetMapping("/{id}") public Product one(@PathVariable Long id){return repo.findById(id).orElseThrow();}
 @PostMapping public Product create(@RequestBody Product x){return repo.save(x);}
 @PutMapping("/{id}") public Product update(@PathVariable Long id,@RequestBody Product x){x.setId(id);return repo.save(x);}
 @DeleteMapping("/{id}") public void delete(@PathVariable Long id){repo.deleteById(id);}
}