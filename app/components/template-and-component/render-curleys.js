import Component from '@ember/component';
import { later } from '@ember/runloop';

export default Component.extend({
  iteration: 0,
  showComponents: true,
  isRunning: false,

  didInsertElement() {
    later(this, this.toggleComponents, 50);
  },

  toggleComponents() {
    if (!this.isDestroying && this.get('isRunning')) {
      this.incrementProperty('iteration');
      this.toggleProperty('showComponents');
    }

    later(this, this.toggleComponents, 50);
  },

  actions: {
    toggle() {
      this.toggleProperty('isRunning');
    }
  }
});
