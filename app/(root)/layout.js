import Footer from '@/components/Global/Footer';
import Header from '@/components/Global/Header'
import React from 'react'

const RootLayout = ({
                      children
                    }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default RootLayout;
