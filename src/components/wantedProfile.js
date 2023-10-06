import React, { useEffect, useContext } from 'react';
import FBIWantedContext from '../ContextAPI/FBIWantedContext';



const WantedProfile = () => {
    const fbiWantedContext = useContext(FBIWantedContext);

    const getWantedListHandler = () => {
        fbiWantedContext.getFBIWantedList();
    }

    const profile = fbiWantedContext.wantedList;

    useEffect(() => {
        getWantedListHandler();
        // eslint-disable-next-line
    }, []);
    return ( 
        <div>
            {profile.map((item, idx) => (
                <div key={idx}>
                    {item.images.map((image, index) => (
                        <div key={index}>
                            <img src={image.thumb} alt=''/>
                            <p>{image.caption}</p>
                        </div>
                    ))}
                    <p>Name: {item.title}</p>
                    <p>Alias: {(item.aliases) ? item.aliases : 'N/A'}</p>
                    <p>DOB: {item.dates_of_birth_used}</p>
                    <p>POB: {item.place_of_birth}</p>
                    <p>Height: {item.height_max}</p>
                    <p>Weight: {item.weight}</p>
                    <p>Eyes: {item.eyes}</p>
                    <p>Race: {item.race}</p>
                    <p>Sex: {item.sex}</p>
                    <p>Wanted For: {item.description}</p>
                    <p>Caution: {item.warning_message}</p>
                </div>
                
            ))}
        </div>
     );
}
 
export default WantedProfile;