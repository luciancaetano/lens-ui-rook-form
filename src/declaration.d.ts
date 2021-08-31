/* eslint @typescript-eslint/no-empty-interface: 0 */
import { ThemeTypes } from './types';

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module 'styled-components' {
  export interface ILuifDefaultTheme extends ThemeTypes.IThemeSettings{
    //
  }
}
