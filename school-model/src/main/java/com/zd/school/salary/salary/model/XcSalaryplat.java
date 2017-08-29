package com.zd.school.salary.salary.model;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.math.BigDecimal;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.zd.core.annotation.FieldInfo;
import com.zd.core.model.BaseEntity;
import com.zd.core.util.DateTimeSerializer;

/**
 * 
 * ClassName: XcSalaryplat 
 * Function: TODO ADD FUNCTION. 
 * Reason: TODO ADD REASON(可选). 
 * Description: 工资套账表(XC_T_SALARYPLAT)实体类.
 * date: 2016-12-05
 *
 * @author  luoyibo 创建文件
 * @version 0.1
 * @since JDK 1.8
 */
 
@Entity
@Table(name = "XC_T_SALARYPLAT")
@AttributeOverride(name = "uuid", column = @Column(name = "SALARYPLAT_ID", length = 36, nullable = false))
public class XcSalaryplat extends BaseEntity implements Serializable{
    private static final long serialVersionUID = 1L;
    
    @FieldInfo(name = "工资套账名称")
    @Column(name = "SALARYPLAT_NAME", length = 36, nullable = true)
    private String salaryplatName;
    public void setSalaryplatName(String salaryplatName) {
        this.salaryplatName = salaryplatName;
    }
    public String getSalaryplatName() {
        return salaryplatName;
    }
        
    @FieldInfo(name = "人员编制类型(和字典表的人员编制类型对应)")
    @Column(name = "ZXXBZLB", length = 16, nullable = false)
    private String zxxbzlb;
    public void setZxxbzlb(String zxxbzlb) {
        this.zxxbzlb = zxxbzlb;
    }
    public String getZxxbzlb() {
        return zxxbzlb;
    }
        

    /** 以下为不需要持久化到数据库中的字段,根据项目的需要手工增加 
    *@Transient
    *@FieldInfo(name = "")
    *private String field1;
    */
}