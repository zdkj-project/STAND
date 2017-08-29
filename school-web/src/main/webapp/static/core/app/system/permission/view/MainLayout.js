Ext.define("core.system.permission.view.MainLayout", {
    extend: "core.base.view.BasePanel",
    alias: "widget.system.permisson.mainlayout",
    /** 引入必须的文件 */
    requires: [
        'core.system.permission.controller.MainController'
    ],
    /** 关联此视图控制器 */
    controller: 'permission.mainController',

    /** 页面代码定义 */
    funCode: "permission_main",
    detCode: "permission_detail",
    detLayout: "permission.detaillayout",

    /*标注这个视图控制器的别名，以此提供给window处使用*/
    otherController: 'permission.otherController',

    layout: 'border',
    border: false,
    funData: {
        action: comm.get("baseUrl") + "/BaseMenuPermission", //请求Action
        whereSql: "", //表格查询条件
        orderSql: "", //表格排序条件       
        pkName: "uuid",   
        defaultObj: {},
        tabConfig:{         //zzk：2017-6-1加入，用于对tab操作提供基本配置数据
            addTitle:'添加权限',
            editTitle:'编辑权限',
            detailTitle:'权限详情'
        }
    },

    /*设置最小宽度，并且自动滚动*/
    minWidth:1000,
    scrollable:true,

    items: [{
            xtype: "permission.menutree",
            //title:'班级列表',
            region: "west",
            width: 300,
            //height:300,
            split: true,
            style: {
                border: '1px solid #ddd'
            },
            frame: false
        }, {
            xtype: "permission.maingrid",
            region: "center",
            flex: 1,
            style: {
                border: '1px solid #ddd'
            }
        }]
});
