document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('prompt-form');
    const imageForm = document.getElementById('image-form');
    const resultElement = document.getElementById('result');
    const loadingElement = document.getElementById('loading');
    const errorMessageElement = document.getElementById('error-message');
    const imageResponseElement = document.getElementById('image-response');
    const generatedImageElement = document.getElementById('generated-image');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const prompt = document.getElementById('prompt').value.trim();

        if (!prompt) {
            resultElement.textContent = 'Prompt cannot be empty.';
            return;
        }

        loadingElement.style.display = 'block';
        errorMessageElement.style.display = 'none';

        try {
            const response = await fetch('/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ prompt: prompt })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data.error) {
                resultElement.textContent = `Error: ${data.error}`;
            } else {
                resultElement.textContent = data.result;
            }
        } catch (error) {
            resultElement.textContent = `Error: ${error.message}`;
        } finally {
            loadingElement.style.display = 'none';
        }
    });

    imageForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const imagePrompt = document.getElementById('image_prompt').value.trim();

        if (!imagePrompt) {
            resultElement.textContent = 'Image prompt cannot be empty.';
            return;
        }

        loadingElement.style.display = 'block';
        errorMessageElement.style.display = 'none';

        try {
            const response = await fetch('/generate_image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ image_prompt: imagePrompt })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data.error) {
                errorMessageElement.textContent = `Error: ${data.error}`;
            } else {
                generatedImageElement.src = data.image_url;
                generatedImageElement.style.display = 'block';
                imageResponseElement.style.display = 'block';
            }
        } catch (error) {
            errorMessageElement.textContent = `Error: ${error.message}`;
        } finally {
            loadingElement.style.display = 'none';
        }
    });
});
