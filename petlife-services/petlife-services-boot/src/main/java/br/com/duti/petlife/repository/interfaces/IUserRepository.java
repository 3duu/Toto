package br.com.duti.petlife.repository.interfaces;

import org.springframework.security.core.userdetails.UserDetails;

import br.com.duti.petlife.models.User;

public interface IUserRepository {
	
	public User getUser(final String username, final String password);
	public UserDetails loadUserByUsername(final String username);
}
