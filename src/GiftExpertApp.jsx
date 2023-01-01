import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";



export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["one Punch"]);

  const onAddCategory = (newCategory)=>{
    if(categories.includes(newCategory))return;

    setCategories( [newCategory, ...categories])
  }


  return (
    <>
      <h1>GiftExpertApp</h1>


      <AddCategory onAddCategory = { onAddCategory }/>



      {
        categories.map( (categories)=>(
          <GifGrid 
            key={categories} 
            category={categories}
          />
        ))
      }

        

    </>
  );
};
