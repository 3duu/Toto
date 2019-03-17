package br.com.duti.petlife.config;

import java.util.Properties;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

//@EnableTransactionManagement
@Configuration
public class JPAConfiguration {
	
	//protected final static Access accessInfo = new Access();
	private final static String ENTITY_PACKAGE = "br.com.duti.petlife.models";
	
	@Autowired
	private DataSourceProperties dataSourceProperties;
	
	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory(){
		
		LocalContainerEntityManagerFactoryBean em = new
		LocalContainerEntityManagerFactoryBean();
		em.setDataSource(dataSource());
		em.setPackagesToScan(new String[]
		{ 
			ENTITY_PACKAGE
		});
		final JpaVendorAdapter vendorAdapter =
		new HibernateJpaVendorAdapter();
		em.setJpaVendorAdapter(vendorAdapter);
		em.setJpaProperties(additionalProperties());

		return em;
	}
	
	private DataSource dataSource(){
		
		final DriverManagerDataSource dataSource =
		new DriverManagerDataSource();
		dataSource.setDriverClassName(dataSourceProperties.getDriver());
		dataSource.setUrl(dataSourceProperties.getHost());
		dataSource.setUsername(dataSourceProperties.getUsername());
		dataSource.setPassword(dataSourceProperties.getPassword());
		
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
