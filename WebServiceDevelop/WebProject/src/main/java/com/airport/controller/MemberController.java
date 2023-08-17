package com.airport.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.airport.domain.Member;
import com.airport.persistence.MemberRepo;

@RestController
public class MemberController {
	
	@Autowired
	private MemberRepo memberRepo;
	
	
	@RequestMapping("/members")
	public Iterable<Member> getMembers(){
		return memberRepo.findAll();
	}

}
