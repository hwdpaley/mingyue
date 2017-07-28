package com.mingyue.service.impl.mzycustom;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mingyue.service.mzycustom.MzyCustomServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("mzyCustomService")
@Transactional
public class MzyCustomServiceImpl extends CommonServiceImpl implements MzyCustomServiceI {
	
}