import React, { useState } from "react";
import Notification from "./Notification";
import ActionButton from "./ActionButton";

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
  const [saving, setSaving] = useState<boolean>(false);


  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 18000);
  };

  const handleSave = async (): Promise<void> => {
    const updatedClient = {
      nom: clientName,
      email,
      contact,
      permis,
      age,
    };

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:5000/api/clients/update-profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedClient),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.message === "Token invalide" || data.message === "Token expiré") {
          showNotification(data.message, "error");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.href = "/login_client";
        } else {
          showNotification(data.message || "Erreur serveur", "error");
        }
        return;
      }

      const updatedData = data.updatedData;
      showNotification(data.message, "success");

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: updatedData.id,
          nom: updatedData.nom,
          email: updatedData.email,
          permis: updatedData.permis,
          age: updatedData.age,
          contact: updatedData.contact,
          type: "client",
        })
      );

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Erreur de mise à jour :", error);
      showNotification("Erreur serveur", "error");
    }
  };

  return (
    <section className="my-6 p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-medium mb-4">Mon profil</h3>

      <div className="mb-4">
        <label className="block font-medium mb-1">Nom :</label>
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          disabled={!isEditing}
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Email :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          disabled={!isEditing}
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Contact :</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          disabled={!isEditing}
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Permis de conduire :</label>
        <input
          type="text"
          value={permis}
          onChange={(e) => setPermis(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          disabled={!isEditing}
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Âge :</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
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
          <ActionButton
              loading={saving}
              onClick={async () => {
                setSaving(true);
                await handleSave();
                setIsEditing(false);
                setSaving(false);
              }}
              text="Enregistrer"
              loadingText="Enregistrement..."
              color="blue"
          />
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            onClick={() => setIsEditing(false)}
          >
            Annuler
          </button>
        </div>
      )}

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </section>
  );
};

export default ProfileSection;
