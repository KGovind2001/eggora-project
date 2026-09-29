package com.eggora.controller;
import com.eggora.model.Customer; import com.eggora.repo.CustomerRepository; import org.springframework.web.bind.annotation.*; import java.util.*;
@RestController @RequestMapping("/api/customers") @CrossOrigin(origins="http://localhost:5173")
public class CustomerController {
 private final CustomerRepository repo; public CustomerController(CustomerRepository r){repo=r;}
 @GetMapping public List<Customer> all(){return repo.findAll();}
 @GetMapping("/{id}") public Customer one(@PathVariable Long id){return repo.findById(id).orElseThrow();}
 @PostMapping public Customer create(@RequestBody Customer x){return repo.save(x);}
 @PutMapping("/{id}") public Customer update(@PathVariable Long id,@RequestBody Customer x){x.setId(id);return repo.save(x);}
 @DeleteMapping("/{id}") public void delete(@PathVariable Long id){repo.deleteById(id);}
}