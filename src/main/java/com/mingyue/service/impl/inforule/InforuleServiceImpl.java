package com.mingyue.service.impl.inforule;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mingyue.service.inforule.InforuleServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("inforuleService")
@Transactional
public class InforuleServiceImpl extends CommonServiceImpl implements InforuleServiceI {
	
}