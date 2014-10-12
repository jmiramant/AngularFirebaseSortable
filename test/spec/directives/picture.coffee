'use strict'

describe 'Directive: picture', ->

  # load the directive's module
  beforeEach module 'angularSorterApp'

  scope = {}

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<picture></picture>'
    element = $compile(element) scope
    expect(element.text()).toBe 'this is the picture directive'
