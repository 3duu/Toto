package br.com.duti.petlife.models;

import java.io.Serializable;
import java.util.Date;

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
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Table(name="appointment")
@Entity
public class Appointment  implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="date", nullable=false)
	private Date date;
	
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "appointment_type", referencedColumnName = "id")
    private AppointmentType appointmentType;
    
	@JoinColumn(name="pet_id")
	@ManyToOne(fetch=FetchType.LAZY)
    private Pet pet;
	
	@JsonBackReference
	@JoinColumn(name="user_id")
	@ManyToOne(fetch=FetchType.LAZY)
    private User user;
	
	@Column(name="frequency_type", nullable=false, length=2)
	@Enumerated(EnumType.ORDINAL)
	private AppointmentExecutionFrequency frequencyType;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public AppointmentType getAppointmentType() {
		return appointmentType;
	}

	public void setAppointmentType(AppointmentType appointmentType) {
		this.appointmentType = appointmentType;
	}

	public Pet getPet() {
		return pet;
	}

	public void setPet(Pet pet) {
		this.pet = pet;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public AppointmentExecutionFrequency getFrequencyType() {
		return frequencyType;
	}

	public void setFrequencyType(AppointmentExecutionFrequency frequencyType) {
		this.frequencyType = frequencyType;
	}
	
	

}
