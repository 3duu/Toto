package br.com.duti.petlife;

import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication(scanBasePackages= 
{		"br.com.duti.petlife.config",
		"br.com.duti.petlife.controller",
		"br.com.duti.petlife.repository"})
public class Application extends SpringBootServletInitializer implements ApplicationRunner  {
	
	private static final Logger logger = LoggerFactory.getLogger(Application.class);
	
	public static String HOST = "localhost";
	public static String PORT = "9003";
	
    public static void main(String[] args) {
    	if(args.length > 0){
    		HOST = args[0];
    	}
    	if(args.length > 1){
    		PORT = args[1];
    	} 
        SpringApplication.run(Application.class, args);
    }
    
    @Override
    public void run(ApplicationArguments args) throws Exception {
        logger.info("Application started with command-line arguments: {}", Arrays.toString(args.getSourceArgs()));
        /*logger.info("NonOptionArgs: {}", args.getNonOptionArgs());
        logger.info("OptionNames: {}", args.getOptionNames());

        for (String name : args.getOptionNames()){
            logger.info("arg-" + name + "=" + args.getOptionValues(name));
        }*/

        //boolean containsOption = args.containsOption("person.name");
        //logger.info("Contains person.name: " + containsOption);
    }
}
