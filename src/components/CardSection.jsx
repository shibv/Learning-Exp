import React from 'react'
import Card from './Card.jsx'
import img_phone from '../assets/mobile-app.svg'
import img_tab from '../assets/tab.svg'
import phone_share from '../assets/share.svg'

function CardSection() {
  return (
    <div id="services" className='flex flex-col sm:flex-row px-6 py-4 sm:px-32 w-full justify-around gap-16 mb-10'>
        <Card img={img_phone} heading={'Mobile App'} para={'Start your journey with our mobile app.'} />
        <Card img={img_tab} heading={'Web App'} para={'Start your journey with our web app.'} />
        <Card img={phone_share} heading={'Share App'} para={'Start your journey with our share app.'} />
    </div>
  )
}

export default CardSection