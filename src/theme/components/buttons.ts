import radii from '../radii'
import space from '../space'
import shadows from '../shadows'
import { colorPrimitives, colors } from '../colors'
import { fonts, fontWeights } from '../fonts'

const { white } = colorPrimitives

const buttonBase = {
    borderRadius: radii[1],
    fontFamily: fonts.normal,
    fontWeight: fontWeights.bold,
}

const buttons = {
    primary: {
        ...buttonBase,
        bg: colors.primary,
        boxShadow: shadows.blueLow,
        color: white,
        '&:focus,&:hover': {
            bg: 'primary',
            boxShadow: shadows.blueMedium,
        },
        '&:active': {
            bg: 'primary',
            boxShadow: shadows.blueVLow,
        },
    },
    secondary: {
        ...buttonBase,
        bg: colors.secondary,
        border: `1px solid ${colors.secondary}`,
        color: colorPrimitives.white,
        '&:focus,&:hover,&:active': {
            bg: colorPrimitives.lightBlue[3],
            borderColor: colorPrimitives.lightBlue[3],
        },
    },
    tertiary: {
        ...buttonBase,
        bg: colors.tertiary,
        border: `1px solid ${colors.tertiary}`,
        color: colorPrimitives.white,
        '&:focus,&:hover,&:active': {
            bg: colorPrimitives.lightBlue[3],
            borderColor: colorPrimitives.lightBlue[3],
        },
    },
    outline: {
        ...buttonBase,
        bg: white,
        color: colors.primary,
        border: `1px solid ${colors.primary}`,
        '&:focus,&:hover,&:active': {
            bg: colors.primary,
            color: colorPrimitives.white,
        },
    },
    sizes: {
        default: {
            p: space[3],
        },
        compact: {
            px: space[3],
            py: space[2],
        },
    },
}

export default buttons
