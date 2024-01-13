const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Liking Restaurants');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/like');
});

// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurant', ({ I }) => {
  I.wait(3);
  I.see("You haven't liked a restaurant", '#no-like-restaurants');
});

// eslint-disable-next-line no-undef
Scenario('Liking one restaurants', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant-item__content h3 a');
  I.seeElement('.restaurant-item__content h3 a');

  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__content h3 a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

// eslint-disable-next-line no-undef
Scenario('Unliking One restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant-item__content h3 a');
  I.seeElement('.restaurant-item__content h3 a');

  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__content h3 a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.amOnPage('#/like');
  I.waitForElement('.restaurant-item__content h3 a');
  I.seeElement('.restaurant-item__content h3 a');

  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/like');
  I.wait(3);
  I.see("You haven't liked a restaurant", '#no-like-restaurants');
});
