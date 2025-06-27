require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require('express');     // Loads the express module 
const cors = require('cors');       // Loads the cors module to handle cross-origin requests

const app = express();          // Create an instance of an Express application: our actual server powered by Express. This app object will define routes, middleware, etc.
app.use(cors());            // Use CORS middleware to allow cross-origin requests: Without this line, our browser will block any frontend→backend request.
app.use(express.json());    // Parse incoming JSON requests: This middleware allows us to parse JSON data sent in the request body, which is essential for handling POST requests with JSON payloads.
// POST requests are used to send data to the server, such as user inputs or form submissions. In this case, we are setting up a route to handle POST requests to the '/api/explain' endpoint.
// This endpoint will be used to receive data from the frontend and respond with a message indicating successful connection.

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function callGemini(prompt) {
  try {
    const result = await model.generateContent([prompt]);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
}
// This function is used to call the Gemini API with a given prompt and return the response text.

app.post('/api/explain', async (req, res) => {
  const code = req.body.code;
  const prompt = `
  You are an AI Code Tutor. Explain the following code clearly and in a beginner-friendly way.

  Format your explanation like this:
  - Start with a brief summary of what the code does.
  - Then explain each line or block of code.
  - Then explain the time complexity and space complexity of the code.

  Explain the code clearly in markdown format with formatting that makes it visually readable and professional:
  - Wrap all code keywords (like if, else, for, while, def, return, class, etc.) in backticks to make them stand out.
  - Use bold text (**like this**) for important logic steps and explanations.
  - Wrap actual code blocks (if any) in triple backticks to preserve formatting.
  - Break the explanation into bullet points or sections if needed for clarity
  - Highlight input/output behavior or edge cases separately if the logic handles them.

  Code:
  \`\`\`
  ${code}
  \`\`\`
`;

  try {
    const explanation = await callGemini(prompt);
    res.json({ explanation });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
});

// Route: Test Gemini
app.get('/api/test', async (req, res) => {
  try {
    const reply = await callGemini("Say Hello from AI Code Tutor!");
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: 'Test failed.' });
  }
});

// when we say app.something, we’re telling the server to do something — like define a route.
// .post: This means, “Hey server, when someone sends a POST request to me, here’s what to do.”
// The app.post method is used to define a route that listens for POST requests on the specified path ('/api/explain' in this case).
// '/api/explain': This is the URL path of your backend route. It means, “When someone sends a POST request to http://localhost:5000/api/explain, trigger this code.”
// The req parameter represents the incoming request, and the res parameter is used to send a response back to the client.
// Whole point: “Dear backend, If someone makes a POST request to /api/explain, respond by sending back this message in JSON format: ‘Backend connected successfully!’.”

app.listen(5000, () => {          // Start the server on port 5000: This line tells the Express app to start listening for incoming requests on port 5000.
  // The callback function is executed once the server is successfully running.
  console.log('Server running on http://localhost:5000');
});
// Full meaninng: “Start the server on port 5000. Once it’s running, show the message: ‘Server running on http://localhost:5000’.”
