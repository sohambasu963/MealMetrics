import React from 'react';
import Image from 'next/image';
import mealImage from '../../public/images/butter_chicken.jpeg';
import { IngredientCard } from './IngredientCard';

export default function MealPage() {
    const mealInfo = {
        description: 'Butter Chicken with Rice',
        calories: '650 kcal',
        carbs: '50g',
        protein: '25g',
        fat: '20g'
    };

    return (
        <div className="flex h-[90vh] p-4 mx-auto bg-primary">
            {/* Left half with image and description */}
            <div className="w-2/5 h-full relative flex flex-col">
                <p className="text-lg p-4 bg-opacity-50 bg-black text-white absolute z-10 w-full text-center">
                    {mealInfo.description}
                </p>
                <div className="w-full h-full relative z-0">
                    <Image src={mealImage} alt="Butter Chicken" layout="fill" objectFit="cover" />
                </div>
            </div>
            
            {/* Right half with meal information and ingredient cards */}
            <div className="w-3/5 h-full py-4 px-8">
                <h2 className="text-3xl font-bold mb-4">Nutritional Breakdown</h2>
                <div className="text-lg">
                    <p className="mb-2"><strong>Calories:</strong> {mealInfo.calories}</p>
                    <p className="mb-2"><strong>Carbs:</strong> {mealInfo.carbs}</p>
                    <p className="mb-2"><strong>Protein:</strong> {mealInfo.protein}</p>
                    <p className="mb-2"><strong>Fat:</strong> {mealInfo.fat}</p>
                </div>

                <h2 className="text-3xl font-bold mt-16 mb-4">Ingredients</h2>
                <div className="grid grid-cols-3 gap-4">
                    <IngredientCard />
                    <IngredientCard />
                    <IngredientCard />
                </div>
            </div>
        </div>
    );
}
