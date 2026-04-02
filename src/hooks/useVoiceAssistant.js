import { useEffect, useRef, useState } from "react";

export default function useVoiceAssistant({ lang = "en-IN" } = {}) {
  const recognitionRef = useRef(null);

  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError("Speech recognition not supported in this browser.");
      return;
    }

    const rec = new SpeechRecognition();

    rec.lang = lang;
    rec.interimResults = true; // 🔥 LIVE typing
    rec.continuous = false;   // 🔥 single sentence
    rec.maxAlternatives = 1;

    rec.onresult = (e) => {
      let finalText = "";

      for (let i = 0; i < e.results.length; i++) {
        finalText += e.results[i][0].transcript;
      }

      setTranscript(finalText);
    };

    rec.onerror = (e) => {
      setError(e.error || "Speech recognition error");
      setListening(false);
    };

    rec.onend = () => {
      setListening(false);
    };

    recognitionRef.current = rec;

    return () => {
      if (rec) {
        rec.onresult = null;
        rec.onerror = null;
        rec.onend = null;
      }
    };
  }, [lang]);

  const start = () => {
    if (!recognitionRef.current) {
      setError("SpeechRecognition not available");
      return;
    }

    try {
      recognitionRef.current.start();
      setListening(true);
      setTranscript("");
      setError(null);
    } catch (e) {
      setError(e.message || "Could not start voice recognition");
    }
  };

  const stop = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  return {
    listening,
    transcript,
    error,
    start,
    stop,
  };
}