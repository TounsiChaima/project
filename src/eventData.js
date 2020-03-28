import * as categoriesAPI  from './categoriesData';
import img1 from './assets/cstc.png';
import img2 from './assets/aeroday.jpg';
import img3 from './assets/tunirobots.jpg';

const events = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "CSTC",
    categorie: { _id: "5b21ca3eeb7f6fbccd471818", name: "CS" },
    image:img1,
    date:"01/01/01",
    author:"IEEE"
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Tunirobots",
    categorie: { _id: "5b21ca3eeb7f6fbccd471818", name: "Robotics" },
    image:img3,
    
    date:"01/01/01",
    author:"IEEE"
    
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Aeroday",
    categorie: { _id: "5b21ca3eeb7f6fbccd471820", name: "Soft Skills" },
    image:img2,
    
    date:"01/01/01",
    author:"IEEE"
    
  }
];

export function getEvents() {
  return events;
}

export function getEvent(id) {
  return events.find(m => m._id === id);
}


export function deleteEvent(id) {
  let eventInDb = events.find(m => m._id === id);
  events.splice(events.indexOf(eventInDb), 1);
  return eventInDb;
}



    
