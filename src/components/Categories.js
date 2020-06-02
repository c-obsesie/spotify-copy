import React from "react";
import PlayList from './PlayList'
const Categories = () => {
  const dataCategories = [
    {
      id: 1,
      name: "Rap Caviar",
      tagLine:'Hip Hop Music'
    },
    {
      id: 2,
      name: "Retro",
      tagLine:'Pop Music'

    },
    {
      id: 3,
      name: "Rap All Time 3",
      tagLine:'Rap Music'
    },
  
  ];
  return (
    <div>
     
      {dataCategories.map((category) => (
        <div className="cardsWrap">
          <h2>{category.name}</h2>
          <span className="seeAll">See All</span>
      <p className="subText">{category.tagLine}</p>
      <PlayList categoryId={category.id}/>
         
        </div>
      ))}
    </div>
  );
};
export default Categories;
