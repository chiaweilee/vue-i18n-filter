export const argToString = arg => Object.keys(arg).map(i => arg[i]).join(',')

export const warn = message => console.warn(`[why-did-you-computed] ${message}`)
