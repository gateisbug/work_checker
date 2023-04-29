import classnames from 'classnames/bind';
import styles from './Preset.module.scss';
import { PresetInput } from "@components/molecules";

const cx = classnames.bind(styles);

function Preset() {
    return (
      <div className={ cx("preset-container") }>
        <div style={{ maxWidth: 125, minWidth: 100, height: '40px' }} />
        <PresetInput type='arrive' />
        <div style={{ width: 200, height: '40px' }} />
        <div style={{ width: 200, height: '40px' }} />
        <PresetInput type='break' />
      </div>
    )
}

export default Preset;