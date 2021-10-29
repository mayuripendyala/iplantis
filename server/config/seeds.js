const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Easy Care Plants' },
    { name: 'Low Light Plants' },
    { name: 'Pet-friendly Indoor Plants' },
    { name: 'Air Purifying' },
    { name: 'Hanging Plants' },
    { name: 'All' },

  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Philodendron Xanadu Plant',
      description:
        'Originating from Brazil Xanadu (that’s zanna-do) is an evergreen shrub that will grow equally well in a pot or in the ground. It enjoys a warm garden and likes the indoor life if you have a sunny windowsill away from direct burning light.',
      image: 'PhilodendronXanadu.jpg',
      category: categories[0]._id,
      price: 30,
      quantity: 10
    },
    {
      name: 'Fern',
      description:
        'Nephrolepis exaltata, known as the sword fern or Boston fern, is a species of fern in the family Lomariopsidaceae native to tropical regions throughout the world. This evergreen plant can reach as high as 40–90 centimetres, and in extreme cases up to 1.5 metres.',
      image: 'Boston-Fern.jpg',
      category: categories[0]._id,
      price: 25,
      quantity: 10
    },
    {
      name: 'Peace Lilly',
      category: categories[1]._id,
      description:
        'Spathiphyllum is a genus of about 47 species of monocotyledonous flowering plants in the family Araceae, native to tropical regions of the Americas and southeastern Asia. Certain species of Spathiphyllum are commonly known as spath or peace lilies.', 
      image: 'peace-lilly.jpg',
      price: 20,
      quantity: 10
    },
    {
      name: 'Devils Ivy',
      category: categories[3]._id,
      description:
        'Epipremnum aureum is a species in the arum family Araceae, native to Moorea in the Society Islands of French Polynesia',
      image: 'Devils-Ivy.jpg',
      price: 20,
      quantity: 10
    },
    {
      name: 'Chain of hearts',
      category: categories[4]._id,
      description:
        'Chain of hearts (Ceropegia woodii) is a gorgeous trailing plant thats perfect for hanging pots or baskets. The chains can reach 3-4m long and the heart shaped leaves, which can include shades of green, purple, red and cream, are just so sweet!',
      image: 'Heart-of-Chains.jpeg',
      price: 14.99,
      quantity: 10
    },
    {
      name: 'Philodendron Hederaceum',
      category: categories[4]._id,
      description:
        'Philodendron hederaceum also goes by the name of Sweetheart Vine or Heart Leaf Philodendron and some know her as the philodendron cordatum but we do-gooders have to list her as her correct name since birth and that is Philodendron hederaceum. ',
      image: 'PhilodendronHederaceum.jpg',
      price: 30,
      quantity: 10
    },
    {
      name: 'Calathea Zebrina',
      category: categories[2]._id,
      description:
      'Calathea zebrina, the zebra plant, is a species of plant in the family Marantaceae, native to southeastern Brazil. Under the synonym Goeppertia zebrina this plant has gained the Royal Horticultural Societys Award of Garden Merit.',
      image: 'Zebra-Plant.jpg',
      price: 10,
      quantity: 10
    },
    {
      name: 'Chlorophytum comosum Ocean Spider',
      category: categories[2]._id,
      description:
      'Chlorophytum comosum, usually called spider plant but also known as spider ivy, ribbon plant, and hen and chickens is a species of evergreen perennial flowering plant. It is native to tropical and southern Africa, but has become naturalized in other parts of the world, including western Australia.',
        image: 'Spider-plants.jpg',
      price: 20,
      quantity: 10
    },
    {
      name: 'English ivy',
      category: categories[1]._id,
      description: 'Hedera helix, the common ivy, English ivy, European ivy, or just ivy, is a species of flowering plant of the ivy genus in the family Araliaceae, native to most of Europe and western Asia. ',
      image: 'Varigated-English-ivy.jpeg',
      price: 20,
      quantity: 1
    },
    {
      name: 'Snake Plant',
      category: categories[3]._id,
      description:
        'Dracaena trifasciata is a species of flowering plant in the family Asparagaceae, native to tropical West Africa from Nigeria east to the Congo. It is most commonly known as the snake plant, Saint Georges sword, mother-in-laws tongue, and vipers bowstring hemp, among other names',  
        image: 'Snake-plant.jpg',
      price: 25,
      quantity: 10
    },
    {
      name: 'Mini Monstera',
      category: categories[3]._id,
      description:
        'The Mini Monstera is actually a member of the Rhaphidophora family. Bearing cute small split leaves, it can grow tall and prefers growing on a totem pole. It can be trained to grow into a narrow form making it great for corners and small spaces.',
      image: 'Mini-Monstera.jpg',
      price: 25,
      quantity: 10
    },
    {
      name: 'Money Plant Gold Neon',
      category: categories[0]._id,
      description:
        'Money  Plant Gold is the most popular houseplants for their versatility and easy to care for.  This plant is suitable to put on tabletops or as a hanging basket.  It is a striking plant with fleshy, gold-splashed, golden foliage which is typically heart-shaped, but often oval.',
      image: 'Money-Plant-Gold-Neon.jpeg',
      price: 9.99,
      quantity: 10
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
