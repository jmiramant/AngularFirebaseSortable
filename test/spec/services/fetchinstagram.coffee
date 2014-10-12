'use strict'

describe 'Service: fetchInstagram', ->

  # load the service's module
  beforeEach module 'angularSorterApp'

  # instantiate service
  fetchInstagram = {}
  beforeEach inject (_fetchInstagram_) ->
    fetchInstagram = _fetchInstagram_

  it 'should do something', ->
    expect(!!fetchInstagram).toBe true
