import apartmentServiceData from "../assets/data/apartment.json";


const GetAllApartment = () => {
    return apartmentServiceData;
}

const GetOneApartment = async (id) => {
    const OneApartment = await apartmentServiceData.find(apartment => apartment.id === id);
    return OneApartment
}

export const apartmentService = {
    GetAllApartment,
    GetOneApartment
}

export default apartmentService;