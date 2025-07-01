package com.example.externalAPI.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.externalAPI.model.Student;
import com.example.externalAPI.repository.StudentRepository;



@Service
public class DataService 
{
    @Autowired
    StudentRepository studentRepository;


     @Cacheable("hii")
     public Page<Student> getData(int  page,int size,String name)
     {
           try
           {
              Thread.sleep(5000);
           }
           catch(Exception e)
           {

           }
            Pageable pageable = PageRequest.of(page, size);
            return studentRepository.findByNameContainingIgnoreCase(name, pageable);
     }
}
