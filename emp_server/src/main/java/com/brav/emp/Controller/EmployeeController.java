package com.brav.emp.Controller;

import com.brav.emp.models.Employee;
import com.brav.emp.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping("/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable Long id) {
            Employee employee = employeeService.getEmployeeById(id);

        if (employee != null) {
            return ResponseEntity.ok(employee);
        } else {
            return ResponseEntity.notFound().build();
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    @PostMapping("/add")
    public Employee addEmployee(@RequestBody Employee employee){
        Employee newEmployee = employeeService.addNewEmployee(employee);
        return newEmployee;
    }
    @PutMapping("/edit/{id}")
    Employee updateEmployee( @RequestBody Employee employee){
        Employee updatedEmployee = employeeService.updateEmployee(employee);
        return updatedEmployee;
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id){
        try{
            employeeService.deleteEmployee(id);
            return ResponseEntity.ok().build();
        }catch (EmployeeService.RecordNotFoundException ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }
}
