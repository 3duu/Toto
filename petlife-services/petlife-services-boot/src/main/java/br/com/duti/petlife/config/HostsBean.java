package br.com.duti.petlife.config;

import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.stereotype.Component;

import br.com.duti.petlife.Application;

//@Component
public class HostsBean /*implements WebServerFactoryCustomizer<ConfigurableServletWebServerFactory>*/ {
	/*@Override
    public void customize(ConfigurableServletWebServerFactory container) {
        container.setPort(Integer.parseInt(Application.PORT));
    }*/
}
