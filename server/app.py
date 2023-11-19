from flask import Flask, jsonify
import openai
from dotenv import load_dotenv
import os
import base64
from prompts import ANALYZE_MEAL, MEAL_NUTRITIONAL_SCHEMA, PARSE_RESPONSE

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

app = Flask(__name__)


def encode_image(image_path):
  with open(image_path, "rb") as image_file:
    return base64.b64encode(image_file.read()).decode('utf-8')

@app.route("/breakdown-meal")
def breakdown_meal():
    image_path = "server/images/butter_chicken Small.png"
    base64_image = encode_image(image_path)
    

    default_args = {
        'temperature': 0.3,
        'frequency_penalty': 0,
        'presence_penalty': 0,
        'stop': ["\n"],
    }

    response = openai.ChatCompletion.create(
        model="gpt-4-vision-preview",
        messages=[
            {
            "role": "user",
            "content": [
                {"type": "text", "text": ANALYZE_MEAL},
                {
                "type": "image_url",
                "image_url": {
                    "url": f"data:image/jpeg;base64,{base64_image}"
                }
                },
            ],
            }
        ],
        max_tokens=300,
    )

    return response.choices[0].message.content


@app.route("/analyze-meal")
def analyze_meal():
    string_response = breakdown_meal()

    response = openai.ChatCompletion.create(
        model="gpt-4-1106-preview",
        messages=[
            {
            "role": "user",
            "content": [
                {"type": "text", "text": PARSE_RESPONSE},
                {"type": "text", "text": string_response},
            ],
            }
        ],
        tools=[{
           "type": "function",
           "function": MEAL_NUTRITIONAL_SCHEMA,
        }],
        max_tokens=300,
    )
    print(response)
    return response

if __name__ == '__main__':
    app.run(debug=True)
