Ext.define('Weather.store.Settings', {
    extend: 'Ext.data.Store',
    requires: ['Weather.model.Setting'],
    config: {
		model: 'Weather.model.Setting',
		autoLoad: true
	}
});