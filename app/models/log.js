import DS from 'ember-data';
// import Ember from 'ember';

export default DS.Model.extend({
  dateTime: DS.attr('date'),
  location: DS.attr('string'),
  temp: DS.attr('number'),
  feelsLike: DS.attr('number'),
  weatherConditions: DS.attr('string'),
  bottomLayers: DS.attr('string'),
  topLayers: DS.attr('string'),
  accessories: DS.attr('string'),
  activityLevel: DS.attr('number'),
  comfortLevel: DS.attr('number'),
  });
