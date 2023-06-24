

import { Navbar } from '@components/common';
import {Footer} from "@components/common/footer";




export default function BaseLayout({children}) {
  return(
    <>
        <div className=" bg-white overflow-hidden">
        <div className=" max-w-6xl mx-auto px-4">
          <Navbar />
          <div className="fit">
           {children}
          </div>

        </div>
            {/* Footer */}
            <Footer />
      </div>
    </>
  )
};
