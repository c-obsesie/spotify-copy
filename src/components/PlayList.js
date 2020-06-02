import React from 'react';
import { ReactComponent as PlayIcon } from "../svg/play.svg";

const PlayList=(props)=>{
    const dataPlaylist=[
        {
        id:101,
        category_id:3,
        name:'Viva Latino',
        txtSmall:'Spanish music',
        img:'https://images.unsplash.com/photo-1590794249763-fd64c2244c7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },  {
        id:102,
        category_id:1,
        name:'Amor Amor',
        txtSmall:'Que viva el amor',
        img:'https://images.unsplash.com/photo-1591027689092-573745e17d42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'
    },
    {
        id:106,
        category_id:1,
        name:'Esenciales',
        txtSmall:'Timeless Latin hits',
        img:'https://images.unsplash.com/photo-1591028472295-d470cb8d71a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
        id:103,
        category_id:1,
        name:'Rap All Time 3',
        txtSmall:'Today rap music',
        img:'https://images.unsplash.com/photo-1591027480007-a42f6ef886c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
        id:105,
        category_id:3,
        name:'Bachata lovers',
        txtSmall:'Tu lista favorita de Bachata',
        img:'https://images.unsplash.com/photo-1591026579168-631c26671b2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=603&q=80'
    },
    {
        id:104,
        category_id:2,
        name:'Reggeton',
        txtSmall:'Upbeat Reggeton music',
        img:'https://images.unsplash.com/photo-1590941742869-ddc3c8490472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'

    },
]

const matchPlaylist=dataPlaylist.filter(playlist=>playlist.category_id===props.categoryId)

    return(
    <div>
         <div className="cardsWrapInner">
             {matchPlaylist.map((playlist)=>(
    <div className="card">
    <div className="cardImage">
      <img
        src={playlist.img}
        alt="pic 1"
      ></img>
    </div>
    <div className="cardText"></div>
    <div className="cardContent">
      <h3>{playlist.name}</h3>
      <span className="subTExtSmall">
        {playlist.txtSmall}
      </span>
    </div>
    <span className="playIcon">
      <PlayIcon />
    </span>
  </div>
  

             ))}
        
          </div>
    </div>
    )}

export default PlayList;