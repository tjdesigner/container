function fontStack(fonts: string[]) {
    return fonts.map((font: string) => (font.includes(' ') ? `"${font}"` : font)).join(', ')
}

const typography = {
    fontSizes: [16, 18, 20, 24, 32, 44],
    lineHeights: {
        condensed: 1.25,
        condensedUltra: 1,
        default: 1.5,
    },
}

const fonts = {
    normal: fontStack(['Montserrat', 'BlinkMacSystemFont', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji']),
}

const fontWeights = {
    bold: 600,
    light: 300,
    normal: 400,
    semibold: 500,
}

export { typography, fonts, fontWeights }
