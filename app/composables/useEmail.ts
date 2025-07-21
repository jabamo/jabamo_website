import { createProtectedMailtoLink, createEmailSvg } from '~/utils/mailto'

export const useEmail = () => {
    const emailLink = createProtectedMailtoLink({
        email: 'jb@jonabastian.io',
        encoding: 'rot13'
    })

    const emailSvg = createEmailSvg('jb@jonabastian.io', {
        fontSize: 16,
        fontFamily: 'Inter, sans-serif',
        className: 'select-none fill-current text-gray-700 dark:text-gray-300'
      })

    return {
        emailLink,
        emailSvg
    }
}