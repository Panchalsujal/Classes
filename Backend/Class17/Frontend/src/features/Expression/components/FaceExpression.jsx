import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";

export default function FaceExpression({ onClick = () => {} }) {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef = useRef(null);

  const [expression, setExpression] = useState("Detecting...");

  useEffect(() => {
    async function start() {
      await init({ landmarkerRef, videoRef, streamRef });

      // start continuous detection
      detect({ landmarkerRef, videoRef, setExpression });
    }

    start();

    return () => {
      if (landmarkerRef.current) {
        landmarkerRef.current.close();
      }

      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject
          .getTracks()
          .forEach((track) => track.stop());
      }
    };
  }, []);

  function handleClick() {
    onClick(expression);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: "400px", borderRadius: "12px" }}
      />

      <h2>{expression}</h2>

      <button onClick={handleClick}>
        Use this expression
      </button>
    </div>
  );
}
