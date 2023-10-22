import React from 'react'
import CampSite from '../CampSite'

const Camp = () => {
  return (
    <section
      className='2xl:max-container relative 
      flex flex-col py-10 lg:md-10 lg:py-20 xl:mb-20'
    >
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start
       gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
          <CampSite
            backgroundImage="bg-bg-img-1"
            title="Putuk Truno Camp"
            subtitle="Prigen, Pasuruan"
            peopleJoined="50+ joined"
          />
          <CampSite
            backgroundImage="bg-bg-img-2"
            title="Mountain View Camp"
            subtitle="Somewhere in the Wilderness"
            peopleJoined="30+ joined"
          />
      </div>
    </section>
  )
}

export default Camp