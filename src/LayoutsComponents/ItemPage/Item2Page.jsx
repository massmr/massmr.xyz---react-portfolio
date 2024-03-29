import { useEffect, useState } from 'react'

import { ServiceListItem } from '../Services/ServiceListItem.jsx'
import { RegularList } from '../RegularList/RegularList.jsx'

import { services } from '../../Utils/services.js'

import  './Item2Page.css'

export const Item2PageContent = ({ 
  name, 
  handleSwitch }) => {
  
  return (
    <>
      <section className="service-container">
        <RegularList
          items={services}
          resourceName="service"
          ItemComponent={ServiceListItem} 
          optionalProp1={handleSwitch} />
        <div className="service-spacer"></div>
      </section>
    </>
  );
};

