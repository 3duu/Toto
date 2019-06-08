package br.com.duti.petlife.config;

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

import br.com.duti.utils.Utils;

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
		em.setPersistenceUnitName("TOPPET");

		return em;
	}
	
	@Bean
	public DataSource dataSource(){
		
		final DriverManagerDataSource dataSource =
		new DriverManagerDataSource();
		readDbConfigFile();
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
		
		final Properties properties = new Properties();
		properties.setProperty("hibernate.hbm2ddl.auto","update");
		properties.setProperty("hibernate.dialect", dataSourceProperties.getDialect());
		properties.setProperty("hibernate.show_sql", "true");
		//properties.setProperty("hibernate.temp.use_jdbc_metadata_defaults", "false");
		properties.setProperty("hibernate.jdbc.lob.non_contextual_creation", "true");
		
		return properties;
	}
	
	private void readDbConfigFile(){
		final List<String> dados = Utils.readConfigFile(Utils.DB_CONFIG_FILE);
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
