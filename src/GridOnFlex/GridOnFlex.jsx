//The entire grid is coded from this components
//It is done with flexbox, applied to several layers of divs
//The item construction begins at <GridItem> components and their children
//GridItem is defined as a reusable components

//import packages
import { useState, useEffect } from 'react';

//import styles
import './GridOnFlex.css';
import './GridOnFlexActiveTransition.css';

//import components 
import { GridItem } from './GridItem/GridItem.jsx';

//import items components 
import { Item1 } from './Items/Item1.jsx'
import { Item4 } from './Items/Item4.jsx';
import { Item5, Item5ModaleContent } from './Items/Item5.jsx'
import { Item6 } from './Items/Item6.jsx';
import { Item7 } from './Items/Item7.jsx';
import { Item8 } from './Items/Item8.jsx';

//import assets
import resumeIcon from "./assets/resume-icon.png";

export const Grid = ({ openModale, isGridActive }) => {

  const [gridActive, setGridActive] = useState(false);

  useEffect(() => {
   if (isGridActive) {
     const timeoutId = setTimeout(() => {
       setGridActive(true);
     }, 100);

      return () => clearTimeout(timeoutId); 
    }
  }, [isGridActive]);

  return (
    <section className="grid-wrapper">
    <div className="grid-container">
      <div className="grid-lvl-1 lvl-1-top">
        <div className="grid-lvl-2 lvl-2-top-top">
          <div className={`grid-lvl-3 lvl-3-top-left item-1-container ${gridActive ? 'item-active' : ''}`}>

            <GridItem className="item-1"
              gridActive={gridActive}
              openModale={openModale}>
              <Item1 />
            </GridItem>

          </div>
          <div className={`grid-lvl-3 lvl-3-top-right item-2-container ${gridActive ? 'item-active' : ''}`}>

            <GridItem className="item-2"
              gridActive={gridActive}
              openModale={openModale}>

            </GridItem>

          </div>
        </div>
        <div className={`grid-lvl-2 lvl-2-top-bottom item-3-container ${gridActive ? 'item-active' : ''}`}>

          <GridItem className="item-3"
            gridActive={gridActive}
            openModale={openModale}>

          </GridItem>

        </div>
      </div>
      <div className="grid-lvl-1 lvl-1-bottom">
        <div className="grid-lvl-2 lvl-2-bottom-left">
          <div className={`grid-lvl-3 lvl-3-bottom-top item-4-container ${gridActive ? 'item-active' : ''}`}>

            <GridItem className="item-4"
              gridActive={gridActive}
              openModale={openModale}>
              <Item4 />
            </GridItem>

          </div>
          <div className="grid-lvl-3 lvl-3-bottom-bottom">
            <div className="grid-lvl-4 lvl-4-left">
              <div className={`grid-lvl-5 item-5-container ${gridActive ? 'item-active' : ''}`}>

                <GridItem className="item-5"
                  gridActive={gridActive}
                  openModale={() => openModale(Item5ModaleContent)}>
                  <Item5 />
                </GridItem>

              </div>
              <div className={`grid-lvl-5 item-6-container ${gridActive ? 'item-active' : ''}`}>

                <GridItem className="item-6" 
                  gridActive={gridActive}>
                  <Item6 />
                </GridItem>

              </div>
            </div>
            <div className={`grid-lvl-4 lvl-4-right item-7-container ${gridActive ? 'item-active' : ''}`}>

              <GridItem className="item-7"
                gridActive={gridActive}
                openModale={openModale}>
                <Item7 />
              </GridItem>

            </div>
          </div>
        </div>
        <div className={`grid-lvl-2 lvl-2-bottom-right item-8-container ${gridActive ? 'item-active' : ''}`}>

          <GridItem className="item-8"
            gridActive={gridActive}>
            <Item8 />
          </GridItem>

        </div>
      </div>
    </div>
    </section>
  );
};
