import { argbFromHex, Hct, hexFromArgb } from "@material/material-color-utilities";
import { Accordion as MuiAccordion, AccordionDetails as MuiAccordionDetails, AccordionSummary as MuiAccordionSummary, Box, Container, Divider, Grid, Link, List, ListItem, Typography, Drawer as MuiDrawer, ListItemIcon, ListItemButton, Tooltip, ClickAwayListener, Fab } from "@mui/material";
import { useState } from "react";
import ConfiguredColorSelectorWithPalette from "./components/ConfiguredColorSelectorWithPalette";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MaterialThemeDisplay from "./components/MaterialThemeDisplay";
import Phone from "./components/Phone/Phone";
import ColorCircle from "./components/ColorCircle";
import { SketchPicker } from 'react-color';
import Download from '@mui/icons-material/Download';

const TONES = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 99, 100]
const SURFACE_TONES = [4, 6, 10, 12, 17, 22, 24, 87, 90, 92, 94, 96, 98, 100]
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


function convertToSurfaceTonalPalette(hexColor) {
  var hct = Hct.fromInt(argbFromHex(hexColor))
  return SURFACE_TONES
    .reduce((map, tone) => {
      map[tone] = hexFromArgb(Hct.from(hct.internalHue, hct.internalChroma, tone).argb)
      return map
    }, {})
}

function convertToTonalPalette(hexColor) {
  var hct = Hct.fromInt(argbFromHex(hexColor))
  return TONES
    .reduce((map, tone) => {
      map[tone] = hexFromArgb(Hct.from(hct.internalHue, hct.internalChroma, tone).argb)
      return map
    }, {})
}

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function DrawerListItem({ children, tooltip, color, colorChanged }) {
  const [open, setOpen] = useState(false);
  return (<>
    <ListItem disablePadding sx={{ display: 'block' }}>
      <Tooltip title={tooltip}>
        <ListItemButton onClick={() => { setOpen(!open) }}
          sx={{
            minHeight: 48,
            justifyContent: 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: 'auto',
              justifyContent: 'center',
            }}
          >
            {children}
          </ListItemIcon>
        </ListItemButton>
      </Tooltip>
    </ListItem>
    {open &&
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <Box position="fixed" zIndex={100}>
          <SketchPicker color={color} onChange={(val) => colorChanged(val.hex)} />
        </Box>
      </ClickAwayListener>
    }
  </>);
}



