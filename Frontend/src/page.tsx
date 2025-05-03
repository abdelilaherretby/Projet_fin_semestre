'use client'

import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import SloganSection from './components/SloganSection'
import HeaderSection from './components/HeaderSection'
import DevisesSection from './components/DevisesSection'
import GalerieSection from './components/GalerieSection'
import FilterSection from './components/FilterSection'
import {getCarList} from '../Services'
import {useEffect, useState} from 'react'



const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

export default function Page() {

      const [carList, setCarList] = useState([])
      const [carFilter, setCarFilter] = useState([])

      const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
      const [priceOrder, setPriceOrder] = useState<number | null>(null);
      const [selectedDate, setSelectedDate] = useState<string | null>(null);

    
    useEffect(() => {
    getCars()
  }, [])

    const getCars = async () => {
        const result: any = await getCarList()
        console.log(result.carLists)
        setCarList(result.carLists)
        setCarFilter(result.carLists)
    }

    const filterCardList = (brand: string) => {
      setSelectedBrand(brand);
      applyFilters(brand, priceOrder, selectedDate);
    };
    
    const filterDate = (date: string) => {
      setSelectedDate(date);
      applyFilters(selectedBrand, priceOrder, date);
    };

    const filterPrice = (order: any) => {
      setPriceOrder(order);
      applyFilters(selectedBrand, order, selectedDate);
    };

    const applyFilters = (brand: string | null, order: any | null, date: string | null) => {
      let filtered = [...carFilter];
      if (date) {
        filtered = filtered.filter((item: any) => item.lieuDeDepart === date);
      }
      if (brand) {
        filtered = filtered.filter((item: any) => item.marque === brand);
      }
    
      if (order) {
        filtered = filtered.sort((a, b) =>
          order == -1 ? a.price - b.price : b.price - a.price
        );
      }
    
      setCarList(filtered);
    };
    

    
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <main>
        <SloganSection />
        <HeaderSection carFilter={carFilter}  setDate={(value:string) => filterDate(value)}/>
        <DevisesSection />
        <FilterSection carFilter={carFilter} setBrand={(value:string) => filterCardList(value)} orderPrice={(value:string)=>filterPrice(value)} />
        <GalerieSection carList={carList} />
       
      </main>
    </ClerkProvider>
  )
}

