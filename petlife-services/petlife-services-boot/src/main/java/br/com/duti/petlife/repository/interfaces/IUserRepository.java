package br.com.duti.petlife.repository.interfaces;

import org.springframework.security.core.userdetails.UserDetails;

import br.com.duti.petlife.models.User;

public interface IUserRepository {
	
	public User getUser(User user);
	public UserDetails loadUserByUsername(final String username);
	public User insert(User user);
	public User update(User user);
	public User getByUsername(String username);
	public User getSocialMediaUser(User user);
	public User getAdminUser(User admin);
}
