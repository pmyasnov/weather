Ext.define('Weather.model.Setting', {
    extend: 'Ext.data.Model',
	idProperty: 'id',
	identifier: 'uuid',
	requires: [
	'Ext.data.identifier.Uuid'
	],
	validations: [{
		type: 'presence',
		field: 'city',
		message: "Please provide a city."
		}, {
		type: 'presence',
		field: 'country',
		message: "Please provide a country."
		}
	],
	proxy: {
		type: 'localstorage',
		id: 'weathersettings'
	},
 
    config: {
        fields: [
            { name: 'id', type: 'auto' },
            { name: 'city', type: 'auto' },
            { name: 'country', type: 'auto' },
            { name: 'units', type: 'auto' },
            { name: 'geo', type: 'boolean' }

        ]
    }
});
