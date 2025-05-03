import React, { useState } from "react";

interface Agency {
  name: string;
  email: string;
  contact: string; // Changement de "phone" à "contact"
  address: string;
  description: string;
}

interface ProfileSectionProps {
  agency: Agency;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ agency }) => {
  const [agencyName, setAgencyName] = useState<string>(agency.name);
  const [email, setEmail] = useState<string>(agency.email);
  const [contact, setContact] = useState<string>(agency.contact); // Utilisation de "contact" au lieu de "phone"
  const [address, setAddress] = useState<string>(agency.address);
  const [description, setDescription] = useState<string>(agency.description);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleSave = (): void => {
    console.log("Sauvegarde des infos :", { agencyName, email, contact, address, description });
  };

  return (
    <section className="my-6 p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-medium mb-4">Informations Générales</h3>

      <div className="mb-4">
        <label className="block font-medium mb-1">Nom de l'agence :</label>
        <input
          type="text"
          value={agencyName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAgencyName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          disabled={!isEditing}
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Email :</label>
        <input
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          disabled={!isEditing}
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Contact :</label>
        <input
          type="text"
          value={contact}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact(e.target.value)} // Utilisation de "contact"
          className="w-full p-2 border border-gray-300 rounded"
          disabled={!isEditing}
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Adresse :</label>
        <input
          type="text"
          value={address}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          disabled={!isEditing}
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Description :</label>
        <textarea
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          disabled={!isEditing}
        />
      </div>

      {!isEditing ? (
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          onClick={() => setIsEditing(true)}
        >
          Modifier
        </button>
      ) : (
        <div className="flex gap-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => {
              handleSave();
              setIsEditing(false);
            }}
          >
            Enregistrer
          </button>
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            onClick={() => setIsEditing(false)}
          >
            Annuler
          </button>
        </div>
      )}
    </section>
  );
};

export default ProfileSection; // Assure-toi d'utiliser l'exportation par défaut
