package com.airport.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.airport.domain.Notice;
import com.airport.persistence.NoticeRepo;

@Service
public class NoticeServiceImpl implements NoticeService {
	
	@Autowired
	public NoticeRepo noticeRepo;

	@Override
	public List<Notice> notice() {
		return noticeRepo.findAll();
	}
	
	@Override
	public Notice getNotice(Notice notice) {
		Notice clicktime = noticeRepo.findById(notice.getId()).get();
		clicktime.setView(clicktime.getView() + 1);
		noticeRepo.save(clicktime);
		return clicktime;
	}

	@Override
	public void insertNotice(Notice notice) {
		notice.setId(0L);
		notice.setDate(new Date());
		noticeRepo.save(notice);
		
	}

	@Override
	public void updateNotice(Notice notice) {
		Notice findnotice = noticeRepo.findById(notice.getId()).get();
		findnotice.setTitle(notice.getTitle());
		findnotice.setContent(notice.getContent());
		noticeRepo.save(findnotice);		
	}

	@Override
	public void deleteNotice(Notice notice) {
		noticeRepo.deleteById(notice.getId());
	}


	
	
}
