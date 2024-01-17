import React from 'react'
import boughtBefore from './assets/bought-before.png';
import specials from './assets/specials.png';
import downDown from './assets/down-down.png';
import meatSeafood from './assets/meat-seafood.png';
import fruitVegetables from './assets/fruit-vegetables.png';
import dairyEggsFridge from './assets/dairy-eggs-fridge.png';
import bakery from './assets/bakery.png';
import pantry from './assets/pantry.png';
import deli from './assets/deli.png';
import drinks from './assets/drinks.png';
import frozen from './assets/frozen.png';
import household from './assets/household.png';
import healthBeauty from './assets/health-beauty.png';
import backToSchool from './assets/back-to-school.png';
import baby from './assets/baby.png';
import pet from './assets/pet.png';

const SECTIONS = [
  { name: 'Bought Before', image: boughtBefore },
  { name: 'Specials', image: specials },
  { name: 'Down Down', image: downDown },
  { name: 'Meat & Seafood', image: meatSeafood },
  { name: 'Fruit & Vegetables', image: fruitVegetables },
  { name: 'Dairy Eggs & Fridge', image: dairyEggsFridge },
  { name: 'Bakery', image: bakery },
  { name: 'Pantry', image: pantry },
  // { name: 'Deli', image: deli },
  // { name: 'Drinks', image: drinks },
  // { name: 'Frozen', image: frozen },
  // { name: 'Household', image: household },
  // { name: 'HealthBeauty', image: healthBeauty },
  // { name: 'Back To School', image: backToSchool },
  // { name: 'Baby', image: baby },
  // { name: 'Pet', image: pet },

]
const SectionNav = () => {

  return (
    <div className='flex'>
      {SECTIONS.map((section) => (
        <div  key={section.name} className='flex flex-col justify-center items-center p-2'>
          <img src={section.image.src} alt="boughtBefore" className='w-[80px] flex-shrink-0'/>
          <span className='text-sm text-center'>{section.name}</span>
        </div>
      ))
      }
    </div>
  )
}

export default SectionNav;
