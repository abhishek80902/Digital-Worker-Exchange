from flask import Flask
from flask_cors import CORS
from routes.chat_routes import chat_bp

app = Flask(__name__)

# Enable CORS for frontend
CORS(app)

# Register routes
app.register_blueprint(chat_bp, url_prefix="/api")

@app.route("/")
def home():
    return {"message": "AI Chatbot Backend Running 🚀"}

if __name__ == "__main__":
    app.run(debug=True, port=5000)