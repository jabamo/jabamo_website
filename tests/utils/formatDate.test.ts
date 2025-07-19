import { describe, it, expect } from 'vitest'
import { formatDate } from '../../app/utils/formatDate'

describe('formatDate', () => {
  it('formats ISO date string to German format', () => {
    // given
    const isoDate = '2024-01-15T00:00:00.000Z'

    // when
    const result = formatDate(isoDate)

    // then
    expect(result).toBe('15. Januar 2024')
  })

  it('formats different month correctly', () => {
    // given
    const isoDate = '2024-06-30T00:00:00.000Z'

    // when
    const result = formatDate(isoDate)

    // then
    expect(result).toBe('30. Juni 2024')
  })

  it('formats December correctly', () => {
    // given
    const isoDate = '2023-12-25T00:00:00.000Z'

    // when
    const result = formatDate(isoDate)

    // then
    expect(result).toBe('25. Dezember 2023')
  })

  it('handles single digit dates', () => {
    // given
    const isoDate = '2024-03-05T00:00:00.000Z'

    // when
    const result = formatDate(isoDate)

    // then
    expect(result).toBe('5. März 2024')
  })
})