import { Preset, Schedule } from "@components/organisms";
import TotalWork from "@components/molecules/TotalWork/TotalWork";


function Content() {
  return (
    <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
      <Preset />
      <Schedule />
      <TotalWork />
    </div>
  )
}

export default Content;