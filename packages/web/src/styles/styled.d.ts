/* eslint-disable @typescript-eslint/no-empty-interface */
import "styled-components"

import { bitcasinoDark } from "@heathmont/moon-themes"

export type Theme = typeof bitcasinoDark

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
