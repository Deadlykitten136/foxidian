export const themeColors = {
  light: {
    background: "#FFFFFF",
    surface: "#FDF8F5",
    surfaceElevated: "#FFF6ED",

    textPrimary: "#3B2A24",
    textSecondary: "#7A5C50",

    border: "#F0E0D6",

    brandPrimary: "#E85A2A",
    brandPrimaryDark: "#C4411F",

    accentWarm: "#F5E8DA",
    accentSoft: "#FFF6ED",

    shadow: "0 8px 24px rgba(59, 42, 36, 0.08)",
  },
  dark: {
    background: "#1A1412",
    surface: "#241C19",
    surfaceElevated: "#2E2420",

    textPrimary: "#FFF6ED",
    textSecondary: "#D8BFB2",

    border: "#4A3932",

    brandPrimary: "#E85A2A",
    brandPrimaryDark: "#C4411F",

    accentWarm: "#3A2A24",
    accentSoft: "#2A211D",

    shadow: "0 8px 24px rgba(0, 0, 0, 0.28)",
  },
} as const

export const radius = {
  sm: "10px",
  md: "18px",
  lg: "24px",
  pill: "999px",
} as const

export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
} as const

export const foxLines = [
  "Study with fox",
  "What in the fox?",
  "Foxing great!",
  "Stay sharp",
  "A needle a day keeps the doctor away",
  "Acupuncture: prove that stabbing someone can help",
] as const