import React from 'react'

const ExperienceCard = ({title , period , at , description}) => {
    return (

        <div className='flex flex-col items-center justify-between bg-black shadow-[inset_4px_2px_110px_15px_#1a202c] text-gray-100 r border-gray-200  w-full md:w-8/12  h-auto rounded-2xl  py-2 px-2 md:px-4'>
            <div className='w-full flex items-center justify-between'>
                <div className='flex items-center justify-center px-2 '>
                    <div className='text-left '>
                        <h4 className='text-lg md:text-2xl lg:text-xl ease-in-out tracking-wide italic font-semibold text-gray-100 stroke-slate-200 duration-1000 capitalize'>{title}</h4>
                    </div>
                </div>
                <div className='text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500'>
                    <p className='text-md   '>{period}</p>
                    <p className='text-xs italic  '>{at}</p>
                </div>
            </div>
            <div className='text-left p-2'>
                <p className='text-sm lg:text-base tracking-tight  pb-4'>{description}</p>
               
            </div>
        </div>

    )
}

export default ExperienceCard
