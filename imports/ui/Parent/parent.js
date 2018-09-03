import { Template } from 'meteor/templating';
import {Parents} from '../../api/task.js';

import './parent.html';
Template.body.helpers({
    parents(){
        return Parents.find({});
    },
});

Template.parent.events({
    'click .insert': function(e){
        e.preventDefault();
        console.log("Buttonclicked");
        
    }
});