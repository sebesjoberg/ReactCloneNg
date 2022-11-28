import React, { Component, useEffect, useState } from "react";
import Event from "./Event";
const Events = () => {
  useEffect(() => {
    console.log("hi");
  }, []);
  const [state, setState] = useState({
    events: [
      {
        id: 8,
        title: "Frukost i Bakfickan på Stockholms Nation",
        starttime: "2022-12-06T07:30:00",
        endtime: "2022-12-06T10:00:00",
        nation: "Stockholms Nation",
        location: "Stockholms nation ",
        link: "https://nationsguiden.se/?pid=5289&evid=271928",
        description:
          "Varje vardag serverar vi på Stockholms nation en god och mysig frukost. Vi erbjuder en frukostbuffé som innehåller såväl hembakat bröd med ett brett utbud av pålägg som yoghurt med hemgjord müsli och färska bär. Vi har laktos- och glutenfria alternativ. Det är helt enkelt den perfekta starten på dagen och ett bra ställe att träffa seminariegruppen eller dina vänner innan dagens föreläsningar börjar.PRIS: 50 kronor (buffé)",
        logo: "https://i.imgur.com/ysSnuRl.png",
      },
      {
        id: 7,
        title: "Frukost i Majs Café",
        starttime: "2022-12-06T08:00:00",
        endtime: "2022-12-06T10:00:00",
        nation: "Norrlands Nation",
        location: "Norrlands nation",
        link: "https://nationsguiden.se/?pid=5289&evid=251030",
        description:
          "Varje vardagsmorgon dukar Norrlands nations cafévärdar upp en frukostbuffé med kaffe, te, juice, fil, yoghurt, ägg och en massa gott pålägg! Veganska och glutenfria alternativ finns.Missa inte heller vår lunchservering mellan 12.00-14.00 eller vårt lördagsfika på lördagar mellan 12.00-15.00. Varje vardag har vi även öppet för eftermiddagsfika, där ni kan köpa godsaker från vår kakkyl!",
        logo: "https://i.imgur.com/WZleKCd.png",
      },
      {
        id: 6,
        title: "Frukost i Bakfickan på Stockholms Nation",
        starttime: "2022-12-06T07:30:00",
        endtime: "2022-12-06T10:00:00",
        nation: "Stockholms Nation",
        location: "Stockholms nation ",
        link: "https://nationsguiden.se/?pid=5289&evid=271928",
        description:
          "Varje vardag serverar vi på Stockholms nation en god och mysig frukost. Vi erbjuder en frukostbuffé som innehåller såväl hembakat bröd med ett brett utbud av pålägg som yoghurt med hemgjord müsli och färska bär. Vi har laktos- och glutenfria alternativ. Det är helt enkelt den perfekta starten på dagen och ett bra ställe att träffa seminariegruppen eller dina vänner innan dagens föreläsningar börjar.PRIS: 50 kronor (buffé)",
        logo: "https://i.imgur.com/ysSnuRl.png",
      },
      {
        id: 5,
        title: "Frukost i Majs Café",
        starttime: "2022-12-06T08:00:00",
        endtime: "2022-12-06T10:00:00",
        nation: "Norrlands Nation",
        location: "Norrlands nation",
        link: "https://nationsguiden.se/?pid=5289&evid=251030",
        description:
          "Varje vardagsmorgon dukar Norrlands nations cafévärdar upp en frukostbuffé med kaffe, te, juice, fil, yoghurt, ägg och en massa gott pålägg! Veganska och glutenfria alternativ finns.Missa inte heller vår lunchservering mellan 12.00-14.00 eller vårt lördagsfika på lördagar mellan 12.00-15.00. Varje vardag har vi även öppet för eftermiddagsfika, där ni kan köpa godsaker från vår kakkyl!",
        logo: "https://i.imgur.com/WZleKCd.png",
      },
      {
        id: 4,
        title: "Frukost i Bakfickan på Stockholms Nation",
        starttime: "2022-12-06T07:30:00",
        endtime: "2022-12-06T10:00:00",
        nation: "Stockholms Nation",
        location: "Stockholms nation ",
        link: "https://nationsguiden.se/?pid=5289&evid=271928",
        description:
          "Varje vardag serverar vi på Stockholms nation en god och mysig frukost. Vi erbjuder en frukostbuffé som innehåller såväl hembakat bröd med ett brett utbud av pålägg som yoghurt med hemgjord müsli och färska bär. Vi har laktos- och glutenfria alternativ. Det är helt enkelt den perfekta starten på dagen och ett bra ställe att träffa seminariegruppen eller dina vänner innan dagens föreläsningar börjar.PRIS: 50 kronor (buffé)",
        logo: "https://i.imgur.com/ysSnuRl.png",
      },
      {
        id: 3,
        title: "Frukost i Majs Café",
        starttime: "2022-12-06T08:00:00",
        endtime: "2022-12-06T10:00:00",
        nation: "Norrlands Nation",
        location: "Norrlands nation",
        link: "https://nationsguiden.se/?pid=5289&evid=251030",
        description:
          "Varje vardagsmorgon dukar Norrlands nations cafévärdar upp en frukostbuffé med kaffe, te, juice, fil, yoghurt, ägg och en massa gott pålägg! Veganska och glutenfria alternativ finns.Missa inte heller vår lunchservering mellan 12.00-14.00 eller vårt lördagsfika på lördagar mellan 12.00-15.00. Varje vardag har vi även öppet för eftermiddagsfika, där ni kan köpa godsaker från vår kakkyl!",
        logo: "https://i.imgur.com/WZleKCd.png",
      },
      {
        id: 2,
        title: "Frukost i Bakfickan på Stockholms Nation",
        starttime: "2022-12-06T07:30:00",
        endtime: "2022-12-06T10:00:00",
        nation: "Stockholms Nation",
        location: "Stockholms nation ",
        link: "https://nationsguiden.se/?pid=5289&evid=271928",
        description:
          "Varje vardag serverar vi på Stockholms nation en god och mysig frukost. Vi erbjuder en frukostbuffé som innehåller såväl hembakat bröd med ett brett utbud av pålägg som yoghurt med hemgjord müsli och färska bär. Vi har laktos- och glutenfria alternativ. Det är helt enkelt den perfekta starten på dagen och ett bra ställe att träffa seminariegruppen eller dina vänner innan dagens föreläsningar börjar.PRIS: 50 kronor (buffé)",
        logo: "https://i.imgur.com/ysSnuRl.png",
      },
      {
        id: 1,
        title: "Frukost i Majs Café",
        starttime: "2022-12-06T08:00:00",
        endtime: "2022-12-06T10:00:00",
        nation: "Norrlands Nation",
        location: "Norrlands nation",
        link: "https://nationsguiden.se/?pid=5289&evid=251030",
        description:
          "Varje vardagsmorgon dukar Norrlands nations cafévärdar upp en frukostbuffé med kaffe, te, juice, fil, yoghurt, ägg och en massa gott pålägg! Veganska och glutenfria alternativ finns.Missa inte heller vår lunchservering mellan 12.00-14.00 eller vårt lördagsfika på lördagar mellan 12.00-15.00. Varje vardag har vi även öppet för eftermiddagsfika, där ni kan köpa godsaker från vår kakkyl!",
        logo: "https://i.imgur.com/WZleKCd.png",
      },
    ],
  });
  const onClick = (id) => {
    console.log(id); //reroute here
  };

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 ">
          {state.events.map((event) => (
            <Event key={event.id} event={event} click={onClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
