/**
 * Design system theme and tokens, inlined until they're published on npm.
 */

// -- utils --

function px(n: string | number) {
  return (typeof n === 'string' ? n : n === 0 ? '0' : `${n}px`)
}

function pxMap(values: Array<string | number>) {
  return values.reduce((o, n) => Object.assign(o, { [n]: px(n) }), {})
}

function tokenMap(tokens: Record<string, string>): Record<string, string> {
  return Object.keys(tokens).reduce((obj, rule) => {
    const int = parseInt(tokens[rule], 10)
    obj[rule] = px(int)
    return obj
  }, {} as Record<string, string>)
}

// -- tokens --

const colorTokens = {
  'Primary': {
    10: '#F3F8FE',
    50: '#e9f1fe',
    100: '#dfebfd',
    200: '#afccf7',
    300: '#83aceb',
    400: '#5a8dd9',
    500: '#2A60AF',
    600: '#1b519e',
    700: '#043578',
    800: '#001d4e',
    900: '#000925',
    source: '#1b52a1'
  },
  'Secondary': {
    10: '#F2F9FA',
    50: '#E6F4F5',
    100: '#daeff0',
    200: '#a2d5d8',
    300: '#6ababf',
    400: '#2b9ea5',
    500: '#008189',
    600: '#00646c',
    700: '#00464e',
    800: '#002a30',
    900: '#001013',
    source: '#15a5ad'
  },
  'Accent': {
    10: '#FFF5F0',
    50: '#FEEDE3',
    100: '#fde4d7',
    200: '#f6bc9b',
    300: '#e79362',
    400: '#d26d28',
    500: '#b64a00',
    600: '#942a00',
    700: '#6f0f00',
    800: '#470000',
    900: '#200000',
    source: '#e97727'
  },
  'Information': {
    10: '#F2F8FF',
    50: '#E5F1FF',
    100: '#daebff',
    200: '#a3ccff',
    300: '#6faaff',
    400: '#4088fd',
    500: '#1066e5',
    600: '#0046c2',
    700: '#002996',
    800: '#001264',
    900: '#000331',
    source: '#1168e8'
  },
  'Success': {
    10: '#F3FAF0',
    50: '#E8F5E2',
    100: '#def1d6',
    200: '#aed998',
    300: '#80bf5b',
    400: '#55a30f',
    500: '#2d8600',
    600: '#026800',
    700: '#004a00',
    800: '#002c00',
    900: '#001100',
    source: '#6cc627'
  },
  'Warning': {
    50: '#faefe1',
    100: '#f7e7d3',
    200: '#e8c492',
    300: '#d69f50',
    400: '#bf7d00',
    500: '#a35d00',
    600: '#843f00',
    700: '#612600',
    800: '#3e1200',
    900: '#1b0400',
    source: '#efa315'
  },
  'Danger': {
    10: '#FFF4F1',
    50: '#FFEAE5',
    100: '#ffe0d9',
    200: '#ffb0a2',
    300: '#ff7f6e',
    400: '#ec4e3e',
    500: '#d0110b',
    600: '#ac0000',
    700: '#810000',
    800: '#550000',
    900: '#280000',
    source: '#d81c14'
  },
  'Neutral': {
    10: '#f7f8f8',
    50: '#eff0f0',
    100: '#e9eaea',
    200: '#c9caca',
    300: '#aaabab',
    400: '#8b8d8d',
    500: '#6e7070',
    600: '#535454',
    700: '#383939',
    800: '#202121',
    900: '#0b0b0b',
    source: '#0b0c0c'
  },
  'Black-White': {
    White: '#fcfcfc',
    Black: '#0b0c0c'
  },
  'External Brands': {
    'X-Twitter': '#000000',
    'Mastodon': '#6364ff',
    'Facebook': '#1877f2',
    'Instagram': '#ff0076',
    'Threads': '#000000',
    'Linkedin': '#0077b5',
    'Tiktok': '#000000',
    'YouTube': '#ff0000'
  }
} as const

