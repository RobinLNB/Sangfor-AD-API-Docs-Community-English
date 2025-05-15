function init(treedata) {
    var treeFiler = false;
    var viewport = new Ext.Viewport({
        layout: 'border',
        cls: 'content',
        items: [
            {
                xtype: 'container',
                region: 'west',
                id: 'top_nav',
                width: 300,
                layout: 'border',
                cls: 'content_left',
                items: [{
                    xtype: 'container',
                    layout: 'hbox',
                    region: 'north',
                    height: 50,
                    cls: 'content_left_header',
                    layoutConfig: {
                        align: 'stretch'
                    },
                    items: [{
                        xtype: 'box',
                        flex: 1,
                        html: 'SANGFOR AD',
                        cls: 'content_left_header_image'
                    }, {
                        xtype: 'box',
                        html: 'API 7.0.21',
                        width: 140
                    }]
                }, {
                    xtype: 'container',
                    layout: 'border',
                    region: 'center',
                    items: [{
                        xtype: 'container',
                        region: 'north',
                        height: 40,
                        cls: 'content_left_search',
                        items: [{
                            xtype: 'textfield',
                            enableKeyEvents : true,
                            height: 30,
                            width: 250,
                            cls: 'content_left_search_input',
                            listeners: {
                                keyup: function(field, e) {
                                    if (!treeFiler || e.keyCode !== 13) {
                                        return;
                                    }
                                    var t = this.getValue();
                                    var es = Ext.escapeRe(t);
                                    var re = new RegExp(es,'i');

                                    if (!t) {
                                        treeFiler.clear();
                                        return;
                                    }

                                    var filter = function(n, loop){
                                        var show = (loop ? false : !n.isLeaf()) || re.test(n.text),
                                            par = n.parentNode;
                                        if (n.isFirst() && !loop) {
                                            par.cLength = par.childNodes.length;
                                        }
                                        if (!show && par &&par.cLength) {
                                            par.cLength--;
                                            if (par.cLength === 0) {
                                                delete par.cLength;
                                                treeFiler.filtered[par.id] = par;
                                                par.ui.hide();
                                                filter(par, true);
                                            }
                                        }
                                        return show;
                                    };
                                    treeFiler.filterBy(filter);
                                }
                            }
                        }, {
                            xtype: 'box',
                            cls: 'content_left_search_icon iconfont',
                            autoEl: 'span',
                            itemId: 'icon',
                            width: 40,
                            html: '&#xe7fe;',
                            listeners: {
                                afterrender: function() {
                                    var me = this;
                                    this.el.on('click', function() {
                                        me.previousSibling().fireEvent('keyup', me, {
                                            keyCode: 13
                                        })
                                    })
                                }
                            }
                        }]
                    },
                    {
                        xtype: 'treepanel',
                        region: 'center',
                        border : false,
                        autoScroll: true,
                        animate : true,
                        rootVisible: false,
                        split: true,
                        flex: 1,
                        cls: 'content_left_tree',
                        root : new Ext.tree.AsyncTreeNode({
                            text: '',
                            children: treedata
                        }),
                        listeners: {
                            afterrender: function() {
                                treeFiler = new Ext.tree.TreeFilter(this,{
                                    clearBlank : true,
                                    autoClear : true
                                });
                                this.expandAll();
                            },
                            click: function(node){
                                if (!node.isLeaf()) {
                                    node.toggle();
                                    return;
                                }
                                var path = node.attributes.path || '',
                                    value = Data.getDataByPath(path, function(data) {
                                        setTimeout(function() {
                                            Loader.update(data);
                                        }, 10);
                                    });
                                if (value) {
                                    Loader.update(value);
                                }
                                console.log(node, 'is click');
                            }
                        }
                    }]
                }]
            },
            {
                xtype: 'box',
                region: 'center',
                cls: 'content_right',
                listeners: {
                    afterrender: function() {
                        var me = this,
                            path = '/{common}.yaml';
                        Data.getDataByPath(path, function() {
                            Data.setDataByPath(path, SF['{common}'] || {});
                            Loader.init(me);
                        });
                    }
                }
            }
        ]
    });
};


Reader.loads([
    './js/dataHandler.js',
    './js/loader.js',
    './js/ext-base-debug.js',
    './js/ext-all-debug.js',
    './js/override/TreeNodeUI.js'
], function() {
    Reader.save('/toc.js',function (data) {
        data = Data.loadTree(data.toc || []);
        init(data);
    });
});


