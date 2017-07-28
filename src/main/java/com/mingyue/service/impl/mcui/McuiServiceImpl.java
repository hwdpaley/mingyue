package com.mingyue.service.impl.mcui;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mingyue.service.mcui.McuiServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("mcuiService")
@Transactional
public class McuiServiceImpl extends CommonServiceImpl implements McuiServiceI {
	
}