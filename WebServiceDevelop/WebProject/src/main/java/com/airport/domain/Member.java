package com.airport.domain;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "member")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Member {
    @Id
    private String username;
    private String password;    
    private String role;
    private boolean enabled;

    public String getRole() {
        return role;
    }

	public Collection<? extends GrantedAuthority> getAuthorities() {
	    List<GrantedAuthority> authorities = new ArrayList<>();    

	    if ("ROLE_USER".equals(role)) {
	        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
	    } else if ("ROLE_ADMIN".equals(role)) {
	        authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
	    }	    	
	    
	    return authorities;
	}

}