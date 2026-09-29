package com.eggora.repo;
import com.eggora.model.Customer; import org.springframework.data.jpa.repository.JpaRepository;
public interface CustomerRepository extends JpaRepository<Customer,Long>{ }