function App() {
  var pixels = 40;
  let [primary, setPrimary] = useState("#7F67BE");
  var [secondary, setSecondary] = useState('#FF7222');
  var [tertiary, setTertiary] = useState('#986977');
  var [error, setError] = useState('#DC362E');
  var [neutral, setNeutral] = useState('#79767D');
  var [neutralVariant, setNeutralVariant] = useState('#79747E');
  var [custom, setCustom] = useState('#2a5000');

  var primaryHexColorsByTone = convertToTonalPalette(primary);
  var secondaryHexColorsByTone = convertToTonalPalette(secondary);
  var tertiaryHexColorsByTone = convertToTonalPalette(tertiary);
  var errorHexColorsByTone = convertToTonalPalette(error);
  var neutralHexColorsByTone = convertToTonalPalette(neutral);
  var neutralHexColorsByToneForSurface = convertToSurfaceTonalPalette(neutral);
  var neutralVariantHexColorsByTone = convertToTonalPalette(neutralVariant);
  var customHexColorsByTone = convertToTonalPalette(custom);

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent">
        <List>
          <DrawerListItem tooltip="Primary" color={primary} colorChanged={setPrimary}>
            <ColorCircle pixels={36} color={primary} disableCopy />
          </DrawerListItem>
          <DrawerListItem tooltip="Secondary" color={secondary} colorChanged={setSecondary}>
            <ColorCircle pixels={36} color={secondary} disableCopy />
          </DrawerListItem>
          <DrawerListItem tooltip="Tertiary" color={tertiary} colorChanged={setTertiary}>
            <ColorCircle pixels={36} color={tertiary} disableCopy />
          </DrawerListItem>
          <DrawerListItem tooltip="Error" color={error} colorChanged={setError}>
            <ColorCircle pixels={36} color={error} disableCopy />
          </DrawerListItem>
          <DrawerListItem tooltip="Neutral" color={neutral} colorChanged={setNeutral}>
            <ColorCircle pixels={36} color={neutral} disableCopy />
          </DrawerListItem>
          <DrawerListItem tooltip="Neutral Variant" color={neutralVariant} colorChanged={setNeutralVariant}>
            <ColorCircle pixels={36} color={neutralVariant} disableCopy />
          </DrawerListItem>
          <DrawerListItem tooltip="Custom" color={custom} colorChanged={setCustom}>
            <ColorCircle pixels={36} color={custom} disableCopy />
          </DrawerListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} >
            <Typography>Tonal Palettes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Container>
              <Box>
                <List>
                  <ListItem>
                    <Link href="https://material.io/blog/science-of-color-design">Material 3 Color Theory Development - by James O'Leary</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://github.com/material-foundation/material-color-utilities/tree/main/typescript">GitHub reference for O'Leary's Development</Link>
                  </ListItem>
                </List>
              </Box>
              <Divider />
              <Box mt={2}>
                <ConfiguredColorSelectorWithPalette color={primary} text={"Primary"} pixels={pixels} setColor={setPrimary} hexColorsByTone={primaryHexColorsByTone} />
                <ConfiguredColorSelectorWithPalette color={secondary} text={"Secondary"} pixels={pixels} setColor={setSecondary} hexColorsByTone={secondaryHexColorsByTone} />
                <ConfiguredColorSelectorWithPalette color={tertiary} text={"Tertiary"} pixels={pixels} setColor={setTertiary} hexColorsByTone={tertiaryHexColorsByTone} />
                <ConfiguredColorSelectorWithPalette color={error} text={"Error"} pixels={pixels} setColor={setError} hexColorsByTone={errorHexColorsByTone} />
                <ConfiguredColorSelectorWithPalette color={neutral} text={"Neutral"} pixels={pixels} setColor={setNeutral} hexColorsByTone={neutralHexColorsByTone} />
                <ConfiguredColorSelectorWithPalette color={neutralVariant} text={"Neutral Variant"} pixels={pixels} setColor={setNeutralVariant} hexColorsByTone={neutralVariantHexColorsByTone} />
                <ConfiguredColorSelectorWithPalette color={custom} text={"Custom"} pixels={pixels} setColor={setCustom} hexColorsByTone={customHexColorsByTone} />
              </Box>
            </Container>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} >
            <Typography>Light and Dark Themes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Grid container columnSpacing={4}>
                <Grid item md={6}>
                  <Grid container rowSpacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h5">Light</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <MaterialThemeDisplay text="Primary" hexColorsByTone={primaryHexColorsByTone} pixels={pixels} paletteValues={[40, 100, 90, 10]} />
                    </Grid>
                    <Grid item xs={12}>
                      <MaterialThemeDisplay text="Secondary" hexColorsByTone={secondaryHexColorsByTone} pixels={pixels} paletteValues={[40, 100, 90, 10]} />
                    </Grid>
                    <Grid item xs={12}>
                      <MaterialThemeDisplay text="Tertiary" hexColorsByTone={tertiaryHexColorsByTone} pixels={pixels} paletteValues={[40, 100, 90, 10]} />
                    </Grid>
                    <Grid item xs={12}>
                      <MaterialThemeDisplay text="Error" hexColorsByTone={errorHexColorsByTone} pixels={pixels} paletteValues={[40, 100, 90, 10]} />
                    </Grid>
                    <Grid item xs={12}>
                      <MaterialThemeDisplay text="Background" hexColorsByTone={neutralHexColorsByTone} pixels={pixels} paletteValues={[99, 10, 99, 10]} />
                    </Grid>
                    <Grid item xs={12}>
                      <MaterialThemeDisplay text="Background Variant" hexColorsByTone={neutralVariantHexColorsByTone} pixels={pixels} paletteValues={[90, 30, 50, 100]} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={6}>
                  <Grid container rowSpacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h5">Dark</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <MaterialThemeDisplay text="Primary" hexColorsByTone={primaryHexColorsByTone} pixels={pixels} paletteValues={[80, 20, 30, 90]} />
                    </Grid>
                    <Grid item xs={12}>
                      <MaterialThemeDisplay text="Secondary" hexColorsByTone={secondaryHexColorsByTone} pixels={pixels} paletteValues={[80, 20, 30, 90]} />
                    </Grid>
                    <Grid item xs={12}>
                      <MaterialThemeDisplay text="Tertiary" hexColorsByTone={tertiaryHexColorsByTone} pixels={pixels} paletteValues={[80, 20, 30, 90]} />
                    </Grid>
                    <Grid item xs={12}>
                      <MaterialThemeDisplay text="Error" hexColorsByTone={errorHexColorsByTone} pixels={pixels} paletteValues={[80, 20, 30, 90]} />
                    </Grid>
                    <Grid item xs={12}>
                      <MaterialThemeDisplay text="Background" hexColorsByTone={neutralHexColorsByTone} pixels={pixels} paletteValues={[10, 90, 10, 80]} />
                    </Grid>
                    <Grid item xs={12}>
                      <MaterialThemeDisplay text="Background Variant" hexColorsByTone={neutralVariantHexColorsByTone} pixels={pixels} paletteValues={[30, 80, 60, 0]} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Container sx={{ my: 4 }}>
          <Grid container>
            <Grid item xs={6}>
              <Typography>Dark</Typography>
              <Phone
                primary={primaryHexColorsByTone[80]}
                onPrimary={primaryHexColorsByTone[20]}
                primaryContainer={primaryHexColorsByTone[30]}
                onPrimaryContainer={primaryHexColorsByTone[90]}
                secondary={secondaryHexColorsByTone[80]}
                onSecondary={secondaryHexColorsByTone[20]}
                surface={neutralHexColorsByTone[10]}
                onSurface={neutralHexColorsByTone[80]}
                surfaceContainer={neutralHexColorsByToneForSurface[12]}
                onSurfaceContainer={neutralHexColorsByTone[90]}
                surfaceContainerHigh={neutralHexColorsByToneForSurface[17]}
                error={errorHexColorsByTone[80]}
                onError={errorHexColorsByTone[20]}
                custom={customHexColorsByTone[80]}
                onCustom={customHexColorsByTone[20]}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography>Light</Typography>
              <Phone
                primary={primaryHexColorsByTone[40]}
                onPrimary={primaryHexColorsByTone[100]}
                primaryContainer={primaryHexColorsByTone[90]}
                onPrimaryContainer={primaryHexColorsByTone[10]}
                secondary={secondaryHexColorsByTone[40]}
                onSecondary={secondaryHexColorsByTone[100]}
                surface={neutralHexColorsByTone[99]}
                onSurface={neutralHexColorsByTone[10]}
                surfaceContainer={neutralHexColorsByToneForSurface[94]}
                onSurfaceContainer={neutralHexColorsByTone[10]}
                surfaceContainerHigh={neutralHexColorsByToneForSurface[92]}
                error={errorHexColorsByTone[40]}
                onError={errorHexColorsByTone[100]}
                custom={customHexColorsByTone[40]}
                onCustom={customHexColorsByTone[100]}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Fab sx={{ position: 'fixed', bottom: 48, right: 48 }} onClick={() => {
        const makeString = (theme = "light", feature = "primary", color) => `val md_theme_${theme}_${feature} = Color(0xFF${color.replace("#", "")})`;
        const element = document.createElement("a");
        const content = [
          "package com.example.compose",
          "",
          "import androidx.compose.ui.graphics.Color",
          "import androidx.compose.material3.lightColorScheme",
          "import androidx.compose.material3.darkColorScheme",
          "",
          makeString("light", "primary", primaryHexColorsByTone[40]),
          makeString("light", "onPrimary", primaryHexColorsByTone[100]),
          makeString("light", "primaryContainer", primaryHexColorsByTone[90]),
          makeString("light", "onPrimaryContainer", primaryHexColorsByTone[10]),
          makeString("light", "secondary", secondaryHexColorsByTone[40]),
          makeString("light", "onSecondary", secondaryHexColorsByTone[100]),
          makeString("light", "secondaryContainer", secondaryHexColorsByTone[90]),
          makeString("light", "onSecondaryContainer", secondaryHexColorsByTone[10]),
          makeString("light", "tertiary", tertiaryHexColorsByTone[40]),
          makeString("light", "onTertiary", tertiaryHexColorsByTone[100]),
          makeString("light", "tertiaryContainer", tertiaryHexColorsByTone[90]),
          makeString("light", "onTertiaryContainer", tertiaryHexColorsByTone[10]),
          makeString("light", "error", errorHexColorsByTone[40]),
          makeString("light", "onError", errorHexColorsByTone[100]),
          makeString("light", "errorContainer", errorHexColorsByTone[90]),
          makeString("light", "onErrorContainer", errorHexColorsByTone[10]),
          makeString("light", "background", neutralHexColorsByTone[99]),
          makeString("light", "onBackground", neutralHexColorsByTone[10]),
          makeString("light", "surface", neutralHexColorsByTone[99]),
          makeString("light", "onSurface", neutralHexColorsByTone[10]),
          makeString("light", "surfaceVariant", neutralVariantHexColorsByTone[90]),
          makeString("light", "onSurfaceVariant", neutralVariantHexColorsByTone[30]),
          makeString("light", "outline", neutralVariantHexColorsByTone[50]),
          "",
          makeString("dark", "primary", primaryHexColorsByTone[80]),
          makeString("dark", "onPrimary", primaryHexColorsByTone[20]),
          makeString("dark", "primaryContainer", primaryHexColorsByTone[30]),
          makeString("dark", "onPrimaryContainer", primaryHexColorsByTone[90]),
          makeString("dark", "secondary", secondaryHexColorsByTone[80]),
          makeString("dark", "onSecondary", secondaryHexColorsByTone[20]),
          makeString("dark", "secondaryContainer", secondaryHexColorsByTone[30]),
          makeString("dark", "onSecondaryContainer", secondaryHexColorsByTone[90]),
          makeString("dark", "tertiary", tertiaryHexColorsByTone[80]),
          makeString("dark", "onTertiary", tertiaryHexColorsByTone[20]),
          makeString("dark", "tertiaryContainer", tertiaryHexColorsByTone[30]),
          makeString("dark", "onTertiaryContainer", tertiaryHexColorsByTone[90]),
          makeString("dark", "error", errorHexColorsByTone[80]),
          makeString("dark", "onError", errorHexColorsByTone[20]),
          makeString("dark", "errorContainer", errorHexColorsByTone[30]),
          makeString("dark", "onErrorContainer", errorHexColorsByTone[90]),
          makeString("dark", "background", neutralHexColorsByTone[10]),
          makeString("dark", "onBackground", neutralHexColorsByTone[90]),
          makeString("dark", "surface", neutralHexColorsByTone[10]),
          makeString("dark", "onSurface", neutralHexColorsByTone[80]),
          makeString("dark", "surfaceVariant", neutralVariantHexColorsByTone[30]),
          makeString("dark", "onSurfaceVariant", neutralVariantHexColorsByTone[80]),
          makeString("dark", "outline", neutralVariantHexColorsByTone[60]),
          "",
          "private val LightColors = lightColorScheme(",
          "    primary = md_theme_light_primary,",
          "    onPrimary = md_theme_light_onPrimary,",
          "    primaryContainer = md_theme_light_primaryContainer,",
          "    onPrimaryContainer = md_theme_light_onPrimaryContainer,",
          "    secondary = md_theme_light_secondary,",
          "    onSecondary = md_theme_light_onSecondary,",
          "    secondaryContainer = md_theme_light_secondaryContainer,",
          "    onSecondaryContainer = md_theme_light_onSecondaryContainer,",
          "    tertiary = md_theme_light_tertiary,",
          "    onTertiary = md_theme_light_onTertiary,",
          "    tertiaryContainer = md_theme_light_tertiaryContainer,",
          "    onTertiaryContainer = md_theme_light_onTertiaryContainer,",
          "    error = md_theme_light_error,",
          "    onError = md_theme_light_onError,",
          "    errorContainer = md_theme_light_errorContainer,",
          "    onErrorContainer = md_theme_light_onErrorContainer,",
          "    outline = md_theme_light_outline,",
          "    background = md_theme_light_background,",
          "    onBackground = md_theme_light_onBackground,",
          "    surface = md_theme_light_surface,",
          "    onSurface = md_theme_light_onSurface,",
          "    surfaceVariant = md_theme_light_surfaceVariant,",
          "    onSurfaceVariant = md_theme_light_onSurfaceVariant,",
          ")",
          "",
          "private val DarkColors = darkColorScheme(",
          "    primary = md_theme_dark_primary,",
          "    onPrimary = md_theme_dark_onPrimary,",
          "    primaryContainer = md_theme_dark_primaryContainer,",
          "    onPrimaryContainer = md_theme_dark_onPrimaryContainer,",
          "    secondary = md_theme_dark_secondary,",
          "    onSecondary = md_theme_dark_onSecondary,",
          "    secondaryContainer = md_theme_dark_secondaryContainer,",
          "    onSecondaryContainer = md_theme_dark_onSecondaryContainer,",
          "    tertiary = md_theme_dark_tertiary,",
          "    onTertiary = md_theme_dark_onTertiary,",
          "    tertiaryContainer = md_theme_dark_tertiaryContainer,",
          "    onTertiaryContainer = md_theme_dark_onTertiaryContainer,",
          "    error = md_theme_dark_error,",
          "    onError = md_theme_dark_onError,",
          "    errorContainer = md_theme_dark_errorContainer,",
          "    onErrorContainer = md_theme_dark_onErrorContainer,",
          "    outline = md_theme_dark_outline,",
          "    background = md_theme_dark_background,",
          "    onBackground = md_theme_dark_onBackground,",
          "    surface = md_theme_dark_surface,",
          "    onSurface = md_theme_dark_onSurface,",
          "    surfaceVariant = md_theme_dark_surfaceVariant,",
          "    onSurfaceVariant = md_theme_dark_onSurfaceVariant,",
          ")",
        ].join("\r\n");
        const file = new Blob([content], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "Color.kt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        document.body.removeChild(element);
      }}>
        <Download />
      </Fab>
    </Box>
  );
}

export default App;
