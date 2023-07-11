'use client';
import Image from 'next/image'
import { Grid, GridItem } from '@chakra-ui/react'
import WithSubnavigation from '@/components/navbar';
import SimpleSidebar from '@/components/sidebar';
import SidebarWithHeader from '@/components/sidebarheader';

export default function Home() {
  return (
    <main>
    <SidebarWithHeader>
       <Grid
         templateAreas={`"header header"
                   "nav main"
                   "nav footer"`}
         gridTemplateRows={'50px 1fr 30px'}
         gridTemplateColumns={'150px 1fr'}
         h='100vh'
         gap='1'
         color='gray'
         fontWeight='bold'
       >
         <GridItem pl='2' area={'header'}>
           <WithSubnavigation/>
         </GridItem>
         <GridItem pl='2' area={'nav'}>
          
         </GridItem>
         <GridItem pl='2' area={'main'}>
           Main
         </GridItem>
         <GridItem pl='2' area={'footer'}>
           Footer
         </GridItem>
       </Grid>
    </SidebarWithHeader>
    </main>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    
    // </main>
  )
}
