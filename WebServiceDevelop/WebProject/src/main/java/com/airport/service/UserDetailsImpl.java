package com.airport.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.airport.domain.Member;
import com.airport.persistence.MemberRepo;

@Service
public class UserDetailsImpl implements UserDetailsService {

    @Autowired
    private MemberRepo memberRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Member> option = memberRepo.findById(username);
        if (!option.isPresent()) {
        	return null;
        }
        Member member = option.get();
        return new User(
        		member.getUsername(),
        		member.getPassword(),
        		member.getAuthorities()
        );
    }
}