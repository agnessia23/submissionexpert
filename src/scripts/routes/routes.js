import ListResto from '../views/pages/list-restaurants';
import Favorites from '../views/pages/favorites';
import Detail from '../views/pages/detail';

const routes = {
  '/': ListResto, // default page
  '/list-restaurants': ListResto,
  '/favorites': Favorites,
  '/detail/:id': Detail,
};

export default routes;
