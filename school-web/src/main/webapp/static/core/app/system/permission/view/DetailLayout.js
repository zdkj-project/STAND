Ext.define("core.system.permission.view.DetailLayout", {
	extend:"core.base.view.BasePanel",
	alias: "widget.permission.detaillayout",
	funCode: "permission_detail",
	funData: {
		action: comm.get("baseUrl") + "/BaseMenuPermission", //请求Action
		whereSql: "", //表格查询条件
		orderSql: "", //表格排序条件
		pkName: "uuid",
		defaultObj: {}
	},
    /*关联此视图控制器*/
	controller: 'permission.detailController',
	items: [{
		xtype: "permission.detailform"
	}],

	/*设置最小宽度*/
    minWidth:1000,   
    scrollable:true, 
});
