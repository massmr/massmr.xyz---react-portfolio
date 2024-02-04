//import styles
import './GridOnFlex.css';

//import components 
import { GridItem } from './GridItem/GridItem.jsx';

export const Grid = ({ openModale }) => {
  return (
    <div className="grid-container">
      <div className="grid-lvl-1 lvl-1-top">
        <div className="grid-lvl-2 lvl-2-top-top">
          <div className="grid-lvl-3 lvl-3-top-left item-1-container">
            <GridItem className="item-1"
              openModale={openModale} />
          </div>
          <div className="grid-lvl-3 lvl-3-top-right item-2-container">
            <GridItem className="item-2"
              openModale={openModale}/>
          </div>
        </div>
        <div className="grid-lvl-2 lvl-2-top-bottom item-3-container">
          <GridItem className="item-3"
            openModale={openModale}/>
        </div>
      </div>
      <div className="grid-lvl-1 lvl-1-bottom">
        <div className="grid-lvl-2 lvl-2-bottom-left">
          <div className="grid-lvl-3 lvl-3-bottom-top item-4-container">
            <GridItem className="item-4"
              openModale={openModale}/>
          </div>
          <div className="grid-lvl-3 lvl-3-bottom-bottom">
            <div className="grid-lvl-4 lvl-4-left">
              <div className="grid-lvl-5 item-5-container">
                <GridItem className="item-5" 
                  openModale={openModale}/>
              </div>
              <div className="grid-lvl-5 item-6-container">
                <GridItem className="item-6" 
                  openModale={openModale}/>
              </div>
            </div>
            <div className="grid-lvl-4 lvl-4-right item-7-container">
            <GridItem className="item-7" 
              openModale={openModale}/>
            </div>
          </div>
        </div>
        <div className="grid-lvl-2 lvl-2-bottom-right item-8-container">
          <GridItem className="item-8" 
            openModale={openModale} />
        </div>
      </div>
    </div>
  );
};
