package com.eggora.controller;
import com.eggora.model.Supplier; import com.eggora.repo.SupplierRepository; import org.springframework.web.bind.annotation.*; import java.util.*;
@RestController @RequestMapping("/api/suppliers") @CrossOrigin(origins="http://localhost:5173")
public class SupplierController {
 private final SupplierRepository repo; public SupplierController(SupplierRepository r){repo=r;}
 @GetMapping public List<Supplier> all(){return repo.findAll();}
 @GetMapping("/{id}") public Supplier one(@PathVariable Long id){return repo.findById(id).orElseThrow();}
 @PostMapping public Supplier create(@RequestBody Supplier x){return repo.save(x);}
 @PutMapping("/{id}") public Supplier update(@PathVariable Long id,@RequestBody Supplier x){x.setId(id);return repo.save(x);}
 @DeleteMapping("/{id}") public void delete(@PathVariable Long id){repo.deleteById(id);}
}