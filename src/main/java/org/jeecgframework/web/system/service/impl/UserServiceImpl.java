package org.jeecgframework.web.system.service.impl;

import java.util.ArrayList;
import java.util.List;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.jeecgframework.core.common.dao.ICommonDao;
import org.jeecgframework.core.common.model.json.ComboTree;
import org.jeecgframework.core.common.service.impl.CommonServiceImpl;
import org.jeecgframework.tag.vo.easyui.ComboTreeModel;
import org.jeecgframework.web.system.manager.ClientManager;
import org.jeecgframework.web.system.pojo.base.Client;
import org.jeecgframework.web.system.pojo.base.TSDepart;
import org.jeecgframework.web.system.pojo.base.TSRole;
import org.jeecgframework.web.system.pojo.base.TSRoleUser;
import org.jeecgframework.web.system.pojo.base.TSUser;
import org.jeecgframework.web.system.pojo.base.TSUserOrg;
import org.jeecgframework.web.system.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("userService")
@Transactional
public class UserServiceImpl
        extends CommonServiceImpl
        implements UserService
{
    public TSUser checkUserExits(TSUser user)
    {
        return this.commonDao.getUserByUserIdAndUserNameExits(user);
    }

    public TSUser checkUserExits_phone(TSUser user)
    {
        return this.commonDao.getUserByUserIdAndPhoneExits(user);
    }

    public String getUserRole(TSUser user)
    {
        return this.commonDao.getUserRole(user);
    }

    public void pwdInit(TSUser user, String newPwd)
    {
        this.commonDao.pwdInit(user, newPwd);
    }

    public int getUsersOfThisRole(String id)
    {
        Criteria criteria = getSession().createCriteria(TSRoleUser.class);
        criteria.add(Restrictions.eq("TSRole.id", id));
        int allCounts = ((Long)criteria.setProjection(Projections.rowCount()).uniqueResult()).intValue();

        return allCounts;
    }

    public int isAdmin()
    {
        int a = 0;
        List<TSRoleUser> tsRoleUserList = findByProperty(TSRoleUser.class, "TSUser.id", ClientManager.getInstance().getClient().getUser().getId());
        for (TSRoleUser tsRoleUser : tsRoleUserList) {
            if (tsRoleUser.getTSRole().getRoleCode().equals("admin"))
            {
                a = 1;
                break;
            }
        }
        return a;
    }

    public int getDepart()
    {
        int a = 1;
        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
        List<TSDepart> tsDepartList = findByProperty(TSDepart.class, "TSPDepart.id", orgId);
        if (tsDepartList.size() > 1)
        {
            a = tsDepartList.size();
        }
        else
        {
            List<TSRoleUser> tsRoleUserList = findByProperty(TSRoleUser.class, "TSUser.id", ClientManager.getInstance().getClient().getUser().getId());
            for (TSRoleUser tsRoleUser : tsRoleUserList) {
                if (tsRoleUser.getTSRole().getRoleName().equals("店长"))
                {
                    a = 2;
                    break;
                }
            }
        }
        return a;
    }

    public TSDepart getDepartByUser(TSUser tsUser)
    {
        TSDepart depart = null;
        List<TSUserOrg> tsUserOrgList = findByProperty(TSUserOrg.class, "tsUser.id", tsUser.getId());
        if (tsUserOrgList.size() > 0) {
            depart = ((TSUserOrg)tsUserOrgList.get(0)).getTsDepart();
        }
        return depart;
    }

    private boolean checkTree(TSDepart tsDepart, List<ComboTree> cmList)
    {
        boolean r = false;
        for (ComboTree comboTree : cmList)
        {
            if (comboTree.getText().endsWith(tsDepart.getDepartname())) {
                return true;
            }
            List<ComboTree> comboTreeList = comboTree.getChildren();
            if (comboTreeList != null) {
                return checkTree(tsDepart, comboTreeList);
            }
        }
        return r;
    }

    private void getComtreeL(List<String> ls, List<ComboTree> cmList)
    {
        for (ComboTree comboTree : cmList)
        {
            ls.add(comboTree.getId());
            List<ComboTree> chrenList = comboTree.getChildren();
            if (chrenList != null) {
                getComtreeL(ls, chrenList);
            }
        }
    }

    private List<ComboTree> getComboTree()
    {
        List<TSDepart> departsList = findByQueryString("from TSDepart where TSPDepart.id is null");
        List<ComboTree> comboTrees = new ArrayList();
        ComboTreeModel comboTreeModel = new ComboTreeModel("id", "departname", "TSDeparts");
        comboTrees = ComboTree(departsList, comboTreeModel, null, true);
        return comboTrees;
    }

    public List<String> getOrgByUser(TSUser tsUser)
    {
        TSDepart tsDepart;
        List<TSUserOrg> tsUserOrgList = findByProperty(TSUserOrg.class, "tsUser.id", tsUser.getId());
        List<String> stringList = new ArrayList();
        List<ComboTree> comboTreeList = getComboTree();
        for (TSUserOrg tsUserOrg : tsUserOrgList)
        {
            tsDepart = tsUserOrg.getTsDepart();
            for (ComboTree comboTree : comboTreeList)
            {
                if (comboTree.getText().endsWith(tsDepart.getDepartname()))
                {
                    stringList.add(comboTree.getId());
                    List<ComboTree> comboTreeListChren = comboTree.getChildren();
                    if (comboTreeListChren == null) {
                        break;
                    }
                    getComtreeL(stringList, comboTreeListChren); break;
                }
                List<ComboTree> comboTreeListChren = comboTree.getChildren();
                if ((comboTreeListChren != null) &&
                        (checkTree(tsDepart, comboTreeListChren)))
                {
                    stringList.add(comboTree.getId());
                    getComtreeL(stringList, comboTreeListChren);
                    break;
                }
            }
        }

        return stringList;
    }
}
