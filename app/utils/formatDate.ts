export const formatDate = (dateString: string, locale: string = 'de-DE') => {
    return new Date(dateString).toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

export const formatDateShort = (dateString: string, locale: string = 'de-DE') => {
    return new Date(dateString).toLocaleDateString(locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}

export const formatDateRelative = (dateString: string) => {
    const now = new Date()
    const date = new Date(dateString)
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return 'vor einem Tag'
    if (diffDays < 7) return `vor ${diffDays} Tagen`
    if (diffDays < 30) return `vor ${Math.floor(diffDays / 7)} Wochen`
    if (diffDays < 365) return `vor ${Math.floor(diffDays / 30)} Monaten`
    return `vor ${Math.floor(diffDays / 365)} Jahren`
}