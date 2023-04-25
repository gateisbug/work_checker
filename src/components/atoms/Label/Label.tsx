import { CSSProperties, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames/bind';
import styles from './Label.module.scss';

const cx = classnames.bind(styles);

type Props = {
  typo?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'s1'|'s2'|'b1'|'b2'|'btn'|'cap';
  useSelect?: boolean;
  children: ReactNode;
  style?: CSSProperties;
}

function Label({
  typo='b1',
  useSelect=false,
  children,
  style=undefined,
}:Props) {
  const { i18n } = useTranslation('ko');

  return (
    <div className={ cx("label-box", typo, i18n.language, { useSelect }) } style={style}>
      {children}
    </div>
  )
}

export default Label;