const la = require('lazy-ass')
const is = require('check-more-types')

/* global describe, it */
describe('always error', () => {
  const always = require('..')

  it('is a function', () => {
    la(is.fn(always))
  })

  it('leaves Error unchanged', () => {
    const e = new Error('foo')
    const f = always(e)
    la(e === f)
  })

  it('creates Error from string', () => {
    const e = always('foo')
    la(is.error(e), e)
    la(e.message === 'foo', e)
  })

  it('raises error for non strings', () => {
    la(is.raises(() => {
      always(42)
    }))
  })
})
