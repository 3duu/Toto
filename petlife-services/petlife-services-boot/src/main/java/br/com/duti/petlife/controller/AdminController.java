package br.com.duti.petlife.controller;

import static br.com.duti.utils.Utils.getEncryptedString;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import br.com.duti.petlife.models.User;
import br.com.duti.petlife.repository.interfaces.IUserRepository;
import br.com.duti.utils.Utils;

@Component
@Transactional
public class AdminController implements ApplicationListener<ContextRefreshedEvent> {
	
	@Autowired
	private IUserRepository userRepository;
	
	private void resolveAdminUser(){
		final User admin = new User();
		admin.setUsername("admin");
		admin.setName("Administrador");
		admin.setPassword("1");
		admin.setAdmin(true);
		
		final List<String> dados = Utils.readConfigFile(Utils.ADMIN_CONFIG_FILE);
		if(dados != null){
			if(!dados.isEmpty()){
				final String username = dados.get(0);
				if(!username.isEmpty()){
					admin.setUsername(username);
				}
				if(dados.size() > 1){
					final String password = dados.get(1);
					if(!password.isEmpty()){
						admin.setPassword(password);
					}
				}
			}
		}
		
		admin.setPassword(getEncryptedString(admin.getPassword()));
		
		if(userRepository.getAdminUser(admin) == null){
			userRepository.insert(admin);
		}
	}

	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		resolveAdminUser();
	}
}
