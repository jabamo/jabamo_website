import { describe, it, expect } from 'vitest'
import { useEmail } from '../../app/composables/useEmail'

describe('useEmail', () => {
  it('should return email link and SVG data', () => {
    // given
    
    // when
    const result = useEmail()
    
    // then
    expect(result.emailLink.href).toBe('javascript:void(0)')
    expect(result.emailLink.displayText).toBe('wo@wbanonfgvna.vb')
    expect(result.emailSvg.chars).toEqual(['j', 'b', '@', 'j', 'o', 'n', 'a', 'b', 'a', 's', 't', 'i', 'a', 'n', '.', 'i', 'o'])
    expect(result.emailSvg.fontSize).toBe(16)
    expect(result.emailSvg.positions).toHaveLength(17)
  })

  it('should use ROT13 encoding', () => {
    // given
    const expectedROT13 = 'wo@wbanonfgvna.vb'
    
    // when
    const result = useEmail()
    
    // then
    expect(result.emailLink.displayText).toBe(expectedROT13)
  })
}) 