import React from 'react'
import './EquipmentandFacilities.css'
import {BiRightArrow} from 'react-icons/bi'
import {BiLeftArrow} from 'react-icons/bi'
import { images } from '../../constants'
const EquipmentsandFacilities = () => {
  return (
   <div id="equipmentandfacilities">
    <div className='ef-container hover-effect'>
      <div className="ef-content">
      <img src={images.logosvg} height="50px" width="50px"/>
      <p>EQUIPMENT AND FACILITIES</p>
      <div>
      <button><BiLeftArrow size={40} onClick={()=>{}}/></button>
      <button><BiRightArrow size={40} onClick={()=>{}}/></button>
      </div>
      </div>
    </div>
   </div>
  )
}

export default EquipmentsandFacilities