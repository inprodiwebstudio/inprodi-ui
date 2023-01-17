// theme.ts file
import type { MantineThemeOverride } from '@mantine/core';

// export your theme object
export const theme: MantineThemeOverride = {
  primaryShade : 6,
  fontFamily   : "'Montserrat', sans-serif",
  primaryColor : "primary",
  colorScheme : "dark",
  colors       : {
    primary : [ "#EAECF6", "#D4D9ED", "#AAB4DC", "#95A1D3", "#7F8ECA", "#5569B9", "#2A43A7", "#223686", "#192864", "#152254" ],
  },
  fontSizes : {
		xl : 20,
		lg : 16,
		md : 14,
		sm : 12,
		xs : 10,
	},
	lineHeight : "155%",
	headings   : {
		sizes : {
			h1 : {
				fontSize   : 32,
				fontWeight : 600,
				lineHeight : "155%",
			},
			h2 : {
				fontSize   : 26,
				fontWeight : 600,
				lineHeight : "155%",
			},
			h3 : {
				fontSize   : 20,
				fontWeight : 600,
				lineHeight : "155%",
			},
			h4 : {
				fontSize   : 16,
				fontWeight : 600,
				lineHeight : "155%",
			},
			h5 : {
				fontSize   : 14,
				fontWeight : 600,
				lineHeight : "155%",
			},
			h6 : {
				fontSize   : 12,
				fontWeight : 600,
				lineHeight : "155%",
			},
		},
	},
};