import React from 'react'
import BuildBasics from './BuildBasics'
import Gym from './Gym'
import Treands from './Treands'
import Skill from './Skill'

const BuildWrapper = () => {
  return (
    <div>
      <div className="mx-6 mt-4 border flex gap-5 border-[#dadada] overflow-hidden rounded-xl p-5">
            <div className="flex flex-col gap-5 flex-1 min-w-0 ">
                <BuildBasics />
                <Gym />
            </div>
            <div className="w-97.5 shrink-0">
                <Treands therapistImg="/assets/treands/counselor.png" />
            <Skill />
            </div>
        </div>
    </div>
  )
}

export default BuildWrapper