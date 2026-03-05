import {
  FaceLandmarker,
  FilesetResolver
} from "@mediapipe/tasks-vision";

// INIT FUNCTION
export const init = async ({ landmarkerRef, videoRef, streamRef }) => {
  // load mediapipe vision
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
  );

  // create landmarker
  landmarkerRef.current = await FaceLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task"
    },
    outputFaceBlendshapes: true,
    runningMode: "VIDEO",
    numFaces: 1
  });

  // start camera
  streamRef.current = await navigator.mediaDevices.getUserMedia({
    video: true
  });

  const video = videoRef.current;

  video.srcObject = streamRef.current;

  // wait for video metadata
  await new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve();
    };
  });

  await video.play();
};


// DETECT FUNCTION
export const detect = ({ landmarkerRef, videoRef, setExpression }) => {
  const video = videoRef.current;
  const landmarker = landmarkerRef.current;

  if (!landmarker || !video) return;

  // ROI ERROR FIX
  if (video.videoWidth === 0 || video.videoHeight === 0) {
    requestAnimationFrame(() =>
      detect({ landmarkerRef, videoRef, setExpression })
    );
    return;
  }

  const results = landmarker.detectForVideo(video, performance.now());

  if (results.faceBlendshapes?.length > 0) {
    const blendshapes = results.faceBlendshapes[0].categories;

    const getScore = (name) =>
      blendshapes.find((b) => b.categoryName === name)?.score || 0;

    const smileLeft = getScore("mouthSmileLeft");
    const smileRight = getScore("mouthSmileRight");
    const jawOpen = getScore("jawOpen");
    const browUp = getScore("browInnerUp");
    const frownLeft = getScore("mouthFrownLeft");
    const frownRight = getScore("mouthFrownRight");

    let currentExpression = "Neutral";

    if (smileLeft > 0.5 && smileRight > 0.5) {
      currentExpression = "happy";
    } else if (jawOpen > 0.25 && browUp > 0.25) {
      currentExpression = "surprised";
    } else if (frownLeft > 0.2 && frownRight > 0.2) {
      currentExpression = "sad";
    }

    setExpression(currentExpression);
  }

  // LOOP FOR CONTINUOUS DETECTION
  requestAnimationFrame(() =>
    detect({ landmarkerRef, videoRef, setExpression })
  );
};
