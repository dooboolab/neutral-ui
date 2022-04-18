import {css} from 'lit';

export const colors = css`
  :host {
    --black: #000;
    --white: #fff;
    --charcoalGray: #414141;
    --gray: #6d6d6d;
    --cloud: #c4c4c4;
    --lightGray: #ededed;
    --brightTurquoise: #00d9d5;
    --ruddy: #ff002e;
    --yellow: #ffeb14;
    --blueberry: #5398ff;
    --harlequin: #33ff2f;
    --apple: #151e22;
    --google: #e04238;
    --facebook: #345997;
    --negative: #ff7676;
    --positive: #00ba90;
    --primary: var(--black);
    --paper: var(--lightGray);
    --disabled: var(--cloud);
    --background: var(--white);
    --secondary: var(--brightTurquoise);
    --danger: var(--ruddy);
    --warning: var(--yellow);
    --light: var(--lightGray);
    --info: var(--blueberry);
    --success: var(--harlequin);
    --textPrimary: var(--black);
    --text: var(--black);
    --placeholder: var(--gray);
    --textDisabled: var(--charcoalGray);
    --textContrast: var(--white);
    --textValidation: var(--ruddy);
  }
`;
