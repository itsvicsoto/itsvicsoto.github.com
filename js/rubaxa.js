;
(function() {
  'use strict';

  angular.module('myApp', ['ng-sortable'])

  .controller('demo', [
    '$scope',
    'grid.gridWidgetList',
    'grid.gridWidgets',
    function($scope, gridWidgetList, WidgetList) {

      $scope.gridWidgetList = gridWidgetList;
      $scope.widgetList = WidgetList;

      $scope.draggableGridWidgets = {
        animation: 150,
        sort: false,
        group: {
          name: 'gridlist',
          pull: 'clone',
          put: false
        }
      }

      $scope.sortableGrid = {
        animation: 150,
        sort: true,
        group: {
          name: 'gridlist'
        }
      }


      $scope.draggableWidgets = {
        animation: 150,
        sort: false,
        group: {
          name: 'widgetList',
          pull: 'clone',
          put: false
        }
      }

      $scope.sortableWidget = {
        animation: 150,
        sort: true,
        group: {
          name: 'widgetList'
        }
      }

      $scope.grid = {
        id: null,
        elementId: 'element_id',
        class: null,
        children: [],
        attributes: {},
        widgetSections: [],
        widgets: []
      }

    }
  ])

  .directive('ngSortable', [function() {
    "use strict";
    return {
      replace: true,
      link: function(scope, element) {
        element.on('update add remove sort', function(e) {
          e.stopPropagation();
        });
      }
    }
  }])

  .directive('preview', [
    '$compile',
    '$timeout',
    function($compile, $timeout) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {

          if (element.prop('tagName') !== 'IFRAME') {
            return;
          }

          $timeout(function() {
            $compile(element.contents())(scope);
            scope.$broadcast('iframe::doneCompiling');
          }, 1000);

        }
      };
    }
  ])

  .constant('grid.gridWidgets', [{
    name: 'Widget Sample 1',
  }, {
    name: 'Widget Sample 2'
  }, {
    name: 'Widget Sample 3'
  }, {
    name: 'Widget Sample 4'
  }, {
    name: 'Widget Sample 5'
  }])

  .constant('grid.gridWidgetList', [{
    id: 'default_id',
    elementId: 'blank-grid',
    class: 'no-class',
    children: [],
    widgets: [],
    attributes: {}
  }, {
    id: 'default_id',
    elementId: 'container',
    class: 'container',
    children: [],
    widgets: [],
    attributes: {}
  }, {
    id: 'default_id',
    elementId: 'row',
    class: 'row',
    children: [],
    widgets: [],
    attributes: {}
  }, {
    id: 'default_id',
    elementId: 'col-sm-4',
    class: 'col-sm-4',
    children: [],
    widgets: [],
    attributes: {}
  }, {
    id: 'default_id',
    elementId: 'col-sm-6',
    class: 'col-sm-6',
    children: [],
    widgets: [],
    attributes: {}
  }, {
    id: 'default_id',
    elementId: 'column 6-6',
    class: 'row',
    children: [{
      id: 'default_id',
      elementId: 'column-1',
      class: 'col-sm-6',
      children: [],
      widgets: [],
      attributes: {
        'io-disable-grid-drop': true
      }
    }, {
      id: 'default_id',
      elementId: 'column-2',
      class: 'col-sm-6',
      children: [],
      widgets: [],
      attributes: {
        'io-disable-grid-drop': true
      }
    }],
    widgets: [],
    attributes: {
      'io-disable-widget-drop': true,
      'io-disable-grid-drop': true
    }
  }, {
    id: 'default_id',
    elementId: 'column 9-3',
    class: 'row',
    children: [{
      id: 'default_id',
      elementId: 'column-1',
      class: 'col-sm-9',
      children: [],
      widgets: [],
      attributes: {}
    }, {
      id: 'default_id',
      elementId: 'column-2',
      class: 'col-sm-3',
      children: [],
      widgets: [],
      attributes: {}
    }],
    widgets: [],
    attributes: {
      'io-disable-widget-drop': true,
      'io-disable-grid-drop': true
    }
  }, {
    id: 'default_id',
    elementId: 'column 3-9',
    class: 'row',
    children: [{
      id: 'default_id',
      elementId: 'column-1',
      class: 'col-sm-3',
      children: [],
      widgets: [],
      attributes: {}
    }, {
      id: 'default_id',
      elementId: 'column-2',
      class: 'col-sm-9',
      children: [],
      widgets: [],
      attributes: {}
    }],
    widgets: [],
    attributes: {
      'io-disable-widget-drop': true,
      'io-disable-grid-drop': true
    }
  }])

}());
