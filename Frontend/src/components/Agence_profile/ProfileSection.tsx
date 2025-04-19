import React, { useState } from "react";

const ProfileSection: React.FC = () => {
  const [agencyName, setAgencyName] = useState<string>("Agence XYZ");
  const [email, setEmail] = useState<string>("contact@xyz.com");
  const [phone, setPhone] = useState<string>("+33 123 456 789");
  const [address, setAddress] = useState<string>("123 Rue de Paris, Paris, France");
  const [description, setDescription] = useState<string>("Location de voitures premium avec service personnalisé.");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleSave = (): void => {
    console.log("Sauvegarde des infos :", { agencyName, email, phone, address, description });
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
        <label className="block font-medium mb-1">Numéro de téléphone :</label>
        <input
          type="text"
          value={phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
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

export default ProfileSection;
