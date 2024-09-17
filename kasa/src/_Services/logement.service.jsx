import Listelogement from "@/assets/data/logement.json";


const GetAllLogement = () => {
    return Listelogement;
}

const GetOneLogement = (id) => {
    const OneLogement = Listelogement.find(logement => logement.id === id);

    return OneLogement
}

export const logementservice = {
    GetAllLogement,
    GetOneLogement
}

export default logementservice;