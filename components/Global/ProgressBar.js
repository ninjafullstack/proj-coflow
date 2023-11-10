export default function ProgressBar({ value, width, height, color, tip = false }) {
  const isWidthPercentage = typeof width === "string" && width.endsWith("%");
  const widthStyle = isWidthPercentage ? width : `${width}px`;
  const valueWidth = isWidthPercentage ? `calc(${widthStyle} * ${value} / 100)` : `${widthStyle}`;

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          left: `calc(${valueWidth} - 18px)`,
          bottom: "10px",
        }}
      >
        {tip && (
          <>
            <div
              style={{
                display: "flex",
                padding: "5px 10px",
                borderRadius: "5px",
                fontSize: "10px",
                fontWeight: 600,
                color: "white",
                backgroundColor: color,
              }}
            >
              {value}%
            </div>
            <div
              style={{
                position: "relative",
                height: "9px",
                width: "9px",
                top: "-6px",
                transform: "rotate(45deg)",
                backgroundColor: color,
              }}
            ></div>
          </>
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: widthStyle,
          overflow: "hidden",
          height: height + "px",
          backgroundColor: "#F2F2F2",
          borderRadius: `${height / 2}px`,
        }}
      >
        <div
          style={{
            backgroundColor: color,
            width: valueWidth,
            height: "100%",
            borderRadius: `${height / 2}px`,
          }}
        ></div>
      </div>
    </div>
  );
}
