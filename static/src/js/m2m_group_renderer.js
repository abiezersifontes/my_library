odoo.define('m2m_group.Renderer', function (require) {
    'use strict';

    var AbstractRenderer = require('web.AbstractRenderer');
    var core = require('web.core');

    var qweb = core.qweb;

    var M2mGroupRenderer = AbstractRenderer.extend({
        
        _render: function () {
            var self = this;
            
            this.$el.append(qweb.render('ViewM2mGroup'));

            var map = L.map(this.$('div#mapId')[0]).setView ([55.75, 37.58], 10);

            L.tileLayer('http://{s}.tile.cloudmade.com/4e5f745e28654b7eb26aab577eed79ee/997/256/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>[…]',
            maxZoom: 18
            }).addTo(map);

            return this._super.apply(this, arguments);
        }
    });

    return M2mGroupRenderer;

});
