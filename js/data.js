const recipes = [
    {
        id: 1,
        title: "Avocado Toast",
        category: "Breakfast",
        desc: "Quick and healthy toast.",
        ingredients: ["1 avocado", "2 slices whole-grain bread", "1 tsp lemon juice", "Pinch of salt"],
        steps: ["Mash avocado with lemon juice.", "Toast bread.", "Spread avocado, sprinkle salt."],
        nutrition: { calories: 200, protein: 6, carbs: 20, fat: 10 }
    },
    {
        id: 2,
        title: "Quinoa Salad",
        category: "Lunch",
        desc: "Light and nutritious salad.",
        ingredients: ["1 cup quinoa", "1 cucumber", "1 tomato", "1 tbsp olive oil"],
        steps: ["Cook quinoa.", "Chop cucumber and tomato.", "Mix with olive oil."],
        nutrition: { calories: 300, protein: 8, carbs: 40, fat: 12 }
    },
    {
        id: 3,
        title: "Berry Smoothie",
        category: "Breakfast",
        desc: "Refreshing fruit smoothie.",
        ingredients: ["1 cup mixed berries", "1 banana", "1 cup almond milk"],
        steps: ["Blend all ingredients until smooth.", "Serve chilled."],
        nutrition: { calories: 180, protein: 4, carbs: 30, fat: 5 }
    },
    {
        id: 4,
        title: "Grilled Chicken",
        category: "Dinner",
        desc: "Lean protein-packed meal.",
        ingredients: ["1 chicken breast", "1 tsp olive oil", "Spices"],
        steps: ["Season chicken.", "Grill for 6-8 mins per side.", "Serve hot."],
        nutrition: { calories: 250, protein: 30, carbs: 0, fat: 8 }
    },
    {
        id: 5,
        title: "Vegan Buddha Bowl",
        category: "Lunch",
        desc: "Colorful vegan bowl.",
        ingredients: ["1 cup brown rice", "1/2 avocado", "1 cup roasted veggies"],
        steps: ["Cook rice.", "Roast veggies.", "Assemble bowl with avocado."],
        nutrition: { calories: 350, protein: 10, carbs: 50, fat: 15 }
    }
];

const workouts = [
    { id: 1, name: "Push-ups", bodyPart: "Arms", equipment: "None" },
    { id: 2, name: "Squats", bodyPart: "Legs", equipment: "None" },
    { id: 3, name: "Dumbbell Curls", bodyPart: "Arms", equipment: "Dumbbells" },
    { id: 4, name: "Lunges", bodyPart: "Legs", equipment: "None" },
    { id: 5, name: "Plank", bodyPart: "Full Body", equipment: "None" },
    { id: 6, name: "Dumbbell Rows", bodyPart: "Arms", equipment: "Dumbbells" },
    { id: 7, name: "Burpees", bodyPart: "Full Body", equipment: "None" },
    { id: 8, name: "Deadlifts", bodyPart: "Legs", equipment: "Dumbbells" },
    { id: 9, name: "Mountain Climbers", bodyPart: "Full Body", equipment: "None" },
    { id: 10, name: "Shoulder Press", bodyPart: "Arms", equipment: "Dumbbells" }
];