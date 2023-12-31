import { useState } from 'react'
import Image from 'next/image'
import styles from './styles/page.module.scss'
import { axios } from "@/init/axios"
import { Cycle } from "@/client/snippetsAPI.schemas"
import Link from 'next/link'

import { ActiveCycleCard } from '@/features/cycles/ActiveCycleCard';
import { CompletedCycleCard } from '@/features/cycles/CompletedCycleCard';
import { CycleList } from '@/features/cycles/CycleList';
import { CreateCycleButton } from '@/features/cycles/CreateCycleButton';
import { FloatButton } from '@/components/buttons/FloatButton'


async function getActiveCycle() {
  //add status filter parameter in query
  return axios.get('/api/cycles').then(res => { return res.data; }).catch(err => console.log(err));
}

async function getCompletedCycles() {
  //add status filter parameter in query
  return axios.get('/api/cycles').then(res => { return res.data }).catch(err => console.log(err));
}

export default async function Home() {
  const activeCycle = await getActiveCycle();
  const completedCycles = await getCompletedCycles();

  // const hasActiveCycle = activeCycle.length > 0;

  return (
    <div>
        <div className={styles.row}>
          <div className={styles.col}>
          Cycle Graph Space
          </div>
        </div>
        <div className={styles.row}>
        <div className={styles.col}>
          {/* {hasActiveCycle ?
          <ActiveCycleCard activeCycle={activeCycle[0]} />:  <Link href="/create">
          <button type="button">Start a cycle</button>
         </Link>} */}
           {/* <Link href="/create">
              <button type="button">Start a cycle</button>
           </Link> */}
          
          {/* conditional between create cycle button which opens a modal to give you two options: a. manual creation b. ai assistance  */}
          <CreateCycleButton/>
        </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
          <CycleList cycles={completedCycles} />
          </div>
      </div>
    </div>
  )
}
