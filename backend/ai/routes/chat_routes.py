from flask import Blueprint, request, jsonify
from ai.groq_chat import chat_with_ai

chat_bp = Blueprint("chat", __name__)

@chat_bp.route("/chat", methods=["POST"])
def chat():
    data = request.json
    message = data.get("message", "")

    if not message:
        return jsonify({"reply": "Message is required"}), 400

    try:
        reply = chat_with_ai(message)
        return jsonify({"reply": reply})
    except Exception as e:
        return jsonify({"reply": "Error processing request"}), 500