import Component from '@ember/component';
import { cancel, later } from '@ember/runloop';

export default Component.extend({
  iteration: 0,
  showComponents: true,
  isRunning: false,

  didInsertElement() {
    this.set('timer', later(this, this.toggleComponents, 50));
  },

  didDestroyElement() {
    this._super(...arguments);

    if (this.get('timer')) {
      cancel(this.get('timer'));
    }
  },

  toggleComponents() {
    if (!this.isDestroying && this.get('isRunning')) {
      this.incrementProperty('iteration');
      this.toggleProperty('showComponents');
    }

    this.set('timer', later(this, this.toggleComponents, 50));
  },

  actions: {
    toggle() {
      this.toggleProperty('isRunning');
    }
  }
});
