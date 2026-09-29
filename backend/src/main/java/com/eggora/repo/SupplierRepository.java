package com.eggora.repo;
import com.eggora.model.Supplier; import org.springframework.data.jpa.repository.JpaRepository;
public interface SupplierRepository extends JpaRepository<Supplier,Long>{ }