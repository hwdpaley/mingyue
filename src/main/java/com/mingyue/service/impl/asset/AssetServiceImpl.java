package com.mingyue.service.impl.asset;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mingyue.service.asset.AssetServiceI;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;

@Service("assetService")
@Transactional
public class AssetServiceImpl extends CommonServiceImpl implements AssetServiceI {
	
}