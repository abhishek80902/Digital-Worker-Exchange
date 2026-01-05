// src/hooks/useVoiceAssistant.js
import { useEffect, useRef, useState } from "react";

export default function useVoiceAssistant({ lang = "en-IN" } = {}) {
  const recognitionRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setError("SpeechRecognition not supported in this browser.");
      return;
    }

    const rec = new SpeechRecognition();
    rec.lang = lang;
    rec.interimResults = false;
    rec.maxAlternatives = 1;

    rec.onresult = (e) => {
      const txt = e.results[0][0].transcript;
      setTranscript(txt);
    };

    rec.onerror = (e) => {
      setError(e.error || "Speech recognition error");
    };

    rec.onend = () => {
      setListening(false);
    };

    recognitionRef.current = rec;

    return () => {
      try {
        rec.onresult = null;
        rec.onerror = null;
        rec.onend = null;
      } catch (e) {}
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
      setError(null);
      setTranscript("");
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
