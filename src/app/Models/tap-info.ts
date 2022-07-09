export interface TapInfo {
  tapName: string;
  tapDropdownItems: TapDropdownItems[];
  as: string;
}
interface TapDropdownItems {
  tapName: string;
  tapIcon: string;
  tapIconColor: string;
}
