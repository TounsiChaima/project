export const Categories = [
    { _id: "5b21ca3eeb7f6fbccd471818", name: "CS" },
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Soft Skills" },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "Robotics" }
  ];
  
  export function getCategories() {
    return Categories.filter(g => g);
  }
  