package com.brav.emp.Controller;

import com.brav.emp.models.Employee;
import com.brav.emp.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1.0/employees")
public class EmployeeController {
    private final EmployeeService employeeService;
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }
    @GetMapping("")
    public List<Employee> getEmployees(){
        return employeeService.getAllEmployees();
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
    @PostMapping("")
    public Employee addEmployee(@RequestBody Employee employee){
        return employeeService.addNewEmployee(employee);
    }
    @PatchMapping("/{id}")
    Employee updateEmployee( @RequestBody Employee employee){
        return employeeService.updateEmployee(employee);
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
