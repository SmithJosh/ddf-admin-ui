/**
 * Copyright (c) Codice Foundation
 *
 * This is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, either
 * version 3 of the License, or any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Lesser General Public License for more details. A copy of the GNU Lesser General Public License is distributed along with this program and can be found at
 * <http://www.gnu.org/licenses/lgpl.html>.
 *
 **/
const Marionette = require('backbone.marionette')
import { render } from 'react-dom'
import React from 'react'
import Theme from '../components/container/theme'

Marionette.ItemView.prototype.attachElContent = function(rendering) {
  this.triggerMethod('before:react:attach', rendering)
  if (React.isValidElement(rendering)) {
    render(
      <Theme>
        <React.Fragment>{rendering}</React.Fragment>
      </Theme>,
      this.el
    )
  } else {
    this.$el.html(rendering)
  }
  this.triggerMethod('after:react:attach', rendering)
  return this
}
