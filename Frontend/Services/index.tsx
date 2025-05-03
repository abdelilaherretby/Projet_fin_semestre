import request, {gql} from 'graphql-request';

export const getCarList = async () => {
    const query = gql`
    query cardliste {
  carLists {
    createdAt
    places
    publishedAt
    name
    marque
    id
    image {
      url
    }
    typeBoite
    fuelType
    updatedAt
    lieuDeRetour
    lieuDeRetrait
    carType
    prixParJour
    kilometrageInclus
    tarifKmSupp
    tarifKmIlimitesParJour
  }

  reservations {
      dateDeDepart
      dateDeRetour
      id
      carList{
        id
        name
        marque
      }
      
    }
}
    `;
    const result = await request("https://eu-west-2.cdn.hygraph.com/content/cm98d93mt00c908wbcfhpn9ui/master", query);
    return result;

}