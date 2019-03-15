package br.com.duti.petlife.services;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.com.duti.petlife.models.User;

/**
 * @author Eduardo Porto de Araujo
 */
@Path("/user")
public class UserService {
	
	@GET
	@Path("/")
	@Produces( { MediaType.APPLICATION_JSON })
	 public User getByLogin(/*@PathParam("login") String login, @PathParam("id") String password*/) {
		final User user = new User();
		user.setId(1);
		user.setLogin("admin");
		user.setPassword("1");
		return user;
	 }
}
