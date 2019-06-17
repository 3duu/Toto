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
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Table(name="user")
@Entity
public class User implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="username", length=32, nullable=false)
	private String username;
	
	@Column(name="name", length=50, nullable=true)
	private String name;
	
	@Column(name="creation_date", nullable=true)
	private Date creationDate;
	
	@Column(name="password", length=32,nullable=false)
	private String password;
	
	@Column(name="admin",nullable=false)
	private boolean admin;
	
	@Column(name="birth_date", nullable=true)
	private Date birthDate;
	
	@JsonManagedReference
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch=FetchType.LAZY, mappedBy="user")
	private List<Pet> pets;
	
	@OneToOne(fetch=FetchType.EAGER)
	@JoinTable(name="user_address",
            joinColumns = @JoinColumn( name="user_id"),
            inverseJoinColumns = @JoinColumn( name="address_id"))
	private Address address;
	
	@Column(name="login_type", nullable=true)
	@Enumerated(EnumType.ORDINAL)
	private SocialNetworkType loginType;
	
	@Transient
	private List<Appointment> appointments;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String login) {
		this.username = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public Boolean isAdmin() {
		return admin;
	}

	public void setAdmin(Boolean admin) {
		this.admin = admin;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public List<Pet> getPets() {
		if(pets == null){
			pets = new ArrayList<>();
		}
		return pets;
	}

	public void setPets(List<Pet> pets) {
		this.pets = pets;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public SocialNetworkType getLoginType() {
		return loginType;
	}

	public void setLoginType(SocialNetworkType loginType) {
		this.loginType = loginType;
	}

	public List<Appointment> getAppointments() {
		return appointments;
	}

	public void setAppointments(List<Appointment> appointments) {
		this.appointments = appointments;
	}

}
