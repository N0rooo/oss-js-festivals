import axios from 'axios';

const baseUrl = "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&rows=100&";

export const getAllFestivals = async () => {
    const response = await axios.get(baseUrl + 'facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut');
    if (response.data.records.length === 0) {
        throw new Error('No festival found');
    }
    return response.data.records;
}

export const getFestivalByRegion = async (region) => {
    const response = await axios.get(baseUrl + 'refine.region=' + region);
    if (response.data.records.length === 0) {
        throw new Error('No festival found with this region');
    }
    return response.data.records;
}

export const getFestivalByMonth = async (month) => {

    const months = {
        "01": "01 (janvier)",
        "02": "02 (février)",
        "03": "03 (mars)",
        "04": "04 (avril)",
        "05": "05 (mai)",
        "06": "06 (juin)",
        "07": "07 (juillet)",
        "08": "08 (août)",
        "09": "09 (septembre)",
        "10": "10 (octobre)",
        "11": "11 (novembre)",
        "12": "12 (décembre)",
    }


    const convertedMonth = months[month];

    const response = await axios.get(baseUrl + 'refine.mois_habituel_de_debut=' + convertedMonth);
    if (response.data.records.length === 0) {
        throw new Error('No festival found this month');
    }
    return response.data.records;
}

export const getFestivalByDepartement = async (departement) => {
    const response = await axios.get(baseUrl + 'refine.departement=' + departement);
    if (response.data.records.length === 0) {
        throw new Error('No festival found with this departement');

    }
    return response.data.records;
}


