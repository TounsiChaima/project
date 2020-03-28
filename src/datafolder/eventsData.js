

const upcomingEV = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Tunirobots",
    category:"Robotics",
    
    img : 'C:\Users\Arij\draft\src\assets',
    
    Date: "2020-04",
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Aeroday",
    img : '../assets/aeroday.jpg',
    category : "Robotics" ,
    Date: "2020-04",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "CSTC",
    img : '../assets/aeroday.jpg',
    category :"Computer science",
    Date: "2020-04",
}
];

export function getUpcomingEV() {
  return upcomingEV ;
}
/*
export function getEvent(id) {
  return upcomingEV.find(m => m._id === id);
}

export function saveevent(event) {
  let eventInDb = events.find(m => m._id === event._id) || {};
  eventInDb.name = event.name;
  eventInDb.genre = genresAPI.genres.find(g => g._id === event.genreId);
  eventInDb.numberInStock = event.numberInStock;
  eventInDb.dailyRentalRate = event.dailyRentalRate;

  if (!eventInDb._id) {
    eventInDb._id = Date.now();
    events.push(eventInDb);
  }

  return eventInDb;
}

export function deleteevent(id) {
  let eventInDb = events.find(m => m._id === id);
  events.splice(events.indexOf(eventInDb), 1);
  return eventInDb;
}
*/