const spacingTokens = {
  'none': '0',
  'space-xs': '12',
  'space-sm': '16',
  'space-md': '20',
  'space-lg': '28',
  'space-xl': '32',
  'space-xxl': '36',
  'spacing-3xl': '28',
  'space-body': '12',
  'space-label': '4',
  'space-tablet-xxl': '40',
  'space-desktop-md': '24',
  'space-desktop-lg': '32',
  'space-desktop-xl': '44',
  'space-desktop-xxl': '60'
} as const

// -- theme --

const breakpoints = {
  xs: '375px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
}

const colors = {
  white: colorTokens['Black-White'].White,
  black: colorTokens['Black-White'].Black,
  primary10: colorTokens.Primary[10],
  primary50: colorTokens.Primary[50],
  primary100: colorTokens.Primary[100],
  primary200: colorTokens.Primary[200],
  primary300: colorTokens.Primary[300],
  primary400: colorTokens.Primary[400],
  primary500: colorTokens.Primary[500],
  primary600: colorTokens.Primary[600],
  primary700: colorTokens.Primary[700],
  primary800: colorTokens.Primary[800],
  primary900: colorTokens.Primary[900],
  secondary10: colorTokens.Secondary[10],
  secondary50: colorTokens.Secondary[50],
  secondary100: colorTokens.Secondary[100],
  secondary200: colorTokens.Secondary[200],
  secondary300: colorTokens.Secondary[300],
  secondary400: colorTokens.Secondary[400],
  secondary500: colorTokens.Secondary[500],
  secondary600: colorTokens.Secondary[600],
  secondary700: colorTokens.Secondary[700],
  secondary800: colorTokens.Secondary[800],
  secondary900: colorTokens.Secondary[900],
  accent10: colorTokens.Accent[10],
  accent50: colorTokens.Accent[50],
  accent100: colorTokens.Accent[100],
  accent200: colorTokens.Accent[200],
  accent300: colorTokens.Accent[300],
  accent400: colorTokens.Accent[400],
  accent500: colorTokens.Accent[500],
  accent600: colorTokens.Accent[600],
  accent700: colorTokens.Accent[700],
  accent800: colorTokens.Accent[800],
  accent900: colorTokens.Accent[900],
  information10: colorTokens.Information[10],
  information50: colorTokens.Information[50],
  information100: colorTokens.Information[100],
  information200: colorTokens.Information[200],
  information300: colorTokens.Information[300],
  information400: colorTokens.Information[400],
  information500: colorTokens.Information[500],
  information600: colorTokens.Information[600],
  information700: colorTokens.Information[700],
  information800: colorTokens.Information[800],
  information900: colorTokens.Information[900],
  informationSource: colorTokens.Information.source,
  success10: colorTokens.Success[10],
  success50: colorTokens.Success[50],
  success100: colorTokens.Success[100],
  success200: colorTokens.Success[200],
  success300: colorTokens.Success[300],
  success400: colorTokens.Success[400],
  success500: colorTokens.Success[500],
  success600: colorTokens.Success[600],
  success700: colorTokens.Success[700],
  success800: colorTokens.Success[800],
  success900: colorTokens.Success[900],
  warning50: colorTokens.Warning[50],
  warning100: colorTokens.Warning[100],
  warning200: colorTokens.Warning[200],
  warning300: colorTokens.Warning[300],
  warning400: colorTokens.Warning[400],
  warning500: colorTokens.Warning[500],
  warning600: colorTokens.Warning[600],
  warning700: colorTokens.Warning[700],
  warning800: colorTokens.Warning[800],
  warning900: colorTokens.Warning[900],
  danger10: colorTokens.Danger[10],
  danger50: colorTokens.Danger[50],
  danger100: colorTokens.Danger[100],
  danger200: colorTokens.Danger[200],
  danger300: colorTokens.Danger[300],
  danger400: colorTokens.Danger[400],
  danger500: colorTokens.Danger[500],
  danger600: colorTokens.Danger[600],
  danger700: colorTokens.Danger[700],
  danger800: colorTokens.Danger[800],
  danger900: colorTokens.Danger[900],
  dangerSource: colorTokens.Danger.source,
  neutral10: colorTokens.Neutral[10],
  neutral50: colorTokens.Neutral[50],
  neutral100: colorTokens.Neutral[100],
  neutral200: colorTokens.Neutral[200],
  neutral300: colorTokens.Neutral[300],
  neutral400: colorTokens.Neutral[400],
  neutral500: colorTokens.Neutral[500],
  neutral600: colorTokens.Neutral[600],
  neutral700: colorTokens.Neutral[700],
  neutral800: colorTokens.Neutral[800],
  neutral900: colorTokens.Neutral[900],
}

