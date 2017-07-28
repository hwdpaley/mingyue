package com.mingyue.service.impl.switch01;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mingyue.service.switch01.Switch01ServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("switch01Service")
@Transactional
public class Switch01ServiceImpl extends CommonServiceImpl implements Switch01ServiceI {
	
}