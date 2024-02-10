//The entire grid is coded from this components
//It is done with flexbox, applied to several layers of divs
//The item construction begins at <GridItem> components and their children
//import packages
import { useState, useEffect, useRef } from 'react'

//import styles
import './GridOnFlex.css'
import './GridOnFlexActiveTransition.css'

//import components 
import { GridItem } from './GridItem/GridItem.jsx'
import  useActivation from '../CustomHooks/useActivation.jsx'

//import items components 
import { Item1 } from './Items/Item1.jsx'
import { Item1PageContent } from './Items/Item1.jsx'
import { Item2 } from './Items/Item2.jsx'
import { Item3 } from './Items/Item3.jsx'
import { Item4 } from './Items/Item4.jsx'
import { Item5, Item5ModaleContent } from './Items/Item5.jsx'
import { Item6 } from './Items/Item6.jsx'
import { Item7 } from './Items/Item7.jsx'
import { Item8 } from './Items/Item8.jsx'

//import assets
import resumeIcon from "./assets/resume-icon.png"

export const Grid = ({ 
  openItemPage,
  openModale,
  isGridActive,
  gridCloseAnimation }) => {

  //Grid entrance animation
  //2 versions : mobile or desktop
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const [gridActive1, setGridActive1] = useState(false);
  const [gridActive2, setGridActive2] = useState(false);
  const [gridActive3, setGridActive3] = useState(false);
  const [gridActive4, setGridActive4] = useState(false);
  const [gridActive5, setGridActive5] = useState(false);
  const [gridActive6, setGridActive6] = useState(false);
  const [gridActive7, setGridActive7] = useState(false);
  const [gridActive8, setGridActive8] = useState(false);

  useEffect(() => {
    if (isGridActive) {
      if (windowWidth < 1024) {
        const timeoutId1 = setTimeout(() => {
          setGridActive1(true);
        }, 100);
        const timeoutId2 = setTimeout(() => {
          setGridActive2(true);
        }, 175);
        const timeoutId3 = setTimeout(() => {
          setGridActive3(true);
        }, 250);
        const timeoutId4 = setTimeout(() => {
          setGridActive4(true);
        }, 325);
        const timeoutId5 = setTimeout(() => {
          setGridActive5(true);
        }, 550);
        const timeoutId6 = setTimeout(() => {
          setGridActive6(true);
        }, 625);
        const timeoutId7 = setTimeout(() => {
          setGridActive7(true);
        }, 475);
        const timeoutId8 = setTimeout(() => {
          setGridActive8(true);
        }, 400);
        return () => {
          clearTimeout(timeoutId1);
          clearTimeout(timeoutId2);
          clearTimeout(timeoutId3);
          clearTimeout(timeoutId4);
          clearTimeout(timeoutId5);
          clearTimeout(timeoutId6);
          clearTimeout(timeoutId7);
          clearTimeout(timeoutId8);
        }
      } else {
        const timeoutId1 = setTimeout(() => {
          setGridActive1(true);
        }, 250);
        const timeoutId2 = setTimeout(() => {
          setGridActive2(true);
        }, 175);
        const timeoutId3 = setTimeout(() => {
          setGridActive3(true);
        }, 100);
        const timeoutId4 = setTimeout(() => {
          setGridActive4(true);
        }, 625);
        const timeoutId5 = setTimeout(() => {
          setGridActive5(true);
        }, 550);
        const timeoutId6 = setTimeout(() => {
          setGridActive6(true);
        }, 475);
        const timeoutId7 = setTimeout(() => {
          setGridActive7(true);
        }, 400);
        const timeoutId8 = setTimeout(() => {
          setGridActive8(true);
        }, 325);
        return () => {
          clearTimeout(timeoutId1);
          clearTimeout(timeoutId2);
          clearTimeout(timeoutId3);
          clearTimeout(timeoutId4);
          clearTimeout(timeoutId5);
          clearTimeout(timeoutId6);
          clearTimeout(timeoutId7);
          clearTimeout(timeoutId8);
        }
      }
    }
  }, [isGridActive]);
  
  //handle closing animation
  useEffect(() => {
    if (gridCloseAnimation) {
      setGridActive1(false)
      setGridActive2(false)
      setGridActive3(false)
      setGridActive4(false)
      setGridActive5(false)
      setGridActive6(false)
      setGridActive7(false)
      setGridActive8(false)
    }
  }, [gridCloseAnimation]);
  //_______________________________________________________
  //custom hook to check activation of an Item and blur
  //all others
  
  const isAnyItemActive = (...activationStates) => {
    return activationStates.some(isActive => isActive);
  };

  const [
    isItem1Active,
    handleItem1Activation,
    handleItem1Deactivation
  ] = useActivation(false);
  const [
    isItem2Active,
    handleItem2Activation,
    handleItem2Deactivation
  ] = useActivation(false);
  const [
    isItem3Active,
    handleItem3Activation,
    handleItem3Deactivation
  ] = useActivation(false);
  const [
    isItem4Active,
    handleItem4Activation,
    handleItem4Deactivation
  ] = useActivation(false);
  const [
    isItem5Active,
    handleItem5Activation,
    handleItem5Deactivation
  ] = useActivation(false);
  const [
    isItem6Active,
    handleItem6Activation,
    handleItem6Deactivation
  ] = useActivation(false);
  const [
    isItem7Active,
    handleItem7Activation,
    handleItem7Deactivation
  ] = useActivation(false);
  const [
    isItem8Active,
    handleItem8Activation,
    handleItem8Deactivation
  ] = useActivation(false);
  
  const [isBlurred, setIsBlurred] = useState(false);
  useEffect(() => {
    setIsBlurred(isAnyItemActive(
      isItem1Active,
      isItem2Active,
      isItem3Active,
      isItem4Active,
      isItem5Active,
      isItem6Active,
      isItem7Active
    ));
    }, [
        isItem1Active,
        isItem2Active,
        isItem3Active,
        isItem4Active,
        isItem5Active,
        isItem6Active,
        isItem7Active
  ]);
  
  /*
  useEffect(() => {
    console.log("is blurred : " + isBlurred);
    console.log("is active 1 : " + isItem1Active);
    console.log("is active 2 : " + isItem2Active);
    console.log("is active 3 : " + isItem3Active);
    console.log("is active 4 : " + isItem4Active);
    console.log("is active 5 : " + isItem5Active);
    console.log("is active 6 : " + isItem6Active);
    console.log("is active 7 : " + isItem7Active);
  }, [isBlurred, isItem1Active, isItem2Active, isItem3Active, isItem4Active, isItem5Active, isItem6Active, isItem7Active]);
  */
  
  return (
    <section className="grid-wrapper">
    <div className="grid-container">
      <div className="grid-lvl-1 lvl-1-top">
        <div className="grid-lvl-2 lvl-2-top-top">
          <div className={`grid-lvl-3 lvl-3-top-left item-1-container ${gridActive1 ? 'item-active' : ''}`}>

            <GridItem className="item-1"
              name="item1"
              openItemPage={() => openItemPage(Item1PageContent)}
              gridActive={gridActive1}
              isBlurred={isBlurred}
              isActive={isItem1Active}
              setActive={handleItem1Activation}
              setDeactive={handleItem1Deactivation}>
              <Item1 />
            </GridItem>

          </div>
          <div className={`grid-lvl-3 lvl-3-top-right item-2-container ${gridActive2 ? 'item-active' : ''}`}>

            <GridItem className="item-2"
              name="item2"
              gridActive={gridActive2}
              isBlurred={isBlurred}
              isActive={isItem2Active}
              setActive={handleItem2Activation}
              setDeactive={handleItem2Deactivation}>
              <Item2 />
            </GridItem>

          </div>
        </div>
        <div className={`grid-lvl-2 lvl-2-top-bottom item-3-container ${gridActive3 ? 'item-active' : ''}`}>

          <GridItem className="item-3"
            name="item3"
            gridActive={gridActive3}
            isBlurred={isBlurred}
            isActive={isItem3Active}
            setActive={handleItem3Activation}
            setDeactive={handleItem3Deactivation}>
            <Item3 />
          </GridItem>

        </div>
      </div>
      <div className="grid-lvl-1 lvl-1-bottom">
        <div className="grid-lvl-2 lvl-2-bottom-left">
          <div className={`grid-lvl-3 lvl-3-bottom-top item-4-container ${gridActive4 ? 'item-active' : ''}`}>

            <GridItem className="item-4"
              name="item4"
              gridActive={gridActive4}
              isBlurred={isBlurred}
              isActive={isItem4Active}
              setActive={handleItem4Activation}
              setDeactive={handleItem4Deactivation}>
              <Item4 />
            </GridItem>

          </div>
          <div className="grid-lvl-3 lvl-3-bottom-bottom">
            <div className="grid-lvl-4 lvl-4-left">
              <div className={`grid-lvl-5 item-5-container ${gridActive5 ? 'item-active' : ''}`}>

                <GridItem className="item-5"
                  name="item5"
                  gridActive={gridActive5}
                  openModale={() => openModale(Item5ModaleContent)}
                  isBlurred={isBlurred}
                  isActive={isItem5Active}
                  setActive={handleItem5Activation}
                  setDeactive={handleItem5Deactivation}>
                  <Item5 />
                </GridItem>

              </div>
              <div className={`grid-lvl-5 item-6-container ${gridActive6 ? 'item-active' : ''}`}>

                <GridItem className="item-6" 
                  name="item6"
                  gridActive={gridActive6}
                  isBlurred={isBlurred}
                  isActive={isItem6Active}
                  setActive={handleItem6Activation}
                  setDeactive={handleItem6Deactivation}>
                  <Item6 />
                </GridItem>

              </div>
            </div>
            <div className={`grid-lvl-4 lvl-4-right item-7-container ${gridActive7 ? 'item-active' : ''}`}>

              <GridItem className="item-7"
                name="item7"
                gridActive={gridActive7}
                isBlurred={isBlurred}
                isActive={isItem7Active}
                setActive={handleItem7Activation}
                setDeactive={handleItem7Deactivation}>
                <Item7 />
              </GridItem>

            </div>
          </div>
        </div>
        <div className={`grid-lvl-2 lvl-2-bottom-right item-8-container ${gridActive8 ? 'item-active' : ''}`}>

          <GridItem className="item-8"
            name="item8"
            gridActive={gridActive8}
            isBlurred={isBlurred}
            isActive={isItem8Active}>
            <Item8 />
          </GridItem>

        </div>
      </div>
    </div>
    </section>
  );
};
