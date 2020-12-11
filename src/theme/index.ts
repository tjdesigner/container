import { colors } from './colors'
import radii from './radii'
import shadows from './shadows'
import space from './space'
import borderWidths from './borderWidths'
import { typography, fonts, fontWeights } from './fonts'
import sizes from './sizes'
import breakpoints from './breakpoints'
import { globalStyle as styles } from './globalStyle'

// Components
import buttons from './components/buttons'

const { lineHeights, fontSizes } = typography

const theme = {
    borderWidths,
    breakpoints,
    buttons,
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    shadows,
    sizes,
    space,
    styles,
}

export default theme
export { colors }
