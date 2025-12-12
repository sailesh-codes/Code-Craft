import { useEffect } from "react";
import LSt from "./styles/Loading.module.css";

function Loading() {
  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const haltTimer = setTimeout(() => {
      const balls = document.getElementById("loaderBalls");
      if (balls) {
        balls.classList.add(LSt.AnimationHalt);
      }

      const fadeTimer = setTimeout(() => {
        const screen = document.getElementById("loadingscreen");
        if (screen) {
          screen.classList.add(LSt.FadeOut);
          const doneTimer = setTimeout(() => {
            if (screen) {
              screen.dataset.loading = "false";
              // Re-enable scrolling after loading is complete
              document.body.style.overflow = "";
            }
          }, 600);
          return () => clearTimeout(doneTimer);
        }
      }, 1000);

      return () => clearTimeout(fadeTimer);
    }, 2400);

    return () => {
      clearTimeout(haltTimer);
      // Ensure scrolling is re-enabled if component unmounts
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <section
        className={LSt.LoadingScreen}
        data-loading="true"
        id="loadingscreen"
      >
        <div className={LSt.loader} id="loaderBalls"></div>
      </section>
    </>
  );
}

export default Loading;
