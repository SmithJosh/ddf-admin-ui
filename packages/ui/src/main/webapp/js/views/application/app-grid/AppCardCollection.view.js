/**
 * Copyright (c) Codice Foundation
 *
 * This is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser
 * General Public License as published by the Free Software Foundation, either version 3 of the
 * License, or any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details. A copy of the GNU Lesser General Public License
 * is distributed along with this program and can be found at
 * <http://www.gnu.org/licenses/lgpl.html>.
 *
 **/
/*global define*/
define([
    'backbone',
    'marionette',
    'icanhaz',
    'js/wreqr',
    'jquery',
    'underscore',
    './AppCardItem.view',
    'text!applicationGrid'
    ],function (Backbone, Marionette, ich, wreqr, $, _, AppCardItemView, applicationGrid) {
    "use strict";

    if(!ich.applicationGrid) {
        ich.addTemplate('applicationGrid', applicationGrid);
    }

    // Collection of all the applications
    var AppCardCollectionView = Marionette.CollectionView.extend({
        itemView: AppCardItemView,
        className: 'apps-grid list',
        itemViewOptions: {},
        modelEvents: {
            'change': 'render'
        },
        initialize: function(options) {
            this.AppShowState = options.AppShowState;
            this.listenTo(wreqr.vent, 'toggle:layout', this.toggleLayout);
        }
    });

    return AppCardCollectionView;
});