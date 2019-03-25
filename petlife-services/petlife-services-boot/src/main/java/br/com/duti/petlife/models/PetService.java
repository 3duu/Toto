package br.com.duti.petlife.models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Table(name="pet_service")
@Entity
public class PetService implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="creation_date", nullable=false)
	private Date creationDate;
	
	@JoinColumn(name="user_id")
	@ManyToOne(fetch=FetchType.LAZY)
	private User user;
	
	@Enumerated(EnumType.ORDINAL)
	@Column(name="service_type", nullable=false)
	private ServiceType serviceType;
	
	@Column(name="description", nullable=false)
	private String description;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinTable(name="pet_service_address",
            joinColumns = @JoinColumn( name="pet_service_id"),
            inverseJoinColumns = @JoinColumn( name="address_id"))
	private List<Address> addresses;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public ServiceType getServiceType() {
		return serviceType;
	}

	public void setServiceType(ServiceType serviceType) {
		this.serviceType = serviceType;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Address> getAddresses() {
		if(addresses == null){
			addresses = new ArrayList<>();
		}
		return addresses;
	}

	public void setAddresses(List<Address> addresses) {
		this.addresses = addresses;
	}

}
