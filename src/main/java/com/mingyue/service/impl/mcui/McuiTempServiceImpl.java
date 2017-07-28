package com.mingyue.service.impl.mcui;


import com.mingyue.service.mcui.McuiTempServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("mcuiTempService")
@Transactional
public class McuiTempServiceImpl extends CommonServiceImpl implements McuiTempServiceI {
	
}