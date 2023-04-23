import { ReactNode } from 'react';
import classnames from 'classnames/bind';
import styles from './Label.module.scss';

const cx = classnames.bind(styles);

type Props = {
  children: ReactNode;
}

function Label(props:Props) {
    return (
      <div className={ cx("label-box") }>{props.children}</div>
    )
}

export default Label;