const spacing = {
  ...pxMap([0, 2, 4, 8, 12, 16, 20, 28, 40, 60, 80, 96]),
  ...tokenMap(spacingTokens),
  fit: 'fit-content'
}

/**
 * These are "ideal" content widths that accommodate
 * nice line lengths and evenly sized grids with standard
 * spacing (20 or 28px)
 */
const widths = {
  sm: '340px',
  md: '500px',
  lg: '884px',
  xl: '1076px'
}

const fontFamily = {
  body: 'var(--font-sans)',
  sans: 'var(--font-sans)',
  slab: 'var(--font-slab)',
  monospace: 'var(--font-mono)',
  chinese: 'var(--font-chinese)'
} as const

const lineHeight: Record<string, string> = {
  auto: 'AUTO',
  ...pxMap([56, 52, 48, 44, 40, 36, 32, 28, 24, 20, 16])
}

const fontWeight = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  boldChinese: 500
} as const

const fontSize = {
  'small': ['14px', '24px'],
  'h1': ['36px', '24px'],
  'h2': ['32px', '24px'],
  'h3': ['26px', '24px'],
  'h4': ['20px', '24px'],
  'h6': ['16px', '24px'],
  'desktop-display-xxxl': [
    '46px',
    {
      lineHeight: lineHeight['56'],
      letterSpacing: '0px',
      fontWeight: fontWeight.semibold
    }
  ],
  'desktop-display-lg': [
    '24px',
    {
      lineHeight: lineHeight['32'],
      letterSpacing: '0px',
      fontWeight: fontWeight.normal
    }
  ],
  'desktop-heading-xxl': [
    '40px',
    {
      lineHeight: lineHeight['52'],
      letterSpacing: '0px',
      fontWeight: fontWeight.medium
    }
  ],
  'desktop-heading-xl': [
    '32px',
    {
      lineHeight: lineHeight['44'],
      letterSpacing: '0px',
      fontWeight: fontWeight.semibold
    }
  ],
  'desktop-heading-lg': [
    '24px',
    {
      lineHeight: lineHeight['32'],
      letterSpacing: '0px',
      fontWeight: fontWeight.medium
    }
  ],
  'desktop-heading-lg-li': [
    '24px',
    {
      lineHeight: lineHeight['32'],
      letterSpacing: '0px',
      fontWeight: fontWeight.semibold
    }
  ],
  'desktop-heading-md': [
    '20px',
    {
      lineHeight: lineHeight['28'],
      letterSpacing: '0px',
      fontWeight: fontWeight.bold
    }
  ],
  'desktop-heading-sm': [
    '16px',
    {
      lineHeight: lineHeight['24'],
      letterSpacing: '0px',
      fontWeight: fontWeight.extrabold
    }
  ],
  'desktop-heading-xs': [
    '14px',
    {
      lineHeight: lineHeight['20'],
      letterSpacing: '0px',
      fontWeight: fontWeight.light
    }
  ],
  'display-xxxl': [
    '32px',
    {
      lineHeight: lineHeight['40'],
      letterSpacing: '0px',
      fontWeight: fontWeight.semibold
    }
  ],
  'display-lg': [
    '20px',
    {
      lineHeight: lineHeight['24'],
      letterSpacing: '0px',
      fontWeight: fontWeight.normal
    }
  ],
  'heading-xxl': [
    '28px',
    {
      lineHeight: lineHeight['36'],
      letterSpacing: '0px',
      fontWeight: fontWeight.medium
    }
  ],
  'heading-xl': [
    '24px',
    {
      lineHeight: lineHeight['32'],
      letterSpacing: '0px',
      fontWeight: fontWeight.semibold
    }
  ],
  'heading-lg': [
    '20px',
    {
      lineHeight: lineHeight['28'],
      letterSpacing: '0px',
      fontWeight: fontWeight.medium
    }
  ],
  'heading-lg-li': [
    '20px',
    {
      lineHeight: lineHeight['28'],
      letterSpacing: '0px',
      fontWeight: fontWeight.semibold
    }
  ],
  'heading-md': [
    '16px',
    {
      lineHeight: lineHeight['24'],
      letterSpacing: '0px',
      fontWeight: fontWeight.bold
    }
  ],
  'heading-sm': [
    '16px',
    {
      lineHeight: lineHeight['24'],
      letterSpacing: '0px',
      fontWeight: fontWeight.extrabold
    }
  ],
  'heading-xs': [
    '14px',
    {
      lineHeight: lineHeight['20'],
      letterSpacing: '0px',
      fontWeight: fontWeight.light
    }
  ],
  'body': [
    '16px',
    {
      lineHeight: lineHeight['24'],
      letterSpacing: '0px',
      fontWeight: fontWeight.normal
    }
  ],
  'label-md': [
    '20px',
    {
      lineHeight: lineHeight['28'],
      letterSpacing: '0px',
      fontWeight: fontWeight.normal
    }
  ],
  'label-sm': [
    '16px',
    {
      lineHeight: lineHeight['24'],
      letterSpacing: '0px',
      fontWeight: fontWeight.normal
    }
  ],
  'label-xs': [
    '14px',
    {
      lineHeight: lineHeight['20'],
      letterSpacing: '0px',
      fontWeight: fontWeight.normal
    }
  ]
} as const

