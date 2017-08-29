
Ext.define("core.system.roleright.view.SelectPermissionLayout", {
    extend: "core.base.view.BasePanel",
    alias: 'widget.roleright.selectpmslayout',
    funCode: "selectpms_detail",
    border: false,
    //funData用来定义一些常规的参数
    funData: {
        action: comm.get('baseUrl') + "/sysuser", //请求controller
        whereSql: "", //表格查询条件
        orderSql: "", //表格排序条件
        filter: "", //表格过滤条件
        pkName: "uuid", //主键
        //默认的初始值设置
        defaultObj: {
        }
    },
    layout: 'border',
    items: [{
        xtype:'roleright.permissiongrid',
        width: 650,
        region: "west",
        margin:'5',
    }, {
        xtype: "roleright.selectedpermissiongrid",
        region: "center",
        margin:'5',
    }]
})