from flask import Flask, request, jsonify, render_template, send_from_directory
import google.generativeai as genai
import os
from flask_cors import CORS

# Load environment variables
from dotenv import load_dotenv
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

CORS(app)

# Configure Google Generative AI API
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=GEMINI_API_KEY)
model_text = genai.GenerativeModel('gemini-1.5-flash')
model_image = genai.GenerativeModel('gemini-1.5-flash')  # Assuming a similar model for image generation

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)

@app.route('/generate', methods=['POST'])
def generate():
    user_prompt = request.form['prompt']
    try:
        # Generate content based on the user prompt
        response = model_text.generate_content(user_prompt)
        generated_text = response.text
        # Return the generated text as JSON
        return jsonify({'result': generated_text})
    except Exception as e:
        # Handle any exceptions and return an error message
        return jsonify({'error': str(e)}), 500

@app.route('/generate_image', methods=['POST'])
def generate_image():
    image_prompt = request.form['image_prompt']
    try:
        response = model_image.generate_image(image_prompt)
        image_url = response.url
        return jsonify({'image_url': image_url})
    except Exception as e:
        # Handle any exceptions and return an error message
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
