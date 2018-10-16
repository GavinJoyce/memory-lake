import Route from '@ember/routing/route';
import { later } from '@ember/runloop';

export default Route.extend({
  afterModel() {
    later(this, () => {
      this.transitionTo('index');
    }, 1000);
  }
});
