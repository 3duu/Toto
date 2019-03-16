package br.com.duti.config;

import java.util.Properties;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableTransactionManagement
public class JPAConfiguration {
	
	protected final static Access accessInfo = new Access();
	
	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory(){

		LocalContainerEntityManagerFactoryBean em = new
		LocalContainerEntityManagerFactoryBean();
		em.setDataSource(dataSource());
		em.setPackagesToScan(new String[]
		{ 
		  "br.com.duti.petlife.models"
		});
		final JpaVendorAdapter vendorAdapter =
		new HibernateJpaVendorAdapter();
		em.setJpaVendorAdapter(vendorAdapter);
		em.setJpaProperties(additionalProperties());

		return em;
	}
	
	private DataSource dataSource(){
		
		DriverManagerDataSource dataSource =
		new DriverManagerDataSource();
		dataSource.setDriverClassName(Access.driver);
		dataSource.setUrl(accessInfo.connectionString);
		dataSource.setUsername( accessInfo.getUser() );
		dataSource.setPassword( accessInfo.getPassword() );
		
		return dataSource;
	}
	
	private Properties additionalProperties() {
		
		Properties properties = new Properties();
		properties.setProperty("hibernate.hbm2ddl.auto",
		"update");
		properties.setProperty("hibernate.dialect",
		"org.hibernate.dialect.Oracle10gDialect");
		properties.setProperty("hibernate.show_sql", "true");
		
		return properties;
	}


}
