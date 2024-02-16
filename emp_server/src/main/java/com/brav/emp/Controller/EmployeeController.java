package com.brav.emp.Controller;

import com.brav.emp.models.Employee;
import com.brav.emp.service.EmployeeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployeeController {

    private EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }
    @GetMapping("/")
    public List getEmployees(){
        List<Employee> allEmployees = employeeService.getAllEmployees();
        return allEmployees;

    }
    @PostMapping("/add")
    public Employee addEmployee(@RequestBody Employee employee){
        Employee newEmployee = employeeService.addNewEmployee(employee);
        return newEmployee;
    }
}
