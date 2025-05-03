import React from 'react';

const TroisEtapes: React.FC = () => {
  return (
    <div className='bg-[#f0f6fc] mt-3'>
      <div className="py-12 px-4 md:px-12 max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Louez une voiture en trois étapes simples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Étape 1 */}
          <div>
            <img
              src="/images/etape1.svg"
              alt="Étape 1 : recherchez"
              className="mx-auto mb-4 w-32 h-32 object-contain"
            />
            <h3 className="text-xl font-bold mb-2">Étape 1 : recherchez</h3>
            <p className="text-gray-700">
              Saisissez votre emplacement et consultez les voitures disponibles. Des SUV familiaux aux
              convertibles de luxe, trouvez le meilleur prix pour chaque type de location de véhicule.
            </p>
          </div>

          {/* Étape 2 */}
          <div>
            <img
              src="/images/etape2.svg"
              alt="Étape 2 : comparez"
              className="mx-auto mb-4 w-32 h-32 object-contain"
            />
            <h3 className="text-xl font-bold mb-2">Étape 2 : comparez</h3>
            <p className="text-gray-700">
              Comparez des voitures de location en fonction de la politique de carburant, du kilométrage, de la note du prestataire, de la flexibilité de la réservation, de la propreté, du service client et plus encore.
            </p>
          </div>

          {/* Étape 3 */}
          <div>
            <img
              src="/images/etape3.svg"
              alt="Étape 3 : réservez"
              className="mx-auto mb-4 w-32 h-32 object-contain"
            />
            <h3 className="text-xl font-bold mb-2">Étape 3 : réservez</h3>
            <p className="text-gray-700">
              Choisissez la voiture qui vous convient parfaitement et réservez-la sans frais supplémentaires. Payez directement lors de la prise en charge, et profitez de la liberté d’annuler ou de modifier votre réservation gratuitement jusqu’à l’heure de prise en charge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TroisEtapes;
