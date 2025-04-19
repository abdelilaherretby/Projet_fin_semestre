import React from 'react';

type DriverDetailsProps = {
  formData: {
    company: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DriverDetails: React.FC<DriverDetailsProps> = ({ formData, handleInputChange }) => {
  return (
    <div className="flex flex-col p-6 ml-[-8px] w-[95%] lg:w-[90%]">
      <div className="w-full space-y-4">
        <div className="text-3xl font-semibold mb-4">Qui va conduire ?</div>

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
  );
};

export default DriverDetails;
