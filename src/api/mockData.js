const restaurants = [
    { id: 1, name: 'Restaurant A', description: 'A cozy place with delicious meals', location: 'Downtown' },
    { id: 2, name: 'Restaurant B', description: 'Fine dining with a beautiful view', location: 'Uptown' },
    { id: 3, name: 'Restaurant C', description: 'Casual eatery with a diverse menu', location: 'Suburbs' },
    { id: 4, name: 'Restaurant D', description: 'Authentic dishes with a modern twist', location: 'Old Town' },
    { id: 5, name: 'Restaurant E', description: 'Family-friendly with a play area', location: 'Residential Area' },
    { id: 6, name: 'Restaurant F', description: 'Organic and locally sourced ingredients', location: 'City Center' },
    { id: 7, name: 'Restaurant G', description: 'Fast service with gourmet options', location: 'Business District' },
    { id: 8, name: 'Restaurant H', description: 'Romantic setting with candlelit tables', location: 'Riverside' },
    { id: 9, name: 'Restaurant I', description: 'Fusion cuisine with exotic flavors', location: 'Harbor' },
    { id: 10, name: 'Restaurant J', description: 'Live music and a vibrant atmosphere', location: 'Main Street' },
];

  
  export const fetchRestaurants = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(restaurants), 500);
    });
  
  export const addRestaurant = (restaurant) =>
    new Promise((resolve) => {
      setTimeout(() => {
        restaurants.push({ id: restaurants.length + 1, ...restaurant });
        resolve();
      }, 500);
    });
  
  export const updateRestaurant = (updatedRestaurant) =>
    new Promise((resolve) => {
      setTimeout(() => {
        const index = restaurants.findIndex((r) => r.id === updatedRestaurant.id);
        restaurants[index] = updatedRestaurant;
        resolve();
      }, 500);
    });
  
  export const deleteRestaurant = (id) =>
    new Promise((resolve) => {
      setTimeout(() => {
        const index = restaurants.findIndex((r) => r.id === id);
        restaurants.splice(index, 1);
        resolve();
      }, 500);
    });
  