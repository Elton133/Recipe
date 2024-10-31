import Recipe from './Recipe';
import NavBanner from './NavBanner';
import boba from './assets/boba.jpg';
import lemonade from './assets/lemon2.jpg';
import coffee from './assets/coffee.jpg';
import strawberry from './assets/strawberry1.jpg';
import capuccino from './assets/capuccino.jpg';
import './Recipe.css'


export default function RecipeDisplay() {
    const cappuccinoRecipe = {
        title: "Cappuccino",
        image: capuccino,
        ingredients: [
            "Espresso: 1 shot (about 30 ml)",
            "Milk: 150 ml (whole milk works best for frothing)",
            "Cocoa powder or cinnamon: for dusting (optional)",
            "Sugar: to taste (optional)"
        ],
        instructions: [
            "Prepare the Espresso: Brew one shot of espresso using your espresso machine or stovetop maker. Pour it into your coffee cup.",
            "Froth the Milk: In a small saucepan, heat the milk over medium heat until it's warm but not boiling (about 150°F or 65°C). Use a milk frother or steam wand to froth the milk until it doubles in volume and forms a creamy foam.",
            "Combine Espresso and Milk: Gently pour the frothed milk over the espresso. Aim for a ratio of about 1:1:1 for espresso, steamed milk, and milk foam.",
            "Garnish (Optional): Dust the top with cocoa powder or cinnamon for extra flavor.",
            "Serve: Enjoy your homemade cappuccino while it's hot!"
        ]
    };
    const bobaTeaRecipe = {
      title: "Boba Tea",
      icon: {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 20,
          fill: "currentColor",
          class: "bi bi-cup-hot-fill",
          viewBox: "0 0 16 16",
          path1: "M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5",
          path2: "m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8",
      },
      image: boba,
      recipeName: "boba",
      ingredients: [
          "1/2 cup Tapioca Pearls",
          "1 cup Black Tea, brewed and chilled",
          "1/2 cup Milk or Milk Alternative (whole milk, almond, oat, etc.)",
          "1-2 tablespoons Sweetener (sugar, honey, or syrup)",
          "Ice Cubes (optional)"
      ],
      instructions: [
          "Prepare the Tapioca Pearls: Boil water in a pot, add the tapioca pearls, and cook for 10-15 minutes (or follow package instructions). Drain and rinse with cold water, then let them sit in a bit of sweetener.",
          "Brew the Tea: Brew a cup of strong black tea and let it cool or refrigerate it.",
          "Assemble the Drink: In a glass, add the cooked tapioca pearls, ice (if desired), the brewed tea, and milk. Stir in the sweetener until dissolved.",
          "Serve: Stir well and enjoy with a wide straw!"
      ]
    };
    const lemonadeRecipe = {
      title: "Lemonade",
      image:lemonade,
      ingredients: [
        "1 cup fresh lemon juice (about 4-6 lemons)",
        "1 cup sugar (adjust to taste)",
        "4 cups water",
        "Lemon slices for garnish",
        "Mint for garnish"
      ],
      instructions: [
        "In a pitcher, combine lemon juice and sugar. Stir until sugar is dissolved.",
        "Add water and mix well.",
        "Chill in the refrigerator or serve over ice.",
        "Garnish with lemon slices and mint."
      ]
    };
    const coldBrewCoffeeRecipe = {
      title: "Cold Brew Coffee",
      image: coffee,
      ingredients: [
        "1 cup coarsely ground coffee",
        "4 cups cold water",
        "Milk or sweetener (optional)"
      ],
      instructions: [
        "In a large jar or pitcher, combine coffee grounds and cold water.",
        "Stir and let steep in the refrigerator for 12-24 hours.",
        "Strain the coffee through a fine mesh sieve or coffee filter.",
        "Serve over ice and add milk or sweetener if desired."
      ]
    };
    const strawberryBananaSmoothieRecipe = {
      title: "Strawberry Banana Smoothie",
      image: strawberry,
      ingredients: [
        "1 cup fresh or frozen strawberries",
        "1 banana",
        "1 cup yogurt or milk",
        "1 tablespoon honey (optional)",
        "Ice cubes (if using fresh strawberries)"
      ],
      instructions: [
        "Combine strawberries, banana, yogurt (or milk), and honey in a blender.",
        "Blend until smooth, adding ice if desired.",
        "Pour into glasses and serve immediately."
      ]
    };
    return(
        <>
        <NavBanner />
        <div id="beverages">
            <Recipe {...cappuccinoRecipe} />
            <Recipe id="boba" {...bobaTeaRecipe} />
            <Recipe id="lemonade" {...lemonadeRecipe} />
            <Recipe id="coffee" {...coldBrewCoffeeRecipe} />
            <Recipe id="strawberry" {...strawberryBananaSmoothieRecipe} />
        </div>
        </>
    )
}