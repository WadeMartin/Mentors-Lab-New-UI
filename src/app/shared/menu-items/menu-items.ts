import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      }
      ,
      {
        state: 'members-management',
        short_label: 'M',
        name: 'Members Management',
        type: 'link',
        icon: 'icofont icofont-ui-user-group'
      }
      ,
      {
        state: 'requesting-members',
        short_label: 'R',
        name: 'Requesting Members',
        type: 'link',
        icon: 'icofont icofont-user-alt-7'
      },
      
      {
        state: 'subscribe',
        short_label: 'S',
        name: 'Subscription',
        type: 'link',
        icon: 'icofont icofont-stylish-up'
      }
    ],
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
