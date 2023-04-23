import { ReactNode } from 'react';
import classnames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classnames.bind(styles);

type Props = {
  children: ReactNode;
}

function Button(props:Props) {
    return (
      <div className={ cx('button-container') }>
        {props.children}
      </div>
    )
}

export default Button;