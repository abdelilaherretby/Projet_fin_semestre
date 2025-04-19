"use client"; // Mark the file as a client component

import React from 'react';

type BillingAddressProps = {
  formData: {
    country: string;
    street: string;
    postalCode: string;
    city: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const BillingAddress: React.FC<BillingAddressProps> = ({ formData, handleInputChange }) => {
  return (
    <div className="flex flex-col p-6 ml-[-8px] w-[95%] lg:w-[90%]">
      <div className="w-full space-y-4">
        <div className="text-3xl font-semibold mb-4">Adresse de votre facture</div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium">Pays</label>
          <input
            id="country"
            name="country"
            type="text"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mt-2"
            placeholder="Entrez votre pays"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="street" className="block text-sm font-medium">Numéro et nom de rue</label>
          <input
            id="street"
            name="street"
            type="text"
            value={formData.street}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mt-2"
            placeholder="Entrez le numéro et le nom de la rue"
          />
        </div>

        <div className="mb-4 flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="postalCode" className="block text-sm font-medium">Code postal</label>
            <input
              id="postalCode"
              name="postalCode"
              type="text"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="w-full border p-2 rounded mt-2"
              placeholder="Entrez votre code postal"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="city" className="block text-sm font-medium">Ville</label>
            <input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full border p-2 rounded mt-2"
              placeholder="Entrez votre ville"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingAddress;
