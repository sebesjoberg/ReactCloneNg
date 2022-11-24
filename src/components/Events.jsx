import React, { Component } from "react";
import Event from "./Event";
class Events extends Component {
  state = {
    events: [
      {
        id: 16051,
        title: "Frukost i Bakfickan på Stockholms Nation",
        starttime: "2022-11-23T07:30:00",
        endtime: "2022-11-23T10:00:00",
        nation: "Stockholms Nation",
        location: "Stockholms nation ",
        link: "https://nationsguiden.se/?pid=5289&evid=271928",
        description:
          "Varje vardag serverar vi på Stockholms nation en god och mysig frukost. Vi erbjuder en frukostbuffé som innehåller såväl hembakat bröd med ett brett utbud av pålägg som yoghurt med hemgjord müsli och färska bär. Vi har laktos- och glutenfria alternativ. Det är helt enkelt den perfekta starten på dagen och ett bra ställe att träffa seminariegruppen eller dina vänner innan dagens föreläsningar börjar.PRIS: 50 kronor (buffé)",
        logo: "https://i.imgur.com/ysSnuRl.png",
      },
      {
        id: 16052,
        title: "Frukost i Majs Café",
        starttime: "2022-11-23T08:00:00",
        endtime: "2022-11-23T10:00:00",
        nation: "Norrlands Nation",
        location: "Norrlands nation",
        link: "https://nationsguiden.se/?pid=5289&evid=251030",
        description:
          "Varje vardagsmorgon dukar Norrlands nations cafévärdar upp en frukostbuffé med kaffe, te, juice, fil, yoghurt, ägg och en massa gott pålägg! Veganska och glutenfria alternativ finns.Missa inte heller vår lunchservering mellan 12.00-14.00 eller vårt lördagsfika på lördagar mellan 12.00-15.00. Varje vardag har vi även öppet för eftermiddagsfika, där ni kan köpa godsaker från vår kakkyl!",
        logo: "https://i.imgur.com/WZleKCd.png",
      },
    ],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.events.map((event) => (
            <Event key={event.id} event={event} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Events;
