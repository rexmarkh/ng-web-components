declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ls-header': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'ls-card': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'ls-dropdown': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'ls-footer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'ls-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
  
export declare class HeaderComponent extends HTMLElement {}
export declare class FooterComponent extends HTMLElement {}
export declare class CardComponent extends HTMLElement {}
export declare class DropdownComponent extends HTMLElement {}
export declare class ButtonComponent extends HTMLElement {}