package br.com.duti.petlife.repository.interfaces;

import org.springframework.security.core.userdetails.UserDetails;

import br.com.duti.petlife.models.User;

public interface IUserRepository {
	
	public User getUser(String username, String password);
	public UserDetails loadUserByUsername(final String username);
	public User save(User user);
	public User getByUsername(String username);
}
