package com.mingyue.service.impl.alarm;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mingyue.service.alarm.AlarmServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("alarmService")
@Transactional
public class AlarmServiceImpl extends CommonServiceImpl implements AlarmServiceI {
	
}