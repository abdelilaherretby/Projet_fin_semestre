'use client';

import React, { useState } from 'react';

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
    <div className="min-h-screen bg-white">

      {/* Première section (Revoir votre réservation) */}
      <div className="w-full bg-gray-100 p-4 flex justify-between items-center">
        <div className="text-lg font-semibold">Revoir votre réservation</div>

        <div className="flex items-center space-x-4 ml-auto mr-10">
          <label htmlFor="total-price" className="font-medium text-sm">Total:</label>
          <input
            id="total-price"
            type="text"
            value={`€ 100`}  // Exemple de prix (à rendre dynamique selon la voiture choisie)
            readOnly
            className="text-xl font-bold bg-transparent border-none focus:ring-0"
          />
        </div>
      </div>

      {/* Deuxième section (Détails du conducteur) */}
      <div className="flex p-6">
        <div className="w-1/2 space-y-4">
          <div className="text-xl font-semibold mb-4">Qui va conduire ?</div>

          <div className="mb-4">
            <label htmlFor="company" className="block text-sm font-medium">Entreprise (optionnel)</label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full border p-2 rounded mt-2"
              placeholder="Nom de l'entreprise (optionnel)"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium">Nom</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full border p-2 rounded mt-2"
              placeholder="Entrez votre nom"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium">Prénom</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full border p-2 rounded mt-2"
              placeholder="Entrez votre prénom"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Adresse mail</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border p-2 rounded mt-2"
              placeholder="Entrez votre adresse mail"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium">Numéro de téléphone</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full border p-2 rounded mt-2"
              placeholder="Numéro de téléphone (ex : +212...)"
            />
          </div>
        </div>
      </div>

      {/* Troisième section (Adresse de facture) */}
      <div className="flex p-6">
        <div className="w-1/2 space-y-4">
          <div className="text-xl font-semibold mb-4">Adresse de votre facture</div>

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

      {/* Dernière section (Total et confirmation) */}
      <div className="w-full bg-gray-100 p-6 space-y-6">
         {/* Total avec prix aligné à droite */}
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>100$</span>
        </div>

          {/* Liens */}
        <div className="space-y-2">
          <a href="#" className="text-blue-600 hover:underline block">Détails de prix</a>
          <a href="#" className="text-blue-600 hover:underline block">Informations importantes concernant votre réservation</a>
        </div>

          {/* Texte d'acceptation */}
        <div>
          <p className="text-sm">
            J'ai lu et j'accepte les <span className="underline cursor-pointer">Informations sur la location</span>, les <span className="underline cursor-pointer">Conditions générales</span> et la <span className="underline cursor-pointer">Politique de confidentialité</span> et je reconnais que je réserve un tarif prépayé, pour lequel l'intégralité du prix de la réservation est immédiatement débité du moyen de paiement fourni.
          </p>
       </div>

          {/* Bouton réserver */}
        <div>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
         Réserver
          </button>
        </div>
     </div>

      
    </div>
  );
};

export default BookingForm;
