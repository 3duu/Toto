package br.com.duti.petlife.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityJavaConfig extends WebSecurityConfigurerAdapter {
	
	private static final String ADMIN = "ADMIN";
	private static final String USER = "USER";
	private static final String admin = "admin";
	private static final String user = "user";
	
	@Autowired
	private RestAuthenticationEntryPoint restAuthenticationEntryPoint;
	
	@Override
	protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
		if(auth == null)
			return;
		
	    auth.inMemoryAuthentication()
	        .withUser(admin).password(encoder().encode("adminPass")).roles(ADMIN)
	        .and()
	        .withUser(user).password(encoder().encode("userPass")).roles(USER);
	}
	
	@Override
	protected void configure(final HttpSecurity http) throws Exception { 
		if(http == null)
			return;
		
	    http
	    .csrf().disable()
	    .exceptionHandling()
	    .authenticationEntryPoint(restAuthenticationEntryPoint)
	    .and()
	    .authorizeRequests()
	    .antMatchers("/api/foos").authenticated()
	    .antMatchers("/api/admin/**").hasRole(ADMIN)
	    .and()
	    .formLogin()
	    //.successHandler(mySuccessHandler)
	    //.failureHandler(myFailureHandler)
	    .and()
	    .logout();
	}
	 
	@Bean
	public PasswordEncoder encoder() {
	    return new BCryptPasswordEncoder();
	}
}
