Ext.application({
  name: 'Lib',
  appFolder: '/static/library/app',
  controllers: ['Main', 'Genre','Author','Book'],
  views: ['Main'],
  models: ['Genre','Author','Book'],

  launch: function() {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: {
        xtype: 'mainview'
      }
    });
  }
});