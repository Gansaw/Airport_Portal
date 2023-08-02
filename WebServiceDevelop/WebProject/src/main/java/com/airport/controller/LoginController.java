package com.airport.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.airport.domain.Member;
import com.airport.service.LoginService;

@RestController
@SessionAttributes("회원")
public class LoginController {
	
	@Autowired
	private LoginService memberService;
	
	@Autowired
	BCryptPasswordEncoder encoder;
	
	@GetMapping("/login")
	public void login() {
		
	}	
	
	@PostMapping("/login")
	public String login(Member member, Model model) {
		Member findMember = memberService.getMember(member);
		if(findMember != null && findMember.getPassword().equals(member.getPassword())) {
			model.addAttribute("회원", findMember);		
		}
		return "main";
	}
	
	@GetMapping("/signup")
	public void signup() {		
		
	}
	
	@PostMapping("/signup")
	public String signupProc(Member member) {
	    if (member.getRole() == null)        
	    	member.setRole("회원");

	    member.setEnabled(true);	    
	    memberService.save(member);
	    return "Welcome.html";
	}

	
	@GetMapping("/logout")
	public String logout(SessionStatus status) {
		status.setComplete();
		return "login";
	}
	
	@GetMapping("/loginSuccess")
	public void loginSuccess() {
		
	}
	
	@GetMapping("/errors/accessDeny")
	public void accessDeny() {
		
	}
	
}
