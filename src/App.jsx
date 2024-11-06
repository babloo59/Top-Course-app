import React, { useEffect } from "react";
import "./App.css";
import Navbar from './component/Navbar';
import Cards from './component/Cards';
import Filter from './component/Filter'
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import { useState } from "react";
import Spinner from "./component/Spinner";

const App = () => {

  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState(filterData[0].title);

  useEffect( () => {
    
    const fetchData = async() => {
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        // save data into a variable
        setCourses(output.data);
        console.log("courses value update");
        console.log(courses);
      }
      catch(error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    fetchData();
  },[]);
  return (
    <div className="min-h-screen flex flex-col bg-slate-600">
      <div>
      <Navbar/>
      </div>

      <div>
      <Filter 
          filterData = {filterData}
          category = {category}
          setCategory = {setCategory}
      />
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses = {courses} category = {category}/>)
        }
      </div>
    </div>
  );
}

export default App;
