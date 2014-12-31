var app = angular.module( 'app', ['react'] );

app.controller( 'mainCtrl', function( $scope ) {
  $scope.person = {
    "name" : "Joe"
  }
});

var Hello = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
  },

  render: function() {
    return React.DOM.span( null,
      'Hello ' + this.props.name
    );
  }
} );

app.value("Hello", Hello);

app.directive('hello', function(reactDirective) {
  return reactDirective(Hello);
});