package com.eggora.controller;
import com.eggora.repo.*; import org.springframework.web.bind.annotation.*; import java.util.*;
@RestController @RequestMapping("/api/dashboard") @CrossOrigin(origins="http://localhost:5173")
public class DashboardController {
 private final ProductRepository products; private final CustomerRepository customers; private final SupplierRepository suppliers; private final ExpenseRepository expenses;
 public DashboardController(ProductRepository p,CustomerRepository c,SupplierRepository s,ExpenseRepository e){products=p;customers=c;suppliers=s;expenses=e;}
 @GetMapping public Map<String,Object> dashboard(){return Map.of("products",products.count(),"customers",customers.count(),"suppliers",suppliers.count(),"expenses",expenses.count());}
}