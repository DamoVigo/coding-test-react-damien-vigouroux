import React, { useState, useEffect } from 'react'
import { userIdService } from 'services/userId.service';

const InfosComponent = (e) => {

    var id = e.infos
    const [occup, setOccup] = useState([]);
    const [bday, setBday] = useState([]);


    const fetchInfo = (id) => {
        const response = userIdService.listWithId(id).then((e) => {
            setOccup(e.occupation)
            setBday(e.birthdate)
        })
    }

    useEffect(() => {
        fetchInfo(id)
        // return () => {
        //     cleanup
        // }
    }, [id])

    return (

        <div className="infos-block-user">
            {
                <>
                    <div className="occupation">Occupation : <span>{occup}</span></div>
                    <div className="birthday">Birthday : <span>{bday}</span></div>
                </>
            }
        </div>
    )
}

export default InfosComponent