// available column grid templates
const gridColumns = [1, 2, 3, 4, 6, 12]
// possible per-column spans
const gridColumnSpans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// available row grid templates
const gridRows = [1, 2, 3]
// possible per-row spans
const gridRowSpans = gridRows

export default {
  colors,
  screens: breakpoints,
  spacing, // TODO [>=3]: add line heights to spacing scale
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  borderColor: {
    current: 'currentColor',
    ...colors
  },
  textColor: {
    inherit: 'inherit',
    ...colors // TODO [>=3]: remove this in favor of only textColor
  },
  borderRadius: {
    DEFAULT: '8px',
    full: '100%',
    ...pxMap([0, 2, 4])
  },
  borderWidth: {
    DEFAULT: '3px',
    ...pxMap([0, 1, 2, 3])
  },
  gap: {
    ...spacing
  },
  gridColumn: {
    'span-auto': 'auto',
    'span-full': '1 / -1',
    ...Object.fromEntries(
      gridColumnSpans.map(n => [`span-${n}`, `span ${n} / span ${n}`])
    )
  },
  gridRow: {
    'span-auto': 'auto',
    'span-full': '1 / -1',
    ...Object.fromEntries(
      gridRowSpans.map(n => [`span-${n}`, `span ${n} / span ${n}`])
    )
  },
  gridTemplateColumns: {
    ...Object.fromEntries(
      gridColumns.map(n => [n, `repeat(${n}, minmax(0, 1fr))`])
    )
  },
  gridTemplateRows: {
    ...Object.fromEntries(
      gridRows.map(n => [n, `repeat(${n}, minmax(0, auto))`])
    )
  },
  height: {
    auto: 'auto',
    full: '100%',
    ...spacing
  },
  margin: {
    auto: 'auto',
    ...spacing
  },
  maxWidth: widths,
  width: {
    'auto': 'auto',
    '1/1': '100%',
    '1/2': '50%',
    '1/3': '33.3333333%',
    '1/4': '25%',
    '2/2': '100%',
    '2/3': '66.6666666%',
    '2/4': '50%',
    '3/3': '100%',
    '3/4': '75%',
    '4/4': '100%',
    'full': '100%',
    ...widths,
    ...spacing
  }
} as const
