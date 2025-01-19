// filepath: /D:/Ayesha/transform/pages/api/transform.js
const OpenAI = require("openai");


export default async function handler(req, res) {
    const { braindump } = req.body;

    const client = new OpenAI({
        baseURL: "https://models.inference.ai.azure.com",
        apiKey: process.env.GITHUB_TOKEN,
    });

    try {
        const response = await client.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a highly intelligent assistant that converts unstructured thoughts into structured, actionable diagrams. Users will provide scattered ideas, brainstorming notes, or abstract concepts as input. These ideas may be unrelated and could represent separate tasks, workflows, decisions, etc. Your task is to:\n\n- Identify key components and their relationships from the input.\n- Organize them into a logical sequence or flow.\n- Generate one or more Mermaid.js diagram descriptions to visualize the flow.\n\nRules:\n\n1. Use Mermaid.js syntax to describe diagrams logically and clearly.\n2. Summarize and label nodes with concise yet meaningful descriptions.\n3. Include conditional or branching nodes where appropriate.\n4. Ensure the diagram reflects the transitions and transformations in the input data.\n5. Make the diagram(s) look nice and aesthetic; use the following background color (fill): #bd9fd8.\n6. Your response should ONLY contain the Mermaid.js code and nothing else.",
                },
                {
                    role: "user",
                    content: `Input: ${braindump}`,
                },
            ],
            model: "gpt-4o",
            temperature: 1,
            max_tokens: 600,
            top_p: 1,
        });

        console.log(response.choices[0].message.content); // Print the response to the console

        res.status(200).json({ diagram: response.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}