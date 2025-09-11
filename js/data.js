// Reusable data for recipes and workouts
const recipes = [
    {
        id: 1,
        title: "Avocado Toast",
        category: "Breakfast",
        desc: "Healthy and quick toast.",
        ingredients: ["1 avocado", "2 slices whole-grain bread", "1 tsp lemon juice", "Salt"],
        steps: ["Mash avocado.", "Toast bread.", "Spread avocado, add lemon juice and salt."],
        nutrition: { calories: 200, protein: 6, carbs: 20, fat: 10 }
    },
    {
        id: 2,
        title: "Quinoa Salad",
        category: "Lunch",
        desc: "Light and nutritious salad.",
        ingredients: ["1 cup quinoa", "1 cucumber", "1 tomato", "Olive oil"],
        steps: ["Cook quinoa.", "Chop veggies.", "Mix with olive oil."],
        nutrition: { calories: 300, protein: 8, carbs: 40, fat: 12 }
    },
    // Add 3 more (e.g., Smoothie, Grilled Chicken, Vegan Bowl)
];

const workouts = [
    { id: 1, name: "Push-ups", bodyPart: "Arms", equipment: "None" },
    { id: 2, name: "Squats", bodyPart: "Legs", equipment: "None" },
    { id: 3, name: "Dumbbell Curls", bodyPart: "Arms", equipment: "Dumbbells" },
    // Add 7 more (mix body parts: Legs, Full Body; equipment: None, Dumbbells)
];