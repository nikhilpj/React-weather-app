import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import {GEO_API_URL,Geoptions} from '../../api'

const Search = ({onSearchChange})=>{
    const [search,setSearch] = useState('')

    const loadOptions = async(inputValue)=>{
        try {
            const response = await fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`, Geoptions);
            console.log("response is ",response.data)
            const result = await response.json();
            console.log(result);
            return {
              options: result.data.map((city)=>{
                return {
                    value:`${city.latitude} ${city.longitude}`,
                    label:`${city.name}`
                }
              })
            }
        } catch (error) {
            console.error(error);
        }
    }
    const handleChange = (searchData)=>{
        setSearch(searchData)
        onSearchChange(searchData)
    }
    return (<AsyncPaginate
    placeholder="search for a city"
    debounceTimeout={600}
    value={search}
    onChange={handleChange}
    loadOptions={loadOptions}/>)
}

export default Search