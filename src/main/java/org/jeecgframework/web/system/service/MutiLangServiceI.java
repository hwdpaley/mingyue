package org.jeecgframework.web.system.service;

import org.jeecgframework.core.common.service.CommonService;
import org.jeecgframework.web.system.pojo.base.MutiLangEntity;

public interface MutiLangServiceI extends CommonService{

	public void initAllMutiLang();

    public String getMapLang(String langKey);

	public String getLang(String lang_key);
	
	public String getLang(String lang_key, String args);
	
	public void refleshMutiLangCach();
	
	/**
	 * 更新缓存，插入缓存
	 */
	public void putMutiLang(MutiLangEntity mutiLangEntity);
	
	/**
	 * 更新缓存，插入缓存
	 */
	public void putMutiLang(String langKey,String langCode,String langContext);

    /**
     * 获取系统单号，自动加1
     * @return
     */
    public String getIdNum();
    public String getsqbhIdNum();
    public void setsqbhIdNum();
}
