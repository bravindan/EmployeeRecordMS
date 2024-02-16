package com.brav.emp.service;

import com.brav.emp.models.Employee;
import com.brav.emp.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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
        return employeeRepository.save(newEmployee);
    }
}
