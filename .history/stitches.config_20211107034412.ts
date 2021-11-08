import { createCss, createStitches, StitchesCss } from '@stitches/react';
export type { StitchesVariants, StitchesCss,  VariantProps } from '@stitches/react';
import type * as Stitches from '@stitches/react';

import { blue } from '@radix-ui/colors'
  
const stitches = createCss({
  theme: {
    colors: {
        violet100: '#151718',
        violet200: '#1a1d1e',
        violet300: '#202425',
        violet400: '#26292b',
        violet500: '#2b2f31',
        violet600: '#313538',
        violet700: '#3a3f42',
        violet800: '#4c5155',
        violet900: '#697177',
        violet1000: '#787f85',
        violet1100: '#9ba1a6',
        violet1200: '#ecedee',

        mauve100: 'hsl(246 6% 9%)',
        mauve200: 'hsl(240 5% 11%)',
        mauve300: 'hsl(241 5% 14%)',
        mauve400: 'hsl(242 4% 16%)',
        mauve500: 'hsl(243 4% 18%)',
        mauve600: 'hsl(244 4% 21%)',
        mauve700: 'hsl(245 4% 25%)',
        mauve800: 'hsl(247 4% 32%)',
        mauve900: 'hsl(252 4% 45%)',
        mauve1000: 'hsl(247 3% 50%)',
        mauve1100: 'hsl(253 4% 63%)',
        mauve1200: 'hsl(256 6% 93%)',
      
        line: '$mauve300',
        text: '$violet1200',
        border: '$violet400',
        border1: '$violet500',
        border2: '$violet600',
        border3: '$violet700',
        accent: '$mauve1000',
        accentDulled: '$mauve900',
        accentHover: '$mauve1100',
        accentPressed: '$mauve1200',
        accentContrast: '$mauve1200',
        darkestPanel: '$mauve800',
        darkPanel: '$mauve700',
        panel: '$mauve300',
        lightPanel: '$mauve400',
        lightestPanel: '$mauve500',
        canvas: '$mauve300',
        loContrast: `hsl(255,5%,4%)`,
        hiContrast: 'hsl(206,2%,93%)',
        neutral: '$violet100',
        funky: 'rgba(255,155,155,1.0)',
        funkyText: 'rgba(255,255,200,0.8)'
    },    
    fonts: {
        untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
        mono: 'Söhne Mono, menlo, monospace',
      },
      space: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '35px',
        7: '45px',
        8: '65px',
        9: '80px',
      },
      sizes: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '35px',
        7: '45px',
        8: '65px',
        9: '80px',
      },
      // space: {
      //   1: '4px',
      //   2: '8px',
      //   3: '16px',
      //   4: '20px',
      //   5: '24px',
      //   6: '32px',
      //   7: '48px',
      //   8: '64px',
      //   9: '80px',
      // },
      // sizes: {
      //   1: '4px',
      //   2: '8px',
      //   3: '16px',
      //   4: '20px',
      //   5: '24px',
      //   6: '32px',
      //   7: '48px',
      //   8: '64px',
      //   9: '80px',
      // },
      fontSizes: {
        1: '12px',
        2: '13px',
        3: '15px',
        4: '17px',
        5: '19px',
        6: '21px',
        7: '27px',
        8: '35px',
        9: '59px',
      },
      // fontSizes: {
      //   1: '11px',
      //   2: '12px',
      //   3: '15px',
      //   4: '17px',
      //   5: '20px',
      //   6: '22px',
      //   7: '28px',
      //   8: '36px',
      //   9: '60px',
      // },
      radii: {
        1: '4px',
        2: '6px',
        3: '8px',
        4: '12px',
        round: '50%',
        pill: '9999px',
      },
      zIndices: {
        1: '100',
        2: '200',
        3: '300',
        4: '400',
        max: '999',
      },
    },
    media: {
      bp1: '(min-width: 520px)',
      bp2: '(min-width: 900px)',
      bp3: '(min-width: 1200px)',
      bp4: '(min-width: 1800px)',
      motion: '(prefers-reduced-motion)',
      hover: '(any-hover: hover)',
      dark: '(prefers-color-scheme: dark)',
      light: '(prefers-color-scheme: light)',
    },
    utils: {
      p: (value: Stitches.PropertyValue<'padding'>) => ({
        padding: value,
      }),
      pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
      }),
      pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
        paddingRight: value,
      }),
      pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
      }),
      px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
  
      m: (value: Stitches.PropertyValue<'margin'>) => ({
        margin: value,
      }),
      mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
      }),
      mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
        marginRight: value,
      }),
      mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
      }),
      mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
  
      ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),
  
      fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({ flexDirection: value }),
      fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),
  
      ai: (value: Stitches.PropertyValue<'alignItems'>) => ({ alignItems: value }),
      ac: (value: Stitches.PropertyValue<'alignContent'>) => ({ alignContent: value }),
      jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({ justifyContent: value }),
      as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
      fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
      fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({ flexShrink: value }),
      fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),
  
      bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
        backgroundColor: value,
      }),
  
      br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
        borderRadius: value,
      }),
      btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
        borderTopRightRadius: value,
      }),
      bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
        borderBottomRightRadius: value,
      }),
      bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
        borderBottomLeftRadius: value,
      }),
      btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
        borderTopLeftRadius: value,
      }),
  
      bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),
  
      lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({ lineHeight: value }),
  
      ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
      oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),
  
      pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({ pointerEvents: value }),
      us: (value: Stitches.PropertyValue<'userSelect'>) => ({
        WebkitUserSelect: value,
        userSelect: value,
      }),
  
      userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
        WebkitUserSelect: value,
        userSelect: value,
      }),
  
      size: (value: Stitches.PropertyValue<'width'>) => ({
        width: value,
        height: value,
      }),
  
      appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
        WebkitAppearance: value,
        appearance: value,
      }),
      backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
        WebkitBackgroundClip: value,
        backgroundClip: value,
      }),
    },
});
  
  export type CSS = Stitches.CSS<typeof config>;
  
