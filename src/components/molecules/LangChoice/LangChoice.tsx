import { useState } from 'react';
import classnames from 'classnames/bind';
import styles from './LangChoice.module.scss';
import { Button } from "@components/atoms";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const cx = classnames.bind(styles);

function LangChoice() {
  const { t } = useTranslation();
  const [ open, setOpen ] = useState(false);

  const onToggle = () => {
    setOpen(!open)
  }

  const onClick = (lng: string) => {
    i18next.changeLanguage(lng).then();
  }

  return (
    <div className={ cx("LangChoice-container", { open }) }>
      <Button onClick={onToggle}>{ t('language') }</Button>
      <div className={ cx("LangChoice-box") }>
        <Button onClick={() => onClick('ko')}>한국어</Button>
        <Button onClick={() => onClick('en')}>English</Button>
        <Button onClick={() => onClick('kp')}>문화어</Button>
      </div>
    </div>
  )
}

export default LangChoice;