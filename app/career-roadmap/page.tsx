import SessTop from "../components/SessTop"
import StepsList from "../components/StepsList"
import ProgressBox from "../components/ProgressBox"
import TherapistCard from "../components/TherapistCard"
import LearnLinks from "../components/LearnLinks"

export default function CareerRoadmap() {
  return (
    <div className="w-full pb-10">

      <SessTop />

      <div className="mx-6 mt-4 flex gap-5 items-start">

        <div className="flex-1 min-w-0">
          <StepsList />
        </div>

        <div className="w-80 shrink-0 flex flex-col gap-4">
          <ProgressBox />
          <TherapistCard />
          <LearnLinks />
        </div>

      </div>

    </div>
  )
}
