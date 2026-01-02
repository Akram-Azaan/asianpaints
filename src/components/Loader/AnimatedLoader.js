import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { memo } from "react";

export const AnimatedLoader = memo(
  ({
    id = null,
    loading = true,
    style = {},
    size = 64,
    backDrop = "#ffffff",
    children,
    position = "absolute",
    top = 0,
    hideLoadingText = false,
    loadingText = "",
    loadingTextColor = null
  }) => {
    if (!loading) return null;

    const _style = {
      ...style,
      position: position,
      zIndex: "999999",
      background: backDrop,
      top: top,
    };

    return (
      <>
        <div
          key={id}
          id={id}
          style={_style}
          className="w-100 h-100 d-flex align-items-center justify-content-center flex-column"
        >
          <div style={{ width: `${size}px`, height: `${size}px` }}>
            <DotLottieReact
              key={id}
              src="https://media.imagine.io/media/public/loader/imagine-loader.lottie"
              loop
              autoplay
              // autoResizeCanvas
              speed={1.5}
            />
          </div>
          {!hideLoadingText ? (
            <h2
              className="m-0"
              style={{
                color: loadingTextColor || "#141414",
                fontSize: "14px",
                fontWeight: "600",
                fontFamily: "PPNeueMontreal-Medium",
                opacity: loadingTextColor ? 1 : "0.5",
              }}
            >
              {loadingText}
            </h2>
          ) : null}
        </div>
        {children}
      </>
    );
  }
);
