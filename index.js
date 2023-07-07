import axios from 'axios';

const baseUrl = "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&rows=100&";

export const getAllFestivals = async () => {
    const response = await axios.get(baseUrl + 'facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut');
    console.log(response.data.records);
    return response;
}

export const getFestivalByRegion = async (region) => {
    const response = await axios.get(baseUrl + 'refine.region=' + region);
    if (response.data.records.length === 0) {
        console.log('No festival found in this region');
        return;
    }
    console.log(response.data.records);
}

export const getFestivalByDepartement = async (departement) => {
    const response = await axios.get(baseUrl + 'refine.departement=' + departement);
    if (response.data.records.length === 0) {
        console.log('No festival found in this departement ');
        return;
    }
    console.log(response.data.records);
}


// getAllFestivals();

getFestivalByRegion('Auvergne-Rhône-Alpesz');
// getFestivalByDepartement('01');