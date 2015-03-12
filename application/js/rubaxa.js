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
        },
        scroll: true, // or HTMLElement
        scrollSensitivity: 80, // px, how near the mouse must be to an edge to start scrolling.
        scrollSpeed: 30, // px
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
        class: 'root',
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

  .directive('pageBuilder', [
    'grid.page',
    'grid.data',
    'grid.add',
    '$compile',
    '$timeout',
    function(Page, Grid, GridAdd, $compile, $timeout) {
      'use strict';

      return {
        restrict: 'E',
        require: '^ngModel',
        scope: true,
        template: '<div ng-include="templateUrl"></div>',
        link: function(scope, element, attrs, ngModel) {

          var ngModelItem = scope.$eval(attrs.ngModel);
          var gridParent = scope.$eval(attrs.gridParent);
          var gridOptions = scope.$eval(attrs.gridOptions);
          var pageBuilderTpl = attrs.pageBuilderTpl;

          scope.ngModelItem = ngModelItem;
          scope.gridParent = gridParent;
          scope.gridOptions = gridOptions;
          scope.templateUrl = pageBuilderTpl;

          var off = 0;

          scope.removeCurrentGrid = function(gridParent, index) {
            gridParent.splice(index, 1);
          }

          scope.addParentChild = function(parent, currentItem) {
            console.log('parent', parent);
            var gridTpl = angular.copy(GridAdd);
            gridTpl.id = off++;
            parent.children.push(gridTpl);
            gridTpl = {};
          };

          scope.removeParentChild = function(parent, data) {
            if (parent.length > 0) {
              parent.splice(data, 1);
            } else {
              console.info('Element has no child');
            }
          };

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

  .constant('grid.data', {
    id: null,
    elementId: 'container',
    class: 'container',
    children: [],
    widgets: [],
    attributes: {},
    widgetSections: [],
  })

  .constant('grid.add', {
    id: null,
    elementId: 'elementId',
    class: null,
    children: [],
    widgets: [],
    attributes: {},
    widgetSections: [],
  })

  .constant('grid.page', {
    name: null,
    description: null,
    iconUrl: null,
    customHeadTags: [],
    category: null,
    tags: [],
    grid: {
      id: null,
      elementId: 'element_id',
      class: null,
      children: [],
      widgets: [{
        id: 1,
        name: 'Widget Name'
      }, {
        id: 2,
        name: 'Widget Name 2'
      }, {
        id: 3,
        name: 'Widget Name 3'
      }],
      attributes: {},
      widgetSections: [],
    },
    assets: {
      _stylesCompiled: null,
      _scriptsCompiled: null,
      _scriptsLibrary: [],
      _stylesLibrary: []
    },
    headSection: {
      docType: null,
      meta: {
        author: null,
        description: null,
        keywords: []
      }
    },
  })

}());
