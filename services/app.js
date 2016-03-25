angular.module('app', [])

.factory('messages', function(){
  //creating messages object
  var messages = {};
  //creating an array and assiging it to a list in messages object
  messages.list = [];
  //creating the add method to push new messages into list array with id and text keys
  messages.add = function(message){
    messages.list.push({id: messages.list.length + 1, text:message}); // id: messages.list.length + 1 to prevent 0 from printing out on list
  }
  //showing messages
  return messages;
})
  //controller to  access messages from list
.controller('ListCtrl', function(messages){
  var self = this;

  self.messages = messages.list;
})
  //controller to add new messages
.controller('PostCtrl', function(messages){
  var self = this;

  self.addMessage = function (message){
    messages.add(message);
    //clears out input field after submit
    self.newMessage='';
  }
});



