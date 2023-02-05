import "styled-components";
import "styled-components";
import { lightTheme } from "../styles/Themes/light";

type ThemeType = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
