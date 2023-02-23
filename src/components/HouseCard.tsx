import React, { FunctionComponent } from 'react'
import { FaBed, FaBath, FaBox } from 'react-icons/fa'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import {IoIosArrowForward} from 'react-icons/io'
import { FieldValues } from 'react-hook-form'

type HouseCardProps={
    houseData:FieldValues
}
const bgImg='https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg'

const HouseCard:FunctionComponent<HouseCardProps> = ({ houseData }) => {
    return (
        <div>
            <img src={bgImg} alt='image' className='h-80 min-h-full rounded-t-lg' />
            <div className='z-10 p-5 rounded-lg shadow-lg'>
                <div className='flex justify-between'>
                    <h1 className='flex-row font-bold text-2xl text-[#1F1D4C] ml-2'>{houseData.title}</h1>
                    <button className='px-2 flex-row-reverse text-white bg-[#62CEB3]'>
                        <IoIosArrowForward />
                    </button>
                </div>
                <p className='text-[#9EA0C3] font-medium ml-2'>{houseData.address}</p>
                <div className='mt-3 flex justify-evenly'>
                    <div className='flex items-center'>
                        <FaBed />
                        <p className='text-sm mx-3'>4</p>
                    </div>
                    <div className='flex items-center'>
                        <FaBox />
                        <p className='text-sm mx-2'>1042</p>
                    </div>
                    <div className='flex items-center'>
                        <FaBath />
                        <p className='text-sm mx-2'>3</p>
                    </div>
                    <div className='flex items-center'>
                        <BsFillHouseDoorFill />
                        <p className='text-sm mx-2'>1287</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HouseCard