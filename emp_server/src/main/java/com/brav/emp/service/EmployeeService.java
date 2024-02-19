package com.brav.emp.service;

import com.brav.emp.models.Employee;
import com.brav.emp.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService  {
    @Autowired
  private   EmployeeRepository employeeRepository;
    public List<Employee> getAllEmployees(){
        List<Employee> allEmployees = employeeRepository.findAll();
//        if (allEmployees.isEmpty()) return "No records found";
        return allEmployees;
    }

    public Employee getEmployeeById(Long id){
        return employeeRepository.findById(id).orElse(null);
    }

    public Employee addNewEmployee(Employee newEmployee) {
        // Check if the newEmployee object is null
        if (newEmployee == null) {
            throw new IllegalArgumentException("Employee object cannot be null");
        }
        // Check if any required field is null or empty
        if (!isValidEmployee(newEmployee)) {
            throw new IllegalArgumentException("Employee data is incomplete");
        }
        return employeeRepository.save(newEmployee);
    }
    public Employee updateEmployee(  Employee employee){
        Long id = employee.getId();
        return employeeRepository.findById(id).map(emp ->{
            if (employee == null) {
                throw new IllegalArgumentException("Employee object cannot be null");
            }
            // Check if any required field is null or empty
            if (!isValidEmployee(employee)) {
                throw new IllegalArgumentException("Employee data is incomplete");
            }
            return employeeRepository.save(employee);
        } ).orElse(null);
    }

    public void deleteEmployee(Long id){
        if(!employeeRepository.existsById(id)) throw new RecordNotFoundException("The record with id " + id + " not found");
        employeeRepository.deleteById(id);
    }

    private boolean isValidEmployee(Employee employee) {
        return !StringUtils.isEmpty(employee.getFirstName()) &&
                !StringUtils.isEmpty(employee.getLastName()) &&
                !StringUtils.isEmpty(employee.getEmployeeNo()) &&
                !StringUtils.isEmpty(employee.getEmail()) &&
                !StringUtils.isEmpty(employee.getDob())&&
                !StringUtils.isEmpty(employee.getCadre())&&
                !StringUtils.isEmpty(employee.getDepartment())&&
                !StringUtils.isEmpty(employee.getStartDate())&&
                !StringUtils.isEmpty(employee.getEndDate())&&
                !StringUtils.isEmpty(employee.getActive());
        // Add more conditions for other required fields if necessary
    }

    public class RecordNotFoundException extends RuntimeException {
        public RecordNotFoundException(String message) {
            super(message);
        }
    }


}
