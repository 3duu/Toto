package br.com.duti.petlife.repository;

import java.util.Arrays;

import javax.persistence.EntityManager;
import javax.persistence.Id;
import javax.persistence.PersistenceContext;

public abstract class GenericRepository<T> {
	
	protected final String ID = "id";
	protected final String DELETE = "DELETE FROM %s WHERE %s = :id";
	
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
	
	public final void delete(final T entity) {
		final String table = entity.getClass().getSimpleName();
		
		final String idField = Arrays.asList( entity.getClass().getDeclaredFields() )
				.stream().filter(m ->  Arrays.asList(m.getAnnotations()).stream().filter( a -> a.annotationType().equals(Id.class)).findAny().isPresent()  ).findFirst()
				.get().getName();
		
		Long value = null;
		try {
			value = (Long) Arrays.asList( entity.getClass().getMethods() )
					.stream().filter(m ->  m.getName().toLowerCase().equals("get".concat(idField.toLowerCase()))).findFirst()
					.get().invoke(entity);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		if(value != null) {
			getEntityManager().createQuery(String.format(DELETE, table, idField))
			.setParameter("id", value)
			.executeUpdate();
		}
	}
}
