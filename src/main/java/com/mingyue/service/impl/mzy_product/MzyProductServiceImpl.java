package com.mingyue.service.impl.mzy_product;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mingyue.service.mzy_product.MzyProductServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("mzyProductService")
@Transactional
public class MzyProductServiceImpl extends CommonServiceImpl implements MzyProductServiceI {
	
}