// export type CSS = StitchesCss<typeof stitches>;
export const { styled, css, theme, getCssString, global, keyframes, config } = stitches;
export const utils = config.utils;

export const defaultDark = theme('default-dark', {
    colors: {
        violet100: '#151718',
        violet200: '#1a1d1e',
        violet300: '#202425',
        violet400: '#26292b',
        violet500: '#2b2f31',
        violet600: '#313538',
        violet700: '#3a3f42',
        violet800: '#4c5155',
        violet900: '#697177',
        violet1000: '#787f85',
        violet1100: '#9ba1a6',
        violet1200: '#ecedee',

        mauve100: 'hsl(246 6% 9%)',
        mauve200: 'hsl(240 5% 11%)',
        mauve300: 'hsl(241 5% 14%)',
        mauve400: 'hsl(242 4% 16%)',
        mauve500: 'hsl(243 4% 18%)',
        mauve600: 'hsl(244 4% 21%)',
        mauve700: 'hsl(245 4% 25%)',
        mauve800: 'hsl(247 4% 32%)',
        mauve900: 'hsl(252 4% 45%)',
        mauve1000: 'hsl(247 3% 50%)',
        mauve1100: 'hsl(253 4% 63%)',
        mauve1200: 'hsl(256 6% 93%)',
      
        line: '$mauve300',
        text: '$violet1200',
        border: '$violet400',
        border1: '$violet500',
        border2: '$violet600',
        border3: '$violet700',
        accent: '$mauve1000',
        accentDulled: '$mauve900',
        accentHover: '$mauve1100',
        accentPressed: '$mauve1200',
        accentContrast: '$mauve1200',
        darkestPanel: '$mauve800',
        darkPanel: '$mauve700',
        panel: '$mauve300',
        lightPanel: '$mauve400',
        lightestPanel: '$mauve500',
        canvas: '$mauve300',
        loContrast: `hsl(255,5%,4%)`,
        hiContrast: 'hsl(206,2%,93%)',
        neutral: '$violet100',
        funky: 'rgba(255,155,155,1.0)',
        funkyText: 'rgba(255,255,200,0.8)'
    },    
});

