package com.spring.employee.list.repository;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.spring.employee.list.model.Employee;



@Repository
	public interface EmployeeRepository extends MongoRepository<Employee,Long> {

		Optional<Employee> findByUserName(String userName);	


	}


