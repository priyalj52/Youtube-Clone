import { createContext, useContext, useEffect, useState } from "react";
import { fetchSearchResultFromAPI, fetchVideoResultFromAPI} from "./api";
export const Context = createContext();
export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("New");
  const [res,setRes]=useState("")
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    fetchCategoryData(category);
  }, [category]);

  const fetchCategoryData = async(query) => {
    setLoading(true);
    await fetchSearchResultFromAPI(query)
      .then((res) => res.json())
     .then((data)=>{
      // console.log(data.contents)
    setRes(data.contents);
    setLoading(false);
    })
      
      .catch((err) => console.log(err));
  };
 
      
   
  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        setCategory,
        category,
        mobileMenu,
        setMobileMenu,
        res,
        setRes
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
