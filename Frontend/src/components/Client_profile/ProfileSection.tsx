import React, { useState } from "react";

interface Client {
  name: string;
  email: string;
  contact: string;
  permis: string;
  age: number;
}

interface ProfileSectionProps {
  client: Client;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ client }) => {
  const [clientName, setClientName] = useState<string>(client.name);
  const [email, setEmail] = useState<string>(client.email);
  const [contact, setContact] = useState<string>(client.contact);
  const [permis, setPermis] = useState<string>(client.permis);
  const [age, setAge] = useState<number>(client.age);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleSave = (): void => {
    console.log("Sauvegarde des infos client :", { clientName, email, contact, permis, age });
  };

  return (
    <section className="my-6 p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-medium mb-4">Mon profil</h3>

      <div className="mb-4">
        <label className="block font-medium mb-1">Nom :</label>
        <input
          type="text"
          value={clientName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setClientName(e.target.value)}
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          disabled={!isEditing}
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Permis de conduire :</label>
        <input
          type="text"
          value={permis}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPermis(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          disabled={!isEditing}
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Âge :</label>
        <input
          type="number"
          value={age}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value))}
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
