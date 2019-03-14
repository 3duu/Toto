package br.com.duti.petlife.services;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.com.duti.petlife.models.User;

@Path("/toto/user")
public class UserService {
	
	@GET
	@Produces( { MediaType.APPLICATION_JSON })
	 public User get(@PathParam("login") String login, @PathParam("id") String password) {
		final User user = new User();
		user.setId(1);
		user.setLogin("admin");
		user.setPassword("1");
		return user;
	 }
}
