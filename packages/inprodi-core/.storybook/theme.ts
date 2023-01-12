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
};