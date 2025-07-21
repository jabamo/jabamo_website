import { describe, it, expect, vi } from 'vitest'
import { 
  rot13, 
  htmlEncode, 
  hexEncode, 
  base64Encode, 
  encodeEmail, 
  createMailtoUrl, 
  createProtectedMailtoLink,
  createEmailSvg,
  useMailto
} from '../../app/utils/mailto'

describe('rot13', () => {
  it('should encode text with ROT13', () => {
    // Given
    const input = 'test@example.com'
    
    // When
    const result = rot13(input)
    
    // Then
    expect(result).toBe('grfg@rknzcyr.pbz')
  })

  it('should handle mixed case letters', () => {
    // Given
    const input = 'TeSt'
    
    // When
    const result = rot13(input)
    
    // Then
    expect(result).toBe('GrFg')
  })

  it('should preserve non-alphabetic characters', () => {
    // Given
    const input = 'test@123.com'
    
    // When
    const result = rot13(input)
    
    // Then
    expect(result).toBe('grfg@123.pbz')
  })
})

describe('htmlEncode', () => {
  it('should encode each character as HTML entity', () => {
    // Given
    const input = 'test'
    
    // When
    const result = htmlEncode(input)
    
    // Then
    expect(result).toBe('&#116;&#101;&#115;&#116;')
  })

  it('should handle special characters', () => {
    // Given
    const input = '@'
    
    // When
    const result = htmlEncode(input)
    
    // Then
    expect(result).toBe('&#64;')
  })
})

describe('hexEncode', () => {
  it('should encode each character as hex HTML entity', () => {
    // Given
    const input = 'test'
    
    // When
    const result = hexEncode(input)
    
    // Then
    expect(result).toBe('&#x74;&#x65;&#x73;&#x74;')
  })

  it('should handle special characters', () => {
    // Given
    const input = '@'
    
    // When
    const result = hexEncode(input)
    
    // Then
    expect(result).toBe('&#x40;')
  })
})

describe('base64Encode', () => {
    it('should encode string with btoa', () => {
        // Given
        const input = 'test'
        const mockBtoa = vi.fn().mockReturnValue('dGVzdA==')
        vi.stubGlobal('btoa', mockBtoa)

        // When
        const result = base64Encode(input)

        // Then
        expect(result).toBe('dGVzdA==')
    })
})

describe('encodeEmail', () => {
  it('should use html encoding by default', () => {
    // Given
    const email = 'test@example.com'
    
    // When
    const result = encodeEmail(email)
    
    // Then
    expect(result).toBe('&#116;&#101;&#115;&#116;&#64;&#101;&#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;')
  })

  it('should use specified encoding', () => {
    // Given
    const email = 'test'
    
    // When
    const result = encodeEmail(email, 'rot13')
    
    // Then
    expect(result).toBe('grfg')
  })

  it('should return original email for none encoding', () => {
    // Given
    const email = 'test@example.com'
    
    // When
    const result = encodeEmail(email, 'none')
    
    // Then
    expect(result).toBe('test@example.com')
  })
})

describe('createMailtoUrl', () => {
  it('should create basic mailto URL', () => {
    // Given
    const options = { email: 'test@example.com' }
    
    // When
    const result = createMailtoUrl(options)
    
    // Then
    expect(result).toBe('mailto:test@example.com')
  })

  it('should include all parameters', () => {
    // Given
    const options = {
      email: 'test@example.com',
      subject: 'Test Subject',
      body: 'Test Body',
      cc: 'cc@example.com',
      bcc: 'bcc@example.com'
    }
    
    // When
    const result = createMailtoUrl(options)
    
    // Then
    expect(result).toBe('mailto:test@example.com?subject=Test+Subject&body=Test+Body&cc=cc%40example.com&bcc=bcc%40example.com')
  })

  it('should handle optional parameters', () => {
    // Given
    const options = {
      email: 'test@example.com',
      subject: 'Test Subject'
    }
    
    // When
    const result = createMailtoUrl(options)
    
    // Then
    expect(result).toBe('mailto:test@example.com?subject=Test+Subject')
  })
})

describe('createProtectedMailtoLink', () => {
  it('should return normal mailto link for none encoding', () => {
    // Given
    const options = {
      email: 'test@example.com',
      encoding: 'none' as const
    }
    
    // When
    const result = createProtectedMailtoLink(options)
    
    // Then
    expect(result.href).toBe('mailto:test@example.com')
    expect(result.displayText).toBe('test@example.com')
  })

  it('should return javascript void for encoded emails', () => {
    // Given
    const options = {
      email: 'test@example.com',
      encoding: 'html' as const
    }
    
    // When
    const result = createProtectedMailtoLink(options)
    
    // Then
    expect(result.href).toBe('javascript:void(0)')
    expect(result.displayText).toBe('&#116;&#101;&#115;&#116;&#64;&#101;&#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;')
  })

  it('should handle onClick for base64 encoding', () => {
    // Given
    const options = {
      email: 'test@example.com',
      encoding: 'base64' as const
    }
    vi.stubGlobal('import.meta', { client: true })
    vi.stubGlobal('btoa', vi.fn().mockReturnValue('dGVzdEBleGFtcGxlLmNvbQ=='))
    vi.stubGlobal('atob', vi.fn().mockReturnValue('test@example.com'))
    const mockLocation = { href: '' }
    vi.stubGlobal('window', { location: mockLocation })
    
    // When
    const result = createProtectedMailtoLink(options)
    result.onClick()
    
    // Then
    expect(mockLocation.href).toBe('mailto:test@example.com')
  })
})

describe('createEmailSvg', () => {
  it('should create SVG data with default options', () => {
    // Given
    const email = 'test@example.com'
    
    // When
    const result = createEmailSvg(email)
    
    // Then
    expect(result.chars).toEqual(['t', 'e', 's', 't', '@', 'e', 'x', 'a', 'm', 'p', 'l', 'e', '.', 'c', 'o', 'm'])
    expect(result.fontSize).toBe(16)
    expect(result.fontFamily).toBe('Inter, sans-serif')
    expect(result.height).toBe(22)
    expect(result.positions).toHaveLength(16)
  })

  it('should use custom options', () => {
    // Given
    const email = 'test'
    const options = {
      fontSize: 20,
      fontFamily: 'Arial',
      className: 'custom-class'
    }
    
    // When
    const result = createEmailSvg(email, options)
    
    // Then
    expect(result.fontSize).toBe(20)
    expect(result.fontFamily).toBe('Arial')
    expect(result.className).toBe('custom-class')
    expect(result.height).toBe(26)
  })

  it('should calculate positions correctly', () => {
    // Given
    const email = 'i@i'
    
    // When
    const result = createEmailSvg(email)
    
    // Then
    expect(result.positions[0]).toBe(2)
    expect(result.positions[1]).toBeGreaterThan(2)
    expect(result.positions[2]).toBeGreaterThan(result.positions[1])
  })
})

describe('useMailto', () => {
  it('should combine all mailto utilities', () => {
    // Given
    const options = {
      email: 'test@example.com',
      encoding: 'html' as const
    }
    
    // When
    const result = useMailto(options)
    
    // Then
    expect(result.href).toBe('javascript:void(0)')
    expect(result.displayText).toBe('&#116;&#101;&#115;&#116;&#64;&#101;&#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;')
    expect(result.encodedEmail).toBe('&#116;&#101;&#115;&#116;&#64;&#101;&#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;')
    expect(result.svg.chars).toEqual(['t', 'e', 's', 't', '@', 'e', 'x', 'a', 'm', 'p', 'l', 'e', '.', 'c', 'o', 'm'])
  })
}) 