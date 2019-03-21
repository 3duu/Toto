package br.com.duti.petlife.config;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Properties;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableTransactionManagement
@Configuration
public class JPAConfiguration {
	
	//sudo /etc/init.d/oracle-xe-18c configure
	//sudo service oracle-xe-18c start
	private final static String ENTITY_PACKAGE = "br.com.duti.petlife.models";
	
	@Autowired
	private DataSourceProperties dataSourceProperties;
	
	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
		
		final LocalContainerEntityManagerFactoryBean em = new
		LocalContainerEntityManagerFactoryBean();
		em.setDataSource(dataSource());
		em.setPackagesToScan(new String[] { 
			ENTITY_PACKAGE
		});
		final JpaVendorAdapter vendorAdapter =
		new HibernateJpaVendorAdapter();
		em.setJpaVendorAdapter(vendorAdapter);
		em.setJpaProperties(additionalProperties());
		em.setPersistenceUnitName("PETLIF3");

		return em;
	}
	
	@Bean(/*destroyMethod = "close"*/)
	public DataSource dataSource(){
		
		final DriverManagerDataSource dataSource =
		new DriverManagerDataSource();
		readConfigFile();
		dataSource.setDriverClassName(dataSourceProperties.getDriver());
		dataSource.setUrl(dataSourceProperties.getHost());
		dataSource.setUsername(dataSourceProperties.getUsername());
		dataSource.setPassword(dataSourceProperties.getPassword());
		
		return dataSource;
	}
	
	@Bean
    public JpaTransactionManager jpaTransactionManager() {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactory().getObject());
        return transactionManager;
    }
	
	private Properties additionalProperties() {
		
		Properties properties = new Properties();
		properties.setProperty("hibernate.hbm2ddl.auto","update");
		properties.setProperty("hibernate.dialect", dataSourceProperties.getDialect());
		properties.setProperty("hibernate.show_sql", "true");
		
		return properties;
	}
	
	private void readConfigFile(){
		final String home = System.getProperty("user.home")
				.concat(File.separator).concat("petlife")
				.concat(File.separator).concat("dbconfig.cfg");
		final Path path = Paths.get(home);
		if(Files.exists(path)){
			List<String> dados = null;
			try {
				dados = Files.readAllLines(path);
			} catch (IOException e) {
				e.printStackTrace();
			}
			if(dados != null){
				if(!dados.isEmpty()){
					final String host = dados.get(0);
					if(!host.isEmpty()){
						dataSourceProperties.setHost(host);
					}
					if(dados.size() > 1){
						final String username = dados.get(1);
						if(!username.isEmpty()){
							dataSourceProperties.setUsername(username);
						}
					}
					if(dados.size() > 2){
						final String password = dados.get(2);
						if(!password.isEmpty()){
							dataSourceProperties.setPassword(password);
						}
					}
				}
			}	
		}
	}


}
