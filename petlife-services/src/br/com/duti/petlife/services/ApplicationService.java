package br.com.duti.petlife.services;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

/**
 * @author Eduardo Porto de Araujo
 */
@ApplicationPath("/petlife")
public class ApplicationService extends Application {
	
	@Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> s = new HashSet<Class<?>>();
        s.add(UserService.class);
        
        return s;
    }
}
