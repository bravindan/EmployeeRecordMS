package com.brav.emp.service;

import com.brav.emp.models.Employee;
import com.brav.emp.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class EmployeeService  {
    @Autowired
  private   EmployeeRepository employeeRepository;
    public List<Employee> getAllEmployees(){
        List<Employee> allEmployees = employeeRepository.findAll();
//        if (allEmployees.isEmpty()) return "No records found";
        return allEmployees;
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
}
