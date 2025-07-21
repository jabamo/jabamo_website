export interface MailtoOptions {
  email: string
  subject?: string
  body?: string
  cc?: string
  bcc?: string
  encoding?: 'none' | 'html' | 'hex' | 'rot13' | 'base64'
}

export interface SvgTextOptions {
  fontSize?: number
  fontFamily?: string
  charSpacing?: number
  className?: string
}

export const rot13 = (str: string): string => {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const start = char <= 'Z' ? 65 : 97
    return String.fromCharCode(((char.charCodeAt(0) - start + 13) % 26) + start)
  })
}

export const htmlEncode = (str: string): string => {
  return str
    .split('')
    .map(char => `&#${char.charCodeAt(0)};`)
    .join('')
}

export const hexEncode = (str: string): string => {
  return str
    .split('')
    .map(char => `&#x${char.charCodeAt(0).toString(16)};`)
    .join('')
}

export const base64Encode = (str: string): string => {
  if (import.meta.client) {
    return btoa(str)
  }
  return str
}

export const encodeEmail = (email: string, encoding: MailtoOptions['encoding'] = 'html'): string => {
  switch (encoding) {
    case 'html':
      return htmlEncode(email)
    case 'hex':
      return hexEncode(email)
    case 'rot13':
      return rot13(email)
    case 'base64':
      return base64Encode(email)
    default:
      return email
  }
}

export const createMailtoUrl = (options: MailtoOptions): string => {
  const params = new URLSearchParams()

  if (options.subject) params.append('subject', options.subject)
  if (options.body) params.append('body', options.body)
  if (options.cc) params.append('cc', options.cc)
  if (options.bcc) params.append('bcc', options.bcc)

  const queryString = params.toString()
  return `mailto:${options.email}${queryString ? '?' + queryString : ''}`
}

export const createProtectedMailtoLink = (options: MailtoOptions): {
  href: string
  onClick: () => void
  displayText: string
} => {
  const displayText = encodeEmail(options.email, options.encoding)
  
  if (options.encoding === 'none') {
    return {
      href: createMailtoUrl(options),
      onClick: () => {},
      displayText: options.email
    }
  }

  const onClick = () => {
    if (import.meta.client) {
      let decodedEmail = options.email
      
      if (options.encoding === 'base64') {
        decodedEmail = atob(base64Encode(options.email))
      }

      window.location.href = createMailtoUrl({ ...options, email: decodedEmail })
    }
  }

  return {
    href: 'javascript:void(0)',
    onClick,
    displayText
  }
}

export const createEmailSvg = (
    email: string, 
    options: SvgTextOptions = {}
  ): {
    width: number
    height: number
    chars: string[]
    fontSize: number
    fontFamily: string
    className: string
    positions: number[]
  } => {
    const {
      fontSize = 16,
      fontFamily = 'Inter, sans-serif',
      className = 'select-none fill-current text-primary-500 dark:text-primary-100'
    } = options
  
    const chars = email.split('')
    
    const charWidths: { [key: string]: number } = {
      'i': 0.25, 'l': 0.3, 'I': 0.3, 't': 0.4, 'f': 0.4, 'j': 0.25,
      'r': 0.5, 's': 0.5, 'c': 0.5, 'z': 0.5, 'v': 0.5, 'x': 0.5, 'y': 0.5,
      'a': 0.6, 'b': 0.65, 'd': 0.6, 'e': 0.6, 'g': 0.6, 'h': 0.6, 'k': 0.6,
      'n': 0.6, 'o': 0.6, 'p': 0.6, 'q': 0.6, 'u': 0.6,
      'A': 0.7, 'B': 0.7, 'C': 0.7, 'D': 0.7, 'E': 0.6, 'F': 0.6, 'G': 0.7, 
      'H': 0.7, 'J': 0.5, 'K': 0.7, 'L': 0.6, 'N': 0.7, 'O': 0.8, 'P': 0.6, 
      'Q': 0.8, 'R': 0.7, 'S': 0.7, 'T': 0.6, 'U': 0.7, 'V': 0.7, 'X': 0.7, 
      'Y': 0.7, 'Z': 0.6,
      'm': 0.9, 'w': 0.9, 'M': 1.0, 'W': 1.0,
      '@': 1.0, '.': 0.3, '-': 0.4, '_': 0.5,
      '0': 0.6, '1': 0.4, '2': 0.6, '3': 0.6, '4': 0.6, '5': 0.6, 
      '6': 0.6, '7': 0.6, '8': 0.6, '9': 0.6
    }
  
    const positions: number[] = []
    let currentX = 2
    
    chars.forEach((char) => {
      positions.push(currentX)
      const charWidth = (charWidths[char] || 0.6) * fontSize
      currentX += charWidth
    })
  
    const width = currentX + 4
    const height = fontSize + 6
  
    return {
      width,
      height,
      chars,
      fontSize,
      fontFamily,
      className,
      positions
    }
  }

export const useMailto = (options: MailtoOptions) => {
  const link = createProtectedMailtoLink(options)
  const svg = createEmailSvg(options.email)
  
  return {
    ...link,
    svg,
    encodedEmail: encodeEmail(options.email, options.encoding)
  }
} 