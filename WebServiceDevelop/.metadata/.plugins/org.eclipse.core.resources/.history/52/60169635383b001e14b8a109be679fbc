package com.airport.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.airport.domain.Member;
import com.airport.jwt.JwtUtil;
import com.airport.persistence.MemberRepo;

@Service
public class LoginService {
	
	@Autowired
	private MemberRepo memberRepo;
	
	@Autowired
	private BCryptPasswordEncoder encoder;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	public String login(Member member) {
        Optional<Member> findMember = memberRepo.findById(member.getUsername());
        if (findMember.isPresent() && encoder.matches(member.getPassword(), findMember.get().getPassword())) {
            String role = findMember.get().getRole().toString();
            return JwtUtil.createToken(member.getUsername(), role);
        }
        return null;
    }
	
	
	public Member getMember(Member member) {
		Optional<Member> findMember = memberRepo.findById(member.getUsername());
		if(findMember.isPresent())
			return findMember.get();
		else
			return null;
	}
	
	public boolean existsByUsername(String username) {
		return memberRepo.existsByUsername(username);
	}

	public void save(Member member) {
	    String encodedPassword = encoder.encode(member.getPassword());
	    member.setPassword(encodedPassword);
		memberRepo.save(member);
	}


	public JwtUtil getJwtUtil() {
		return jwtUtil;
	}


	public void setJwtUtil(JwtUtil jwtUtil) {
		this.jwtUtil = jwtUtil;
	}
}
	