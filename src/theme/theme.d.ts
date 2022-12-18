import "styled-components"
import { ThemeInterface } from "./index";

type ThemeInterface = typeof theme

declare module "styled-components" {
    interface DefaultTheme extends ThemeInterface {}
}