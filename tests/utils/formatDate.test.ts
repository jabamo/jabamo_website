import {describe, it, expect} from 'vitest'
import {formatDate, formatDateRelative, formatDateShort} from '../../app/utils/formatDate'

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

describe('formatDateShort', () => {
    it('formats ISO date string to short German format', () => {
        // given
        const isoDate = '2024-01-15T00:00:00.000Z'

        // when
        const result = formatDateShort(isoDate)

        // then
        expect(result).toBe('15. Jan. 2024')
    })

    it('formats June correctly in short format', () => {
        // given
        const isoDate = '2024-06-30T00:00:00.000Z'

        // when
        const result = formatDateShort(isoDate)

        // then
        expect(result).toBe('30. Juni 2024')
    })
})

describe('formatDateRelative', () => {
    it('returns "vor einem Tag" for yesterday', () => {
        // given
        const yesterday = new Date()
        yesterday.setHours(yesterday.getHours() - 23)
        const isoDate = yesterday.toISOString()

        // when
        const result = formatDateRelative(isoDate)

        // then
        expect(result).toBe('vor einem Tag')
    })

    it('returns days for recent dates', () => {
        // given
        const threeDaysAgo = new Date()
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3)
        const isoDate = threeDaysAgo.toISOString()

        // when
        const result = formatDateRelative(isoDate)

        // then
        expect(result).toBe('vor 3 Tagen')
    })

    it('returns weeks for dates within a month', () => {
        // given
        const twoWeeksAgo = new Date()
        twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14)
        const isoDate = twoWeeksAgo.toISOString()

        // when
        const result = formatDateRelative(isoDate)

        // then
        expect(result).toBe('vor 2 Wochen')
    })

    it('returns months for dates within a year', () => {
        // given
        const twoMonthsAgo = new Date()
        twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2)
        const isoDate = twoMonthsAgo.toISOString()

        // when
        const result = formatDateRelative(isoDate)

        // then
        expect(result).toBe('vor 2 Monaten')
    })

    it('returns years for old dates', () => {
        // given
        const twoYearsAgo = new Date()
        twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2)
        const isoDate = twoYearsAgo.toISOString()

        // when
        const result = formatDateRelative(isoDate)

        // then
        expect(result).toBe('vor 2 Jahren')
    })
})