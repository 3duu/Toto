package br.com.duti.petlife.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.com.duti.petlife.models.User;

public abstract class GenericRepository<T> {
	
	@PersistenceContext
	private EntityManager manager;
	
	protected final EntityManager getEntityManager() {
		return this.manager;
	}
	
	public final T insert(final T entity){
		try{
			getEntityManager().persist(entity);
			getEntityManager().flush();
			return entity;
		}
		catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
	
	public final T update(final T entity){
		try{
			return getEntityManager().merge(entity);
		}
		catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
}
