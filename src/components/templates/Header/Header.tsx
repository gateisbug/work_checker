import classnames from 'classnames/bind';
import styles from './Header.module.scss';
import { Label } from "@components/atoms";
import { useTranslation } from "react-i18next";
import { LangChoice } from "@components/molecules";

const cx = classnames.bind(styles);

function Header() {
  const { t } = useTranslation();

  return (
    <header className={ cx("Header") }>
      <Label typo='h5'>{ t('title') }</Label>
      <div style={{  height: '100%', flexGrow: '1' }} />
      <div style={{ display: 'flex', flexFlow: 'row nowrap', width: 'fit-content' }}>
        <LangChoice />
      </div>
    </header>
  )
}

export default Header;