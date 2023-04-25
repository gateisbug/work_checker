import { CSSProperties, ReactNode } from 'react';
import classnames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classnames.bind(styles);

type Props = {
  children?: ReactNode;
  style?: CSSProperties;
}

function Instance({ children, style=undefined }:Props) {
  return (
    <div className={ cx("instance-container") } style={style}>{children}</div>
  )
}

export default Instance;