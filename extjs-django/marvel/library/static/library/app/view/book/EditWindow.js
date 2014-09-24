Ext.define('Lib.view.book.EditWindow', {
  extend: 'Ext.window.Window',
  requires: [
    'Ext.button.Button',
    'Ext.form.field.Text'
  ],
  alias: 'widget.bookeditwin',
  width: 300,
  modal: true,
  title: 'Добавление Книги',
  closeAction: 'destroy',
  items: [{
    xtype: 'form',
    layout: 'form',
    bodyPadding: '5 5 5',
    items: [{
      xtype: 'textfield',
      fieldLabel: 'Название',
      afterLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>',
      name: 'title',
      msgTarget: 'side',
      labelWidth: 75,
      allowBlank: false
    }, {
      xtype: 'combo',
      
      fieldLabel: 'Автор',
      afterLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>',
      name: 'auhtor',
      msgTarget: 'side',
      labelWidth: 75,
      allowBlank: false
    }, {
      xtype: 'combo',
      fieldLabel: 'Жанр',
      afterLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>',
      name: 'genre',
      msgTarget: 'side',
      labelWidth: 75,
      allowBlank: false
    }],
    buttons: [{
      text: 'Сохранить',
      action: 'save'
    }]
  }]
});