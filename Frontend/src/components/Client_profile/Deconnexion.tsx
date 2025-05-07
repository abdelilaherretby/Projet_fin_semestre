import React, { useEffect, useState } from "react";
import { FiInfo, FiLogOut } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";

interface Client {
  id: number;
  name: string;
  email: string;
  contact: string;
  permis: string;
  age: number;
}

const Deconnexion: React.FC = () => {
  const [clientData, setClientData] = useState<Client | null>(null);
  
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsed = JSON.parse(user);
      if (parsed?.type === "client") {
        setClientData({
          id: parsed.id,
          name: parsed.nom || "Nom inconnu",
          email: parsed.email || "contact@exemple.com",
          contact: parsed.contact || "+33 000 000 000",
          permis: parsed.permis || "Permis inconnu",
          age: parsed.age || 0,
        });
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Supprime les données de l'utilisateur
    localStorage.removeItem("token"); // Supprime le token d'authentification
    window.location.href = "/"; // Redirige vers la page d'accueil 
   
  };

  if (!clientData) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="rounded-lg shadow-md p-3 border bg-white">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-500 text-xl"><LuUserRound size={36} /></span>
        </div>
        <div>
          <p className="font-semibold">{clientData.name}</p>
          <p className="text-sm text-gray-700">{clientData.email}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <button className="flex items-center gap-2 text-blue-600 hover:underline">
          <FiInfo size={24} />
          Aide
        </button>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-600 hover:underline"
        >
          <FiLogOut size={24} className="transform rotate-180" />
          Se déconnecter
        </button>
      </div>
    </div>
  );
};

export default Deconnexion;
