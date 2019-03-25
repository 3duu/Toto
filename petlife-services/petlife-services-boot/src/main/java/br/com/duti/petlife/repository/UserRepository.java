package br.com.duti.petlife.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

import br.com.duti.petlife.models.User;
import br.com.duti.petlife.repository.interfaces.IUserRepository;

@Repository
@Transactional
public class UserRepository extends GenericRepository<User> implements IUserRepository {
	
	private final String GET_USER_QUERY = "SELECT u FROM User u WHERE u.username = :login and u.password = :pass";
	private final String GET_USERNAME_QUERY = "SELECT u FROM User u WHERE u.username = :login";
	private final String GET_SOCIAL_NETWORK_QUERY = "SELECT u FROM User u WHERE u.username = :login and loginType = :social";
	
	@Override
	public final User getUser(final String username, final String password) {
		final List<User> users = getEntityManager().createQuery(GET_USER_QUERY, User.class).setMaxResults(1)
				.setParameter("login", username)
				.setParameter("pass", password).getResultList();
		return users.isEmpty() ? null : users.get(0);
	}
	
	@Override
	public final UserDetails loadUserByUsername(final String username) throws UsernameNotFoundException {
		final String jpql = "SELECT u FROM User u WHERE u.username = :login";
		List<User> users = null;
		if(username == null)
			throw new UsernameNotFoundException("Erro ao fazer login");
		try{
			users = getEntityManager().createQuery(jpql, User.class)
					.setParameter("login", username).getResultList();
		}
		catch(Exception e){
			e.printStackTrace();
		}

		if(users == null || users.isEmpty()){
			throw new UsernameNotFoundException("O usuário " + username + " não existe");
		}
		
		return users.get(0);
	}
	
	public User save(final User user){
		try{
			getEntityManager().persist(user);
			getEntityManager().flush();
			return user;
		}
		catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public User getByUsername(final String username) {
		final List<User> users = getEntityManager().createQuery(GET_USERNAME_QUERY, User.class).setMaxResults(1)
				.setParameter("login", username)
				.getResultList();
		return users.isEmpty() ? null : users.get(0);
	}

	@Override
	public User getSocialMediaUser(final User user) {
		final List<User> users = getEntityManager().createQuery(GET_SOCIAL_NETWORK_QUERY, User.class).setMaxResults(1)
				.setParameter("login", user.getUsername())
				.setParameter("social", user.getLoginType())
				.getResultList();
		return users.isEmpty() ? null : users.get(0);
	}

}
