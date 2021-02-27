import React , {useEffect,useContext} from 'react'
import {User} from "../Context/UserContext";
import { useHistory } from "react-router-dom";
import {SearchBar} from "../Components/SearchBar/index"
import {SearchPageAcc} from "../Components/Accordion/index"
import Footer from '../Components/Footer'


function SearchPage() {
    const { userData, setUserData } = useContext(User);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user) history.push("/login");
      }, [userData.user, history]);
    
    return (
        <div>
            <h1>Search Content</h1>
            <SearchBar/>
            <SearchPageAcc/>
            <Footer />
        </div>
    )
}

export default SearchPage
