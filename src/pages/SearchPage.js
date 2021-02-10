import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch';
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";


function SearchPage() {
    const [{ term }, dispatch] = useStateValue();

    // LIVE API CALL
    // const { data } = useGoogleSearch(term); 

    const data = Response;

    // https://developers.google.com/custom-search/v1/using_rest

    // https://cse.google.com/cse/create/new

    return (
        <div className='searchPage'>
            <div className="searchPage__header">
                {/* <h1>{term}</h1> */}
                <Link to="/">
                    <img
                        className="searchPage__logo"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons />
                </div>
                <div className="searchPage__options">
                    <div className="searchPage__optionsLeft">
                        <div className="searchPage__option">
                            <SearchIcon />
                            <Link to="/all">All</Link>
                        </div>
                        <div className="searchPage__option">
                            <DescriptionIcon />
                            <Link to="/news">News</Link>
                        </div>
                        <div className="searchPage__option">
                            <ImageIcon />
                            <Link to="/image">Images</Link>
                        </div>
                        <div className="searchPage__option">
                            <LocalOfferIcon />
                            <Link to="/shopping">Shopping</Link>
                        </div>
                        <div className="searchPage__option">
                            <RoomIcon />
                            <Link to="/maps">Maps</Link>
                        </div>
                        <div className="searchPage__option">
                            <MoreVertIcon />
                            <Link to="/more">more</Link>
                        </div>
                        
                    </div>
                    <div className="searchPage__optionsRight">

                    </div>
                </div>
            </div>

            <div className="searchPage__results">

            </div>
        </div>
    )
}

export default SearchPage
