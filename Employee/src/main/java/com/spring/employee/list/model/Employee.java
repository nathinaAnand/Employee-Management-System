package com.spring.employee.list.model;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection= "Employee")

public class Employee {
	
	@Transient
	public static final String SEQUENCE_NAME ="users_sequence";
	
			@Id
		
			private long id;
			
			@NotBlank
			@Size(max=100)
			@Indexed(unique = true)
			private String userName;
			private String firstName;
			private String lastName;
			
			@NotBlank
			@Size(max=13)
			@Indexed(unique = true)
			private String mobileNumber;
			
			@NotBlank
			@Size(max=100)
			@Indexed(unique = true)
			private String emailId;
			
			@NotBlank
			@Size(max=10)
			@Indexed(unique = true)
			private String dateOfBirth;
			
			@NotBlank
			@Size(max=100)
			@Indexed(unique = true)
			private String location;
			private String department;
			private String jobTitle;
		   
			 public Employee() {

			    }
			
			public Employee(String userName, String firstName, String lastName, String mobileNumber, String emailId,
					String dateOfBirth, String location, String department, String jobTitle) {
				super();
				
				this.userName = userName;
				this.firstName = firstName;
				this.lastName = lastName;
				this.mobileNumber = mobileNumber;
				this.emailId = emailId;
				this.dateOfBirth =dateOfBirth;
				this.location = location;
				this.department = department;
				this.jobTitle = jobTitle;
				
			}
			public long getId() {
				return id;
			}
			public void setId(long id) {
				this.id = id;
			}
			public String getUserName() {
				return userName;
			}
			public void setUserName(String userName) {
				this.userName = userName;
			}
			public String getFirstName() {
				return firstName;
			}
			public void setFirstName(String firstName) {
				this.firstName = firstName;
			}
			public String getLastName() {
				return lastName;
			}
			public void setLastName(String lastName) {
				this.lastName = lastName;
			}
			public String getMobileNumber() {
				return mobileNumber;
			}
			public void setMobileNumber(String mobileNumber) {
				this.mobileNumber = mobileNumber;
			}
			public String getEmailId() {
				return emailId;
			}
			public void setEmailId(String emailId) {
				this.emailId = emailId;
			}
			
			
			public String getDateOfBirth() {
				return dateOfBirth;
			}
			public void setDateOfBirth(String dateOfBirth) {
				this.dateOfBirth = dateOfBirth;
			}
			public String getLocation() {
				return location;
			}
			public void setLocation(String location) {
				this.location = location;
			}
			public String getDepartment() {
				return department;
			}
			public void setDepartment(String department) {
				this.department = department;
			}
			public String getJobTitle() {
				return jobTitle;
			}
			public void setJobTitle(String jobTitle) {
				this.jobTitle = jobTitle;
			}
			@Override
			public String toString() {
				return "Employee [id=" + id + ", userName=" + userName + ", firstName=" + firstName + ", lastName="
						+ lastName + ", mobileNumber=" + mobileNumber + ", emailId=" + emailId + ", dateOfBirth="
						+ dateOfBirth + ", location=" + location + ", department=" + department + ", jobTitle="
						+ jobTitle + "]";
			}
			
			

}
