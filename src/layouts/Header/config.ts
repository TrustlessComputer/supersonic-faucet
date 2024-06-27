export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  isNewWindow?: boolean;
  href?: string;
  isHide?: boolean;
  isTwitter?: boolean;
  isStrong?: boolean;
  subMenu?: any;
}

export const MenuBuild = {};
