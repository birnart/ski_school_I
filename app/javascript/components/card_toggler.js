const cardInfoToggler = () => {
  const cardTrip1 = document.queerySelector(".card-trip1");
  const infoToggle1 = document.queerySelector(".info-toggle1");
  const cardTrip2 = document.queerySelector(".card-trip2");
  const infoToggle2 = document.queerySelector(".info-toggle2");
  const cardTrip3 = document.queerySelector(".card-trip3");
  const infoToggle3 = document.queerySelector(".info-toggle3");

  cardTrip1.addEventListener('click', (event) => {
    console.log("1")
  });
  cardTrip2.addEventListener('click', (event) => {
    console.log("2")
  });
  cardTrip3.addEventListener('click', (event) => {
    console.log("3")
  });
};
export { cardInfoToggler };
