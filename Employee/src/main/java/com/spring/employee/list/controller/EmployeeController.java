package com.spring.employee.list.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.employee.list.custom.exception.ResourceNotFoundException;
import com.spring.employee.list.model.Employee;
import com.spring.employee.list.repository.EmployeeRepository;
import com.spring.employee.list.service.SequenceGeneratorService;


@CrossOrigin(origins="http://localhost:3000/")
@RequestMapping("/api/v1")
@RestController

	public class EmployeeController {
		
		@Autowired
		private EmployeeRepository employeeRepository;
		
		 @Autowired
		   private SequenceGeneratorService sequenceGeneratorService;

		
		 @GetMapping("/employees")
	     public List<Employee> getAllEmployees(){
	    	 return employeeRepository.findAll();
	     }
		 
		 @PostMapping("/employees")
         public Employee createEmployee(@Valid @RequestBody Employee employee) {
         employee.setId(sequenceGeneratorService.generateSequence(Employee.SEQUENCE_NAME));
       return employeeRepository.save(employee);
     }
	 
		 
		
		 @GetMapping("/employees/{id}")
	     public ResponseEntity<Employee> getEmployeebyId(@PathVariable(value="id") Long employeeId )
	    		 throws ResourceNotFoundException {
			 Employee employee = employeeRepository.findById(employeeId).orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
			        return ResponseEntity.ok().body(employee);}
			    
		 
		 //search
		 @GetMapping("/employees/findbyid/{id}")
	     public ResponseEntity<Employee> searchEmployeeId(@PathVariable(value="id") Long employeeId )
	    		 throws ResourceNotFoundException {
			 Employee employee = employeeRepository.findById(employeeId).orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
			        return ResponseEntity.ok().body(employee);
			    }
		 
	     
	     @PutMapping("/employees/{id}")
	     public ResponseEntity < Employee > updateEmployee(@PathVariable(value = "id") Long employeeId,
	    	        @Valid @RequestBody Employee employeeDetails) throws ResourceNotFoundException {
	    	        Employee employee = employeeRepository.findById(employeeId).orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));

	    	        employee.setUserName(employeeDetails.getUserName());	     
	    	        employee.setFirstName(employeeDetails.getFirstName());
	    	        employee.setLastName(employeeDetails.getLastName());
	    	        employee.setEmailId(employeeDetails.getEmailId());
	    	        employee.setMobileNumber(employeeDetails.getMobileNumber());
	    	        employee.setDateOfBirth(employeeDetails.getDateOfBirth());
	    	        employee.setLocation(employeeDetails.getLocation());
	    	        employee.setDepartment(employeeDetails.getDepartment());
	    	        employee.setJobTitle(employeeDetails.getJobTitle());
	    	        final Employee updatedEmployee = employeeRepository.save(employee);
	    	        return ResponseEntity.ok(updatedEmployee);
	    	    }
	     
	     @GetMapping("/employees/findbyname/{userName}")
	     public ResponseEntity<Employee> searchEmployeeUserName(@PathVariable String userName )
	    		 throws ResourceNotFoundException {
			 Employee employee = employeeRepository.findByUserName(userName).orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + userName));
			        return ResponseEntity.ok().body(employee);
			    }
	     
	     @DeleteMapping("/employees/{id}")
	     public Map < String, Boolean > deleteEmployee(@PathVariable(value = "id") Long employeeId)
	     throws ResourceNotFoundException {
	         Employee employee = employeeRepository.findById(employeeId) .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));

	         employeeRepository.delete(employee);
	         Map < String, Boolean > response = new HashMap < > ();
	         response.put("deleted", Boolean.TRUE);
	         return response;
	     }
	     
	     @DeleteMapping("/{id}")
		    public String deleteEmployee() {
		    	 return "You have no access to delete the data";
	
	     }
	    
}
