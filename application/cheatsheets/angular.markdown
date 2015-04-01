---
layout: cheatsheet
---

http://terussell85.github.io/blog/2013/12/23/the-angularjs-promise-anti-pattern-that-makes-me-cry/

# [cheatsheet] Angular 1.3.9

### [Resolve Resources Centrally](http://www.jvandemo.com/how-to-resolve-application-wide-resources-centrally-in-angularjs-with-ui-router/)

### [Expressions](http://www.w3schools.com/angular/angular_expressions.asp)

#### [Component Based Directives](https://www.airpair.com/angularjs/posts/component-based-angularjs-directives#4-refactoring-components)

{% highlight js linenos %}
  ;
(function() {
  'use strict';

  angular.module('testModule', [])

  .directive('testDirective', [
    function(EccAPI) {
      return {
        restrict: 'E',
        scope: {
          test: '@'
        },
        templateUrl: '/component-tpl.html',
        bindToController: true,
        controllerAs: 'testdir',
        controller: function($scope, $element, $attrs, $transclude) {
          this.clickBtn = function() {
            console.log($scope);
            console.log('woah');
          }
        },
        link: function($scope, $element, $attrs) {

        }
      }
    }
  ])
}());
{% endhighlight %}

#### [Factory Patterns](http://stackoverflow.com/questions/14056874/how-to-emit-events-from-a-factory)

{% highlight js linenos %}
myApp.factory('myFactory', ['$rootScope', function ($rootScope) {
    $rootScope.$emit("myEvent", myEventParams);
}]);
{% endhighlight %}

#### ng-repeat

 ng-repeat that will display loading or if empty set of data.

{% highlight js linenos %}
<ul>
  <li ng-if="outstanding == undefined">
    <i class="fa fa-refresh fa-spin"></i> Loading...
  </li>
  <li ng-if="outstanding.items.length === 0">
    Nothing is Available...
  </li>
  <li ng-if="item.type != 'script'" ng-repeat="item in outstanding.items">
    <img placeholdit width="60" height="60" size="60x60" ng-src="item.url">
    <div class="item-meta">
      <h4>{{ item.name }}</h4>
      <span class="description">
       <p>{{ item.description }}</p>
      </span>
    </div>
    <div class="actions">
      <button ng-click="download(item, outstanding.hashToken)">
        <i class="fa fa-cloud-download"></i> Button Click
      </button>
    </div>
  </li>
</ul>
{% endhighlight %}
