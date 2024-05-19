import React, {FC, useEffect, useState} from "react";
import {getAllRecipes} from "../../services/recipes.api.services";
import {IRecipeProps} from "../../models/Recipe";
import Recipe from "../recipe/Recipe";

const Recipes :FC = () => {

    const [recipes, setRecipes] = useState<IRecipeProps[]>([]);

    useEffect(() => {
        getAllRecipes().then(value => setRecipes(value.data));
    }, []);

    return (
        <div>
            {
                recipes.map((value:IRecipeProps) => (<Recipe key={value.id}
                                                             id={value.id}
                                                             name={value.name}
                                                             cuisine={value.cuisine}
                                                             mealType={value.mealType}
                                                             instructions={value.instructions}
                                                             image={value.image}/>))
            }
        </div>
    );
};

export default Recipes;