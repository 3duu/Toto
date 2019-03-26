package br.com.duti.petlife.repository;

import java.util.List;

import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

import br.com.duti.petlife.models.SocialNetworkType;
import br.com.duti.petlife.models.User;
import br.com.duti.petlife.repository.interfaces.IUserRepository;

@Repository
@Transactional
public class UserRepository extends GenericRepository<User> implements IUserRepository {
	
	private final String GET_USER_QUERY = "SELECT u FROM User u WHERE u.username = :login and u.password = :pass and u.loginType = :social";
	private final String GET_USER_FULL_QUERY = "SELECT u FROM User u WHERE u.username = :login and u.password = :pass and (u.loginType is null OR u.loginType = 0)";
	private final String GET_USERNAME_QUERY = "SELECT u FROM User u WHERE u.username = :login";
	private final String GET_SOCIAL_NETWORK_QUERY = "SELECT u FROM User u WHERE u.username = :login and loginType = :social";
	
	private final String LOGIN = "login";
	private final String PASS = "pass";
	private final String SOCIAL = "social";
	
	@Override
	public final User getUser(final User user) {
		final TypedQuery<User> query = getEntityManager().createQuery(hasSocialNetwork(user) ? GET_USER_QUERY : GET_USER_FULL_QUERY, User.class).setMaxResults(1)
				.setParameter(LOGIN, user.getUsername())
				.setParameter(PASS, user.getPassword());
		
		if(hasSocialNetwork(user)){
			query.setParameter(SOCIAL, user.getLoginType());
		}
		final List<User> users = query.getResultList();
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
					.setParameter(LOGIN, username).getResultList();
		}
		catch(Exception e){
			e.printStackTrace();
		}

		if(users == null || users.isEmpty()){
			throw new UsernameNotFoundException("O usuário " + username + " não existe");
		}
		
		return users.get(0);
	}
	
	@Override
	public User getByUsername(final String username) {
		final List<User> users = getEntityManager().createQuery(GET_USERNAME_QUERY, User.class).setMaxResults(1)
				.setParameter(LOGIN, username)
				.getResultList();
		return users.isEmpty() ? null : users.get(0);
	}

	@Override
	public User getSocialMediaUser(final User user) {
		final List<User> users = getEntityManager().createQuery(GET_SOCIAL_NETWORK_QUERY, User.class).setMaxResults(1)
				.setParameter(LOGIN, user.getUsername())
				.setParameter(SOCIAL, user.getLoginType())
				.getResultList();
		return users.isEmpty() ? null : users.get(0);
	}
	
	private boolean hasSocialNetwork(User user){
		return user.getLoginType() != null && !SocialNetworkType.NONE.equals(user.getLoginType());
	}

}
