angular.module('app', [])
  .controller('MainCtrl', function($scope){
    var self = this;
    self.message = 'hello';

    self.updateMessage = function(newMessage){
      self.message = newMessage;
    }
  });
