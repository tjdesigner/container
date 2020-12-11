const colorPrimitives = {
    black: '#000',
    blue: ['#194ce6', '#050f2e', '#0a1e5c', '#0f2e8a', '#143db8', '#4770eb', '#7192f3', '#9eb5fa', '#cedafc', '#f0f3ff'],
    lightBlue: ['#1990e5', '#050f2e', '#0a3a5c', '#0f578a', '#1474b8', '#47a7eb', '#71bdf3', '#a3d3f5', '#d1e9fa', '#f0f9ff'],
    gray: ['#797c86', '#18191b', '#303236', '#494b50', '#61636b', '#94969e', '#afb1b6', '#c9cbce', '#e4e5e7', '#f7f7f8'],
    green: ['#30c05b', '#0a2913', '#145127', '#1f7a3a', '#29a34e', '#5cd681', '#85e0a0', '#adeac0', '#d6f5df', '#f3fcf5'],
    orange: ['#fa6400', '#331400', '#662900', '#993d00', '#cc5200', '#ff8433', '#ffa366', '#ffc299', '#ffe0cc', '#fff6f0'],
    red: ['#e51a45', '#2e050e', '#5c0a1b', '#890f29', '#b71537', '#ea486a', '#ef758f', '#f5a3b4', '#fad1da', '#fdf1f4'],
    violet: ['#a119e5', '#20052e', '#410a5c', '#610f8a', '#8114b8', '#b547eb', '#c871f3', '#db9efa', '#eeccff', '#faf0ff'],
    white: '#fff',
    yellow: ['#e6b319', '#2e2405', '#5c480a', '#8a6c0f', '#b88f14', '#ebc247', '#f0d275', '#f5e1a3', '#faf0d1', '#fdfaf1'],
}

const { white, gray, blue, black, lightBlue, green, orange, red, yellow, violet } = colorPrimitives

const colors = {
    accent: orange[5],
    background: white,
    blackfade16: 'rgba(0, 0, 0, 0.16)',
    blackfade24: 'rgba(0, 0, 0, 0.24)',
    blackfade48: 'rgba(0, 0, 0, 0.48)',
    blackfade64: 'rgba(0, 0, 0, 0.64)',
    blackfade8: 'rgba(0, 0, 0, 0.08)',
    blackfade80: 'rgba(0, 0, 0, 0.8)',
    whitefade16: 'rgba(255, 255, 255, 0.16)',
    whitefade24: 'rgba(255, 255, 255, 0.24)',
    whitefade48: 'rgba(255, 255, 255, 0.48)',
    whitefade8: 'rgba(255, 255, 255, 0.08)',
    whitefade80: 'rgba(255, 255, 255, 0.8)',
    bodytext: gray[9],
    modes: {
        dark: {
            background: blue[1],
            primary: blue[6],
            text: white,
        },
    },
    hightlight: [violet[0], orange[0]],
    primary: blue[0],
    secondary: lightBlue[0],
    tertiary: blue[5],
    alert: yellow[0],
    success: green[0],
    error: red[0],
    text: black,
    ...colorPrimitives,
}

export { colorPrimitives, colors }
