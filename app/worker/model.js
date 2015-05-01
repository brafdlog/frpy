import DS from 'ember-data';
import User from '../user/model';

export default User.extend({
  phoneNumber: DS.attr()
});
