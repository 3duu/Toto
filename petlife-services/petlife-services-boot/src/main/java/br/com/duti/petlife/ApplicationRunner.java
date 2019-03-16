package br.com.duti.petlife;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages= 
{		"br.com.duti.petlife.config",
		"br.com.duti.petlife.controller",
		"br.com.duti.petlife.repository"})
public class ApplicationRunner {

    public static void main(String[] args) {
        SpringApplication.run(ApplicationRunner.class, args);
    }
}
