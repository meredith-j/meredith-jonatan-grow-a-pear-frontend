import './ProfilePage.scss';
import ProfileLists from "../../components/ProfileLists";
import ListDetails from "../../components/ListDetails";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProfilePage () {

    const [ lists, setLists ] = useState([])
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        axios
          .get('http://localhost:8080/list')
          .then((response) => {
            setLists(response.data);
          })
          .catch((err) => {
            console.log(
              `An error occured while trying to access these lists: ${err}`
            );
          });
      }, []);


    //   const handleClick = async () => {
    //     axios
    //      .get(`http://localhost:8080/list/${id}`)

    //       .then((response) => {
    //         setData(response.data);
    //       })
    //     .catch ((err) => {
    //         `An error occured while trying to access this list: ${err}`;
    //     })
    //     setIsLoading(false);
    //   };


    return(
        <section className="profile">
            <div className="list__box">
                <h4 className="profile__heading">Welcome back, BrainStation!</h4>

                {lists.map((list) => {
                    return(
                        <div key={list.id}>
                            <a className="list__name" key={list.id} >{list.list_name}</a>
                        </div>
                )
                })}
             </div>
             {/* {data.map((plant) => {
                    return(
                        <div key={plant.id} className="list__card" id={plant.id} name="plant" value={plant.id}>
                            <img className="list__image" src={plant.image} alt={plant.name} />
                            <div className='list__details'>
                                <h5 className='list__item'>{plant.name}</h5>
                                <p>{plant.info}</p>
                            </div>
                        </div>
                    )
                })} */}
        </section>
    )
}