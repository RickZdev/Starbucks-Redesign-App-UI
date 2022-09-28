export default DATA = {
  categories: ['Popular', 'Coffee', 'Tea', 'Drink'],
  popular: [
    {
      id: 0,
      coffeeName: 'Cafè Americano',
      description: 'Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfuly rich cup with depth and nuance.',
      price: 200,
      rating: '4.7',
      image: require('../assets/images/coffee1.png'),
      imageCover: require('../assets/images/coffeeCover.png'),
    },
    {
      id: 1,
      coffeeName: 'Pumpkin Latte',
      description: 'Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfuly rich cup with depth and nuance.',
      price: 170,
      rating: '5.0',
      image: require('../assets/images/tea1.png'),
      imageCover: require('../assets/images/coffeeCover.png'),
    },
    {
      id: 2,
      coffeeName: 'Pink Americano',
      description: 'Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfuly rich cup with depth and nuance.',
      price: 190,
      rating: '4.7',
      image: require('../assets/images/drink1.png'),
      imageCover: require('../assets/images/coffeeCover.png'),
    },
  ],
  coffee: [
    {
      id: 0,
      coffeeName: 'Cafè Americano',
      description: 'Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfuly rich cup with depth and nuance.',
      price: 200,
      rating: '4.7',
      image: require('../assets/images/coffee1.png'),
      imageCover: require('../assets/images/coffeeCover.png'),
    },
    {
      id: 1,
      coffeeName: 'Cafè latte',
      description: 'Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfuly rich cup with depth and nuance.',
      price: 220,
      rating: '4.5',
      image: require('../assets/images/coffee2.png'),
      imageCover: require('../assets/images/coffeeCover.png'),
    },
    {
      id: 2,
      coffeeName: 'Blonde Roasts',
      description: 'Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfuly rich cup with depth and nuance.',
      price: 240,
      rating: '4.7',
      image: require('../assets/images/coffee3.png'),
      imageCover: require('../assets/images/coffeeCover.png'),
    },
  ],
  tea: [
    {
      id: 0,
      coffeeName: 'Pumpkin Latte',
      description: 'Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfuly rich cup with depth and nuance.',
      price: 170,
      rating: '5.0',
      image: require('../assets/images/tea1.png'),
      imageCover: require('../assets/images/coffeeCover.png'),
    },
    {
      id: 1,
      coffeeName: 'Caramel Frappe',
      description: 'Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfuly rich cup with depth and nuance.',
      price: 130,
      rating: '4.7',
      image: require('../assets/images/tea2.png'),
      imageCover: require('../assets/images/coffeeCover.png'),
    },
    {
      id: 2,
      coffeeName: 'Choco Frappe',
      description: 'Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfuly rich cup with depth and nuance.',
      price: 150,
      rating: '4.7',
      image: require('../assets/images/tea3.png'),
      imageCover: require('../assets/images/coffeeCover.png'),
    },
  ],
  drink: [
    {
      id: 0,
      coffeeName: 'Pink Americano',
      description: 'Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfuly rich cup with depth and nuance.',
      price: 240,
      rating: '5.0',
      image: require('../assets/images/drink1.png'),
      imageCover: require('../assets/images/coffeeCover.png'),
    },
    {
      id: 1,
      coffeeName: 'Graham Refresher',
      description: 'Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfuly rich cup with depth and nuance.',
      price: 250,
      rating: '4.7',
      image: require('../assets/images/drink2.png'),
      imageCover: require('../assets/images/coffeeCover.png'),
    },
    {
      id: 2,
      coffeeName: 'Caramel Espresso',
      description: 'Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfuly rich cup with depth and nuance.',
      price: 120,
      rating: '4.7',
      image: require('../assets/images/drink3.png'),
      imageCover: require('../assets/images/coffeeCover.png'),
    },
  ],
  products: [
    {
      id: 0,
      coffeeName: 'Cafè latte',
      description: 'Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfuly rich cup with depth and nuance.',
      price: 220,
      rating: '4.5',
      image: require('../assets/images/coffee2.png'),
      imageCover: require('../assets/images/coffeeCover.png'),
    },
    {
      id: 1,
      coffeeName: 'Caramel Frappe',
      description: 'Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfuly rich cup with depth and nuance.',
      price: 130,
      rating: '4.7',
      image: require('../assets/images/tea2.png'),
      imageCover: require('../assets/images/coffeeCover.png'),
    },
    {
      id: 2,
      coffeeName: 'Choco Frappe',
      description: 'Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfuly rich cup with depth and nuance.',
      price: 150,
      rating: '4.7',
      image: require('../assets/images/tea3.png'),
      imageCover: require('../assets/images/coffeeCover.png'),
    },
    {
      id: 3,
      coffeeName: 'Graham Refresher',
      description: 'Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfuly rich cup with depth and nuance.',
      price: 250,
      rating: '4.7',
      image: require('../assets/images/drink2.png'),
      imageCover: require('../assets/images/coffeeCover.png'),
    },
  ],
  reviews: [
    require('../assets/images/avatar-1.png'),
    require('../assets/images/avatar-2.png'),
    require('../assets/images/avatar-3.png'),
  ],
  quantity: Array.from({length: 100}, (_, i) => i + 1)
}