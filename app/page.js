"use client";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect } from "react";

export default function Home() {
  const { transcript, finalTranscript, listening, resetTranscript } =
    useSpeechRecognition();

  useEffect(() => {
    console.log("final:", finalTranscript);
  }, [finalTranscript]);

  // TODO: Add GPT Functions to call

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button
        onClick={() =>
          SpeechRecognition.startListening({
            language: "pl",
            continuous: true,
          })
        }
      >
        Start
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </main>
  );
}
