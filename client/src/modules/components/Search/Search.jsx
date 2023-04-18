import {React, useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import axios from 'axios';
import './search.css';

const Search = () =>{
    const [employee, setEmployee] = useState(null);

    const searchEmployee = async (employeeId) => {
        try {
          const responseEmp = await axios.get(`/api/employee/${employeeId}`);
          const dataEmp = await responseEmp.data;
         
            
            return dataEmp;
        } catch (error) {
          console.error(error);
        }
      };
    const searchHours = async (employeeId) =>{
        try{
            const responseShift = await axios.get(`/api/shift/hours/${employeeId}`);
            const dataShift = await responseShift.data;
            return dataShift;
        }catch(error){
            console.log(error);
        }
    }
      const handleSearch = async () => {
        const employeeId = document.querySelector(".search-input").value;
        const resultEmp = await searchEmployee(employeeId);
        const resultHrs = await searchHours(employeeId);
        console.log(`${resultHrs.ShiftID}`);
        setEmployee(resultEmp);
        const searchResult = document.createElement('span');
        searchResult.textContent = `${resultEmp.FirstName} ${resultEmp.LastName}`;
        const searchContainer = document.querySelector(".search-result");
        searchContainer.innerHTML = '';
        searchContainer.appendChild(searchResult);
      };
      
      
    return(
        <div>
            Welcome, Manager!
            <div className="search-container">
                <input type="text" placeholder="Employee ID..." className="search-input" />
                <button className="search-button" onClick={handleSearch}>
                    <FaSearch />
                </button><br></br>
                <div className="search-result"></div>
            </div>  
        </div>
    );
};

export default Search;
