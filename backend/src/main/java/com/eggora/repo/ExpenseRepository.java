package com.eggora.repo;
import com.eggora.model.Expense; import org.springframework.data.jpa.repository.JpaRepository;
public interface ExpenseRepository extends JpaRepository<Expense,Long>{ }