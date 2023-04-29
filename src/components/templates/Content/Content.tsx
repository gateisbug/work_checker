import { Control, Preset, Schedule } from "@components/organisms";
import { TotalWork } from "@components/molecules";


function Content() {
  return (
    <div style={{ display: 'flex', flexFlow: 'column nowrap', gap: '16px' }}>
      <Preset />
      <Schedule />
      <TotalWork />
      <Control />
    </div>
  )
}

export default Content;