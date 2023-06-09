export function quoteGenerator(value) {
  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Generate a random ${value} quote` }],
      temperature: 0.7,
    }),
  })
    .then((response) => response.json())
    .then((data) => data.choices)
    .catch((error) => console.error("Error:", error));
}
