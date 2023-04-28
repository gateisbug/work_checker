import classnames from 'classnames/bind';
import styles from './Header.module.scss';
import { Button, Label } from "@components/atoms";
import i18next from "i18next";

const cx = classnames.bind(styles);

function Header() {
  const onClick = (lng: string) => {
    i18next.changeLanguage(lng).then();
  }

  return (
    <header className={ cx("Header") }>
      <Label typo='h5'>Schedulator</Label>
      <div style={{ width: '100%', height: '100%', flexGrow: '1' }} />
      <div style={{ display: 'flex', flexFlow: 'row nowrap', width: 'fit-content' }}>
        <Button variant='contain' onClick={() => onClick('ko')}>KO</Button>
        <Button variant='outline' onClick={() => onClick('en')}>EN</Button>
        <Button onClick={() => onClick('kp')}>KP</Button>
      </div>
    </header>
  )
}

export default Header;