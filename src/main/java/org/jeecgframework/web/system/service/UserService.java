package org.jeecgframework.web.system.service;

import java.util.List;
import org.jeecgframework.core.common.service.CommonService;
import org.jeecgframework.web.system.pojo.base.TSDepart;
import org.jeecgframework.web.system.pojo.base.TSUser;

public abstract interface UserService
        extends CommonService
{
    public abstract int isAdmin();

    public abstract int getDepart();

    public abstract TSUser checkUserExits(TSUser paramTSUser);

    public abstract TSUser checkUserExits_phone(TSUser paramTSUser);

    public abstract String getUserRole(TSUser paramTSUser);

    public abstract void pwdInit(TSUser paramTSUser, String paramString);

    public abstract int getUsersOfThisRole(String paramString);

    public abstract TSDepart getDepartByUser(TSUser paramTSUser);

    public abstract List<String> getOrgByUser(TSUser paramTSUser);
}
