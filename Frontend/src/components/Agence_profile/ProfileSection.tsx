import React, { useState } from "react";

interface Agency {
  id_agence: number;
  name: string;
  email: string;
  telephone: string; // Changement de "phone" à "contact"
  address: string;
  description: string;
}

interface ProfileSectionProps {
  agency: Agency;
 
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ agency }) => {
  const [agencyName, setAgencyName] = useState<string>(agency.name);
  const [email, setEmail] = useState<string>(agency.email);
  const [telephone, setTelephone] = useState<string>(agency.telephone); // Utilisation de "contact" au lieu de "phone"
  const [address, setAddress] = useState<string>(agency.address);
  const [description, setDescription] = useState<string>(agency.description);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleSave = async (): Promise<void> => {
    console.log("Payload envoyé :", {
      agencyName,
      email,
      telephone,
      address,
      description,
    });
  
    try {
      const response = await fetch(`http://localhost:5000/api/agences/profile/${agency.id_agence}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom: agencyName,
          email,
          telephone,
          adresse: address,
          description
        }),
      });
  
      // Vérification si la réponse est bien JSON
      let data;
      if (response.ok) {
        // Essayer de récupérer la réponse JSON uniquement si la réponse est ok
        try {
          data = await response.json();
        } catch (jsonError) {
          console.error("Réponse non-JSON reçue :", jsonError);
          return;
        }
  
        console.log('Les informations ont été mises à jour avec succès');
        setIsEditing(false); // Désactive le mode édition après la sauvegarde
      } else {
        // Si la réponse n'est pas ok, afficher le message d'erreur
        const errorText = await response.text();  // Lire la réponse en texte si la réponse est erreur
        console.error('Erreur lors de la mise à jour :', errorText);
      }
    } catch (error) {
      console.error('Erreur de sauvegarde', error);
    }
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
          value={telephone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTelephone(e.target.value)} // Utilisation de "contact"
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
