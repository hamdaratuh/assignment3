import React from 'react';
import './ImageCard.css';

 function ImageCard(props){
     return(
         <div>
        <article class="wallpaper">
            <img src={props.uri} alt="Wallpaper #1" class="wallpaper" />
          </article>

          
          
         </div>
     )

 }
 export default ImageCard;