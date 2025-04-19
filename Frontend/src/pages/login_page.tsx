'use client';

import { useState } from 'react';

type UserType = 'client' | 'agence';
type TabType = 'login' | 'register';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<TabType>('login');
  const [userType, setUserType] = useState<UserType>('client');

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        {/* Choix du type d'utilisateur */}
        <div className="flex justify-center gap-4 mb-4">
          <button
            className={`px-4 py-1 rounded-md font-semibold ${
              userType === 'client' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setUserType('client')}
          >
            Client
          </button>
          <button
            className={`px-4 py-1 rounded-md font-semibold ${
              userType === 'agence' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setUserType('agence')}
          >
            Agence
          </button>
        </div>

        {/* Tabs Login / Register */}
        <div className="flex justify-between mb-6 border-b">
          <button
            className={`pb-2 px-4 font-semibold ${
              activeTab === 'login' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`pb-2 px-4 font-semibold ${
              activeTab === 'register' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        {/* Formulaire Login */}
        {activeTab === 'login' && (
          <form>
            <InputField label="Email" type="email" />
            <InputField label="Mot de passe" type="password" />

            <div className="flex justify-between items-center mb-4 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Se souvenir de moi
              </label>
              <a href="#" className="text-blue-600 hover:underline">Mot de passe oublié ?</a>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Se connecter
            </button>
          </form>
        )}

        {/* Formulaire Register */}
        {activeTab === 'register' && (
          <form>
            {userType === 'client' ? (
              <>
                <InputField label="Permis de conduire" type="text" />
                <InputField label="Email" type="email" />
                <InputField label="Âge" type="number" />
                <InputField label="Contact" type="text" />
                <InputField label="Mot de passe" type="password" />
              </>
            ) : (
              <>
                <InputField label="Nom de l'agence" type="text" />
                <InputField label="Adresse" type="text" />
                <InputField label="Contact" type="text" />
                <InputField label="Email" type="email" />
                <InputField label="Mot de passe" type="password" />
              </>
            )}

            <div className="flex items-center mb-4 text-sm">
              <input type="checkbox" className="form-checkbox mr-2" />
              <span>J'accepte les conditions d'utilisation</span>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              S'inscrire
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function InputField({ label, type }: { label: string; type: string }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm text-gray-700">{label}</label>
      <input
        type={type}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
