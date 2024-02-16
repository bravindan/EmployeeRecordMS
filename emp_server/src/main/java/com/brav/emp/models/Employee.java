package com.brav.emp.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    @Column(unique = true)
    private  String employeeNo;
    private String dob;
    private String startDate;
    private String endDate;
    private String department;
    private String cadre;
    @Column(unique = true)
    private String email;
    @Column(unique = true)
    private String phoneNumber;
    private Boolean active;
    private String salary;

}
