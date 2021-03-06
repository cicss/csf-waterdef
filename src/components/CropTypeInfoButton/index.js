///////////////////////////////////////////////////////////////////////////////
//
// Climate Smart Farming Water Deficit Calculator
// Copyright (c) 2018 Cornell Institute for Climate Smart Solutions
// All Rights Reserved
//
// This software is published under the provisions of the GNU General Public
// License <http://www.gnu.org/licenses/>. A text copy of the license can be
// found in the file 'LICENSE' included with this software.
//
// A text copy of the copyright notice, licensing conditions and disclaimers
// is available in the file 'COPYRIGHT' included with this software.
//
///////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { string } from 'prop-types'
import Icon from 'react-icons-kit';
import { infoCircle } from 'react-icons-kit/fa/infoCircle';

import '../../styles/CropTypeInfoButton.css';

@inject("store") @observer
class CropTypeInfoButton extends Component {

  static propTypes = {
    button_label: string,
  }

  static defaultProps = {
    button_label: "Go",
  }

  render() {
        const className = this.props.store.app.cropTypeInfoStatus ? 'crop-type-info-button-active' : 'crop-type-info-button-inactive';
        return (
                <button
                  className={className}
                  onClick={() => {
                      if (this.props.store.app.popupStatus) { this.props.store.app.updatePopupStatus(); }
                      this.props.store.app.updateCropTypeInfoStatus();
                      }
                  }
                >
                    <Icon icon={infoCircle} className="crop-type-info-icon" />
                    {this.props.button_label}
                </button>
        )
  }

};

export default CropTypeInfoButton;
