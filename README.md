# Simple_AI

**Simple_AI** is a web application that integrates Google Generative AI to generate text and images. The app provides a user-friendly interface for generating AI-driven content.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Configuration](#configuration)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Text Generation:** Generate engaging text content based on user prompts.
- **User Interaction:** Provides a button for users to manually generate new text content.
- **Responsive Design:** Ensures a seamless experience across different devices.

## Technologies

- **Backend:**
  - [Flask](https://flask.palletsprojects.com/): Web framework for Python.
  - [Google Generative AI](https://cloud.google.com/generative-ai): AI model for text and image generation.
  - [Requests](https://docs.python-requests.org/en/latest/): HTTP library for Python.

- **Frontend:**
  - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML): Markup language for web pages.
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): Style sheet language for designing web pages.
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): Programming language for client-side scripting.

## Installation

To set up and run the Simple_AI application locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/Simple_AI.git
    cd Simple_AI
    ```

2. **Create and activate a virtual environment:**

    ```bash
    python -m venv .venv
    .\.venv\Scripts\activate  # Windows
    source .venv/bin/activate  # macOS/Linux
    ```

3. **Install dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Set up environment variables:**

    Create a `.env` file in the root directory and add your Google Generative AI API key:

    ```env
    GEMINI_API_KEY=your_google_generative_ai_api_key
    ```

5. **Run the application:**

    ```bash
    python app.py
    ```

6. **Open your browser and navigate to `http://localhost:5000` to view the app.**

## Usage

- **Generate Text:** Click the “Generate New Text” button to create new AI-generated text based on a predefined prompt.