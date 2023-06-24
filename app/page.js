import { Breadcrumb, Hero, Navbar } from "@components/common";
import { List } from "@components/course";
// import { BaseLayout } from "@components/layout";
import { Cards } from "@components/order";
import { EthRates, WalletBar } from "@components/web3";


// trying out another way to import( seperately)
import Footer from "@components/common/footer";

import { getLocalData } from "@/lib/getdata"



export default function Home() {
  // const posts = await getLocalData()
  
  return (
    <>
    <div className=" max-w-6xl mx-auto px-4">

      <Navbar />
      {/* Hero section */}
        <Hero  />
        {/* Bread Crumbs */}
        <Breadcrumb />
        {/* WalletBar */}
        <WalletBar />
        {/* Eth Rates */}
        <EthRates />
        {/* Cards */}
        <Cards />
        {/* List */}
        
        <List />

      
      
        <Footer />

      </div>
    </>
  )
  
};

// Home.Layout = BaseLayout


