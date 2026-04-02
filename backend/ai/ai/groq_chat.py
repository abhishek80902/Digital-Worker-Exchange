import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def chat_with_ai(user_message: str):
    prompt = f"""
You are a smart AI assistant for a job platform called Digital Worker Exchange.

Your job:
- Help users find jobs
- Help employers hire workers
- Suggest actions like "Go to Find Work"
- Keep responses short, helpful, and friendly

User: {user_message}
Assistant:
"""

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt},
        ],
        temperature=0.5,
    )

    return response.choices[0].message.content