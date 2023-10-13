import React from "react";
import "./BikeRoutes.css";

export default function BikeRoutes() {

   const routesInfo = [
      {
         "id": "4",
         "title": "Patagonia to Canelo Pass",
         "anchor": "canelo-pass",
         "snippet": "Beat the Tucson heat with this higher-elevation gravel ride. Bring water!",
         "thumbnailImg": "https://portfolio-2023.s3.us-east-2.amazonaws.com/bikeRoutesPhotos/patagonia365x274.jpg",
         "imgAltText": "Canelo Pass",
         "link": "https://ridewithgps.com/routes/44739479"
      },
      {
         "id": "1",
         "title": "Urban Bikepacking to Owl's Head",
         "anchor": "owls-head",
         "snippet": "A lot of easy miles on The Loop, ample resupplies along the way, camping on BLM land and gravel!",
         "thumbnailImg": "https://portfolio-2023.s3.us-east-2.amazonaws.com/bikeRoutesPhotos/owls-head365x274.jpg",
         "imgAltText": "Owl's Head Camping",
         "link": "https://ridewithgps.com/routes/44739169"

      },
            {
         "id": "2",
         "title": "The Dirty Lemmon",
         "anchor": "dirty-lemmon",
         "snippet": "Out through Reddington pass, a lot of gravel and elevation gain, down the Catalina Highway.",
         "thumbnailImg": "https://portfolio-2023.s3.us-east-2.amazonaws.com/bikeRoutesPhotos/lemmon365x274.jpg",
         "imgAltText": "Dirty Lemmon",
         "link": "https://ridewithgps.com/routes/44739423"

      },
      {
         "id": "3",
         "title": "Arivaca + Buenos Aires",
         "anchor": "arivaca",
         "snippet": "Gravel tour of the grasslands of Southern AZ.",
         "thumbnailImg": "https://portfolio-2023.s3.us-east-2.amazonaws.com/bikeRoutesPhotos/arivaca365x274.jpg",
         "imgAltText": "Arivaca",
         "link": "https://ridewithgps.com/routes/41469453"
      },

   ]

   return (
      <div className="bike-routes-page page-content">
         <h2>Tucson Overnighter Bikepacking Routes</h2>
         {
            routesInfo.map((obj, index) => {
               const className = index % 2 === 0 ? "section-even" : "section-odd"
               return (
                  <a href={obj.link} key={obj.id} target="_blank">
                     <section className={className}>
                        <div className="text-area">
                           <h3>{obj.title}</h3>
                           <p>{obj.snippet}</p>
                        </div>
                        <img alt={obj.imgAlt} src={obj.thumbnailImg} />
                     </section>
                  </a>
               )

            })
         }

      </div>
   )
}
