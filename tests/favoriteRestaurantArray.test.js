import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }
    // eslint-disable-next-line consistent-return, eqeqeq
    return favoriteRestaurants.find((restaurant) => restaurant.id == id);
  },
  getAllRestaurants() {
    return favoriteRestaurants;
  },
  putRestaurant(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    if (this.getRestaurant(restaurant.id)) {
      return;
    }
    favoriteRestaurants.push(restaurant);
  },
  deleteRestaurant(id) {
    // eslint-disable-next-line eqeqeq
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id != id);
  },
};

// eslint-disable-next-line no-undef
describe('Favorite Restaurant Array Contract Test Implementation', () => {
  // eslint-disable-next-line no-undef
  afterEach(() => {
    favoriteRestaurants = [];
  });
  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
