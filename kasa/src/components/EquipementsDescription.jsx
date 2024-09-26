import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logementservice from '@/_Services/logement.service';

import '@/assets/Css/Pages/logementDetails.css';


const EquipementsDescription = () => {
    const [logement, setLogement] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const { id } = useParams();
    let navigate = useNavigate();


    useEffect(() => {
        GetOneLogementInfo();
    }, [id]);

    const GetOneLogementInfo = async () => {
        await logementservice.GetOneLogement(id)
            .then((data) => {
                if (data) {
                    setLogement(data);
                    setisLoading(false);
                } else {
                    navigate("/404");
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const displayEquipments = (equipments) => {
        if (equipments) {
            return (
                <ul>
                    {equipments.map((equipement, index) => {
                        return (
                            <li key={index}>
                                {equipement}
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }

    if (isLoading) return (<h2>Chargement...</h2>)

};

export default EquipementsDescription;