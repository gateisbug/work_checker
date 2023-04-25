import { CSSProperties, ReactNode } from 'react';
import classnames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classnames.bind(styles);

type Props = {
  children?: ReactNode;
  style?: CSSProperties;
}

function Cell({ children, style=undefined }:Props) {
    return (
      <div className={ cx("cell-container") } style={style}>{children}</div>
    )
}

export default Cell;