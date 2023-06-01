import RestaurantDbSource from '../../data/restaurantsdb-source';

const ListResto = {
  async render() {
    return `
        <h2>List Restaurants</h2>
      `;
  },

  async afterRender() {
    const restos = await RestaurantDbSource.listRestaurant();
    console.log(restos);
  },
};

export default ListResto;
