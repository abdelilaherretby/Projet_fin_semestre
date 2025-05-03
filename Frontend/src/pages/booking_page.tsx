"use client"; // Mark the file as a client component

import React, { useState } from 'react';
import DriverDetails from '../components/Booking/DriverDetails';
import BookingHeader from '../components/Booking/Bookingheader' ;
import BillingAddress from '../components/Booking/BillingAdress';
import BookingFooter from '../components/Booking/BookingFooter';
import BookingCar from '../components/Booking/BookingCar';
import car1 from "../../public/images/bmwserie1.png"
const BookingForm = () => {
  const [formData, setFormData] = useState({
    company: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '+212',
    country: '',
    street: '',
    postalCode: '',
    city: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-white p-4">
      {/* Première section */}
      <BookingHeader />

      {/* ********************************************************* */}
      

      <div className="flex flex-col lg:flex-row gap-6 h-full">
  {/* Gauche : 2/3 */}
  <div className="flex flex-col gap-6 lg:w-2/3 w-full ml-[32px]">
  <DriverDetails formData={formData} handleInputChange={handleInputChange} />
  <BillingAddress formData={formData} handleInputChange={handleInputChange} />
</div>


  {/* Droite : 1/3 */}
{/* Droite : 1/3 */}
<div className="lg:w-1/3 w-full px-6">
  <div className="sticky top-6">
  <BookingCar
  image={car1}
  name="Citroën C4"
  subtitle="ou similaire | CDMR"
  days={4}
  pickupLocation="Marrakech Gueliz"
  pickupDate="jeu., 17 avr. 2025"
  pickupTime="13:00"
  returnLocation="Marrakech M'hamid"
  returnDate="lun., 21 avr. 2025"
  returnTime="08:30"
  features={[
    "Assurance au tiers",
    "Assistance dépannage 24/7",
    "Kilométrage illimité",
    "Option de paiement: Restez flexible - Payez à la prise en charge, annulez et modifiez gratuitement avant l'heure de la prise en charge"
  ]}
/>
  </div>
</div>

</div>




{/* ********************************************************* */}

      {/* Section footer */}
      <BookingFooter />
    </div>
  );
};

export default BookingForm;

