document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('prompt-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const prompt = document.getElementById('prompt').value;

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
                document.getElementById('result').textContent = `Error: ${data.error}`;
            } else {
                document.getElementById('result').textContent = data.result;
            }
        } catch (error) {
            document.getElementById('result').textContent = `Error: ${error.message}`;
        }
    });
});
