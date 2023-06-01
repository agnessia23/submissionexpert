import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantsdb-source';

const Detail = {
  async render() {
    return `
      <h2>Detail Page</h2>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDbSource.detailRestaurant(url.id);
    console.log(resto);
  },
};

export default Detail;
