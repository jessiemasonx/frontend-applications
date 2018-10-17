/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {
    PolymerElement,
    html
} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
// components (elements)
import './components/my-button-component.js';
import './components/my-health-component.js';
// import './components/vaadin-form-layout.js';
// import './components/vaadin-form-item.js';
// import './styles/vaadin-form-layout-styles.js';
// import './styles/vaadin-form-item-styles.js';


class MyHealthPage extends PolymerElement {
    static get template() {
        return html `
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
		.flex {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
		}
      </style>

		<div class="card">
			<div class="flex">
				<!-- <div class="circle">2</div> -->
				<h1>Geestelijke gezondheid</h1>
			</div>

			<form>

				<my-health-component></my-health-component>

				<my-prev-button></my-prev-button>
				<my-next-button></my-next-button>
			</form>
		</div>
    `;
    }
}


window.customElements.define('my-health-page', MyHealthPage);
