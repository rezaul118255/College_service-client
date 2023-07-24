// import { useEffect, useState } from "react";

import { useEffect } from "react";
import { useState } from "react";
import Colleges from "./Colleges";


// import { useEffect, useState } from "react";

// import Colleges from "./Colleges";


const SeachCollege = () => {

    const [college, setCollege] = useState([])
    const [myToys, setMyToys] = useState([])
    const [searchText, setSearchText] = useState("");


    const handleSearch = () => {
        fetch(`http://localhost:5000/menu/getToysByText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMyToys(data);
            });
    };
    useEffect(() => {
        fetch("http://localhost:5000/menu")

            .then(res => res.json())
            .then(data => setCollege(data))

    }, [])

    return (
        <div className="w-full">
            <div className="search-box p-2 text-center">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="p-1"
                />{" "}
                <button onClick={handleSearch}>Search</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    college.map(details =>
                        <Colleges
                            key={details.id}
                            details={details}
                        ></Colleges>





                    )
                }

            </div>



        </div>
    );
};

export default SeachCollege;