export const theme1Light = theme('theme1-light', {
    colors: {
        violet100: 'hsl(255 65% 99%)',
        violet200: 'hsl(252 100% 99%)',
        violet300: 'hsl(252 96% 97%)',
        violet400: 'hsl(252 91% 95%)',
        violet500: 'hsl(252 85% 93%)',
        violet600: 'hsl(252 77% 89%)',
        violet700: 'hsl(252 71% 83%)',
        violet800: 'hsl(252 68% 76%)',
        violet900: 'hsl(252 56% 57%)',
        violet1000: 'hsl(251 48% 53%)',
        violet1100: 'hsl(250 43% 48%)',
        violet1200: 'hsl(254 60% 18%)',

        mauve100: 'hsl(300 20% 99%)',
        mauve200: 'hsl(300 8% 97%)',
        mauve300: 'hsl(294 5% 95%)',
        mauve400: 'hsl(289 4% 93%)',
        mauve500: 'hsl(283 4% 91%)',
        mauve600: 'hsl(278 4% 89%)',
        mauve700: 'hsl(271 3% 86%)',
        mauve800: 'hsl(255 3% 78%)',
        mauve900: 'hsl(252 4% 57%)',
        mauve1000: 'hsl(253 3% 53%)',
        mauve1100: 'hsl(252 4% 44%)',
        mauve1200: 'hsl(260 25% 11%)',

        line: '$mauve300',
        text: '$mauve1200',
        border: '$violet800',
        border1: '$violet900',
        border2: '$violet1000',
        border3: '$violet1100',
        accent: '$violet900',
        accentDulled: '$violet700',
        accentHover: '$violet1000',
        accentPressed: '$violet1100',
        accentContrast: '$mauve1200',
        darkestPanel: '$mauve400',
        darkPanel: '$mauve500',
        panel: '$mauve600',
        lightPanel: '$mauve700',
        lightestPanel: '$mauve800',
        canvas: '$mauve600',
        loContrast: `$violet100`,
        hiContrast: '$mauve100',
        neutral: '$violet100',
        funky: 'rgba(255,100,100,1.0)',
        funkyText: 'rgba(250,100,100,1.0)'
    }
}); 


export const theme1Dark = theme('theme1-dark', {
    colors: {
        violet100: 'hsl(250 20% 10%)',
        violet200: 'hsl(255 30% 12%)',
        violet300: 'hsl(253 37% 18%)',
        violet400: 'hsl(252 40% 22%)',
        violet500: 'hsl(252 42% 26%)',
        violet600: 'hsl(251 44% 31%)',
        violet700: 'hsl(250 46% 38%)',
        violet800: 'hsl(250 51% 51%)',
        violet900: 'hsl(252 56% 57%)',
        violet1000: 'hsl(251 63% 63%)',
        violet1100: 'hsl(250 95% 76%)',
        violet1200: 'hsl(252 87% 96%)',
       
        mauve100: 'hsl(246 6% 9%)',
        mauve200: 'hsl(240 5% 11%)',
        mauve300: 'hsl(241 5% 14%)',
        mauve400: 'hsl(242 4% 16%)',
        mauve500: 'hsl(243 4% 18%)',
        mauve600: 'hsl(244 4% 21%)',
        mauve700: 'hsl(245 4% 25%)',
        mauve800: 'hsl(247 4% 32%)',
        mauve900: 'hsl(252 4% 45%)',
        mauve1000: 'hsl(247 3% 50%)',
        mauve1100: 'hsl(253 4% 63%)',
        mauve1200: 'hsl(256 6% 93%)',

        line: '$mauve300',
        text: '$violet1200',
        border: '$violet400',
        border1: '$violet500',
        border2: '$violet600',
        border3: '$violet700',
        accent: '$violet800',
        accentDulled: '$violet700',
        accentHover: '$violet900',
        accentPressed: '$violet1000',
        accentContrast: '$mauve1200',
        darkestPanel: '$mauve400',
        darkPanel: '$mauve500',
        panel: '$mauve600',
        lightPanel: '$mauve700',
        lightestPanel: '$mauve800',
        canvas: '$mauve600',
        loContrast: `hsl(260,80%,10%)`,
        hiContrast: 'hsl(206,2%,93%)',
        neutral: '$violet100',
        funky: 'rgba(0,155,155,1.0)',
        funkyText: 'rgba(0,250,250,1.0)'
    }
}); 