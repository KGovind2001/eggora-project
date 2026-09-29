package com.eggora.controller;
import com.eggora.model.Expense; import com.eggora.repo.ExpenseRepository; import org.springframework.web.bind.annotation.*; import java.util.*;
@RestController @RequestMapping("/api/expenses") @CrossOrigin(origins="http://localhost:5173")
public class ExpenseController {
 private final ExpenseRepository repo; public ExpenseController(ExpenseRepository r){repo=r;}
 @GetMapping public List<Expense> all(){return repo.findAll();}
 @GetMapping("/{id}") public Expense one(@PathVariable Long id){return repo.findById(id).orElseThrow();}
 @PostMapping public Expense create(@RequestBody Expense x){return repo.save(x);}
 @PutMapping("/{id}") public Expense update(@PathVariable Long id,@RequestBody Expense x){x.setId(id);return repo.save(x);}
 @DeleteMapping("/{id}") public void delete(@PathVariable Long id){repo.deleteById(id);}
}