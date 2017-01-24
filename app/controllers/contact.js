import Ember from 'ember';

export default Ember.Controller.extend({
	emailAddress: '',
	message: '',
	longMsg: Ember.computed.gte('message', 5),
	isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isValid: Ember.computed.and('isValidEmail', 'longMsg'),
	isDisabled: Ember.computed.not('isValid'),

	actions: {

		saveMsg: function() {
			this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}, and your Message ${this.get('message')}`);
      		this.set('emailAddress', '');
      		this.set('message', '');
		}
	}

});
