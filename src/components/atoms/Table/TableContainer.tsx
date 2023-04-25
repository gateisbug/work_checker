import { CSSProperties, ReactNode } from 'react';
import classnames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classnames.bind(styles);

type Props = {
  children?: ReactNode;
  style?: CSSProperties;
}

function TableContainer({ children, style=undefined }:Props) {
  return (
    <div className={ cx("table-container") } style={style}>
      <div className={ cx("table-frame-layout") }>
        <div className={ cx("table-content-layout") }>
          <div className={ cx("table-record-area") }>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableContainer;