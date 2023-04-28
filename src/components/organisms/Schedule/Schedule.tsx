import classnames from 'classnames/bind';
import styles from './Schedule.module.scss';
import { Label } from "@components/atoms";
import { StoreInput, WorkLabel } from "@components/molecules";
import { useTranslation } from "react-i18next";

const cx = classnames.bind(styles);

function Schedule() {
  const { t } = useTranslation();

  return (
    <table className={ cx('table', 'table-container') }>
      <thead className={ cx('table', 'table-header') }>
        <tr className={ cx('table', 'table-row') }>
          <th className={ cx('table', 'table-cell') }><Label typo='s1'>{ t('date') }</Label></th>
          <th className={ cx('table', 'table-cell') }><Label typo='s1'>{ t('arrive') }</Label></th>
          <th className={ cx('table', 'table-cell') }><Label typo='s1'>{ t('leave') }</Label></th>
          <th className={ cx('table', 'table-cell') }><Label typo='s1'>{ t('work') }</Label></th>
          <th className={ cx('table', 'table-cell') }><Label typo='s1'>{ t('break') }</Label></th>
        </tr>
      </thead>
      <tbody className={ cx('table', 'table-body') }>
        <tr className={ cx('table', 'table-row') }>
          <td className={ cx('table', 'table-cell') }>
            <Label typo='s1'>{ t('monday') }</Label>
          </td>
          <td className={ cx('table', 'table-cell') }>
            <StoreInput index={0} type='arrive' />
          </td>
          <td className={ cx('table', 'table-cell') }>
            <StoreInput index={0} type='leave' />
          </td>
          <td className={ cx('table', 'table-cell') }>
            <WorkLabel index={0} />
          </td>
          <td className={ cx('table', 'table-cell') }>
            <StoreInput index={0} type='break' />
          </td>
        </tr>
        <tr className={ cx('table', 'table-row') }>
          <td className={ cx('table', 'table-cell') }>
            <Label typo='s1'>{ t('tuesday') }</Label>
          </td>
          <td className={ cx('table', 'table-cell') }>
            <StoreInput index={1} type='arrive' />
          </td>
          <td className={ cx('table', 'table-cell') }>
            <StoreInput index={1} type='leave' />
          </td>
          <td className={ cx('table', 'table-cell') }>
            <WorkLabel index={1} />
          </td>
          <td className={ cx('table', 'table-cell') }>
            <StoreInput index={1} type='break' />
          </td>
        </tr>
        <tr className={ cx('table', 'table-row') }>
          <td className={ cx('table', 'table-cell') }>
            <Label typo='s1'>{ t('wednesday') }</Label>
          </td>
          <td className={ cx('table', 'table-cell') }>
            <StoreInput index={2} type='arrive' />
          </td>
          <td className={ cx('table', 'table-cell') }>
            <StoreInput index={2} type='leave' />
          </td>
          <td className={ cx('table', 'table-cell') }>
            <WorkLabel index={2} />
          </td>
          <td className={ cx('table', 'table-cell') }>
            <StoreInput index={2} type='break' />
          </td>
        </tr>
        <tr className={ cx('table', 'table-row') }>
          <td className={ cx('table', 'table-cell') }>
            <Label typo='s1'>{ t('thursday') }</Label>
          </td>
          <td className={ cx('table', 'table-cell') }>
            <StoreInput index={3} type='arrive' />
          </td>
          <td className={ cx('table', 'table-cell') }>
            <StoreInput index={3} type='leave' />
          </td>
          <td className={ cx('table', 'table-cell') }>
            <WorkLabel index={3} />
          </td>
          <td className={ cx('table', 'table-cell') }>
            <StoreInput index={3} type='break' />
          </td>
        </tr>
        <tr className={ cx('table', 'table-row') }>
          <td className={ cx('table', 'table-cell') }>
            <Label typo='s1'>{ t('friday') }</Label>
          </td>
          <td className={ cx('table', 'table-cell') }>
            <StoreInput index={4} type='arrive' />
          </td>
          <td className={ cx('table', 'table-cell') }>
            <StoreInput index={4} type='leave' />
          </td>
          <td className={ cx('table', 'table-cell') }>
            <WorkLabel index={4} />
          </td>
          <td className={ cx('table', 'table-cell') }>
            <StoreInput index={4} type='break' />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Schedule;