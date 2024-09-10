package com.microservice.tasks.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.tasks.models.Role;

public interface RoleRepo extends JpaRepository<Role, Long>{
    
}
