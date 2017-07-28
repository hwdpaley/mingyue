package com.mingyue.service.impl.info;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mingyue.service.info.InfoServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("infoService")
@Transactional
public class InfoServiceImpl extends CommonServiceImpl implements InfoServiceI {
	
}