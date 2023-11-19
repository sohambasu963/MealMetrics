ANALYZE_MEAL = (
    "This image contains a picture of a meal. You must provide a very short description of the meal, no more than one line." \
    "You must also return the estimated calories in this meal, and the estimated carbohydrates, protein, and fat in this meal." \
    "You must also return the estimated portion size of this meal, in cups and grams."
)

PARSE_RESPONSE = (
    "Your role is to parse the following response. You must return the info in the format specified in the schema."
)

MEAL_NUTRITIONAL_SCHEMA = {
    "name": "meal_nutritional_analysis",
    "description": "Provide the nutritional breakdown and portion size estimates for a single meal, adaptable to any type of meal components.",
    "parameters": {
        "type": "object",
        "properties": {
            "meal_description": {
                "type": "string",
                "description": "A brief description of the meal, including main components."
            },
            "components": {
                "type": "array",
                "items": {
                    "type": "object",
                    "description": "Individual components of the meal.",
                    "properties": {
                        "name": {
                            "type": "string",
                            "description": "The name of the component (e.g., rice, chicken)."
                        },
                        "portion_size": {
                            "type": "string",
                            "description": "The estimated portion size of the component."
                        }
                    },
                    "required": ["name", "portion_size"]
                },
                "description": "List of meal components with portion sizes."
            },
            "nutritional_info": {
                "type": "object",
                "description": "Overall nutritional estimates of the meal.",
                "properties": {
                    "calories": {
                        "type": "integer",
                        "description": "Estimated total calories of the meal."
                    },
                    "carbs": {
                        "type": "integer",
                        "description": "Estimated grams of carbohydrates in the meal."
                    },
                    "protein": {
                        "type": "integer",
                        "description": "Estimated grams of protein in the meal."
                    },
                    "fat": {
                        "type": "integer",
                        "description": "Estimated grams of fat in the meal."
                    }
                },
                "required": ["calories", "carbs", "protein", "fat"]
            }
        },
        "required": ["meal_description", "components", "nutritional_info"]
    }
}