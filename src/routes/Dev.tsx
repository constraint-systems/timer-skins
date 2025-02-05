import { DataType } from "../types";
import { secondsToColonDuration } from "../shared/utils";
import { useEffect, useRef } from "react";

function Dev({ data }: { data: DataType }) {
  const timeSplit = secondsToColonDuration(
    data.startTime + data.duration - data.currentSeconds,
  ).split(":");

  const millisecondRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      millisecondRef.current!.textContent = Math.round(
        100 - new Date().getMilliseconds() / 10,
      )
        .toString()
        .slice(-2)
        .padStart(2, "0");
    }, 57);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-1/2 -translate-1/2 w-0 h-0">
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 w-full -translate-y-1/2"
          style={{
            width: 630,
            height: 380,
            background:
              "linear-gradient(90deg, rgba(189,63,17,1) 0%, rgba(208,210,46,1) 35%, rgba(97,158,59,1) 100%)",
          }}
        ></div>
        <svg
          id="clock-main-shape"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 w-full -translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 903 551"
          style={{
            width: 640,
            height: 390,
          }}
        >
          <g id="clock-frame">
            <polygon points="165.16 178.62 101.82 386.22 142.66 410.31 169.32 328.76 194.32 328.76 194.32 177.69 165.16 178.62"></polygon>
            <polygon points="99 396 47.74 551 110.24 551 140.16 419.58 99 396"></polygon>
            <path
              d="M210.63,402.86H763.54L762.8,327H631.18v50.27a21.47,21.47,0,0,1-5.51,14.53,17.25,17.25,0,0,1-12.76,5.75l-417.57-1.82L169.51,550.21h733V-.79H-.49v551H34.06V40h6.45V550.21h2.33L42.75,40.89A16.8,16.8,0,0,1,46.89,30c2.67-3,6.32-4.69,11.28-9l803.75.83c2.08,4.36,5.19,5.86,7.43,8.49,2.09,2.47,1.25,5.72,1.26,9.11l2.71,276.42.48,90.13a2.49,2.49,0,0,1-2.4,2.58H210.63a1.52,1.52,0,0,1-1.46-1.56v-2.52A1.52,1.52,0,0,1,210.63,402.86Z"
              transform="translate(0.49 0.79)"
            ></path>
            <polygon points="762.16 326.14 192.99 326.14 192.99 177.85 165.49 177.85 166.32 107.42 297.99 107.42 305.91 126.88 762.16 126.88 762.16 326.14"></polygon>
            <path
              d="M180.19,175l-21.84-18.39a11.7,11.7,0,0,1-4-8.93V110.6a3.48,3.48,0,0,1,3.29-3.65h22.54Z"
              transform="translate(0.49 0.79)"
            ></path>
          </g>
          <g id="deco-black">
            <g>
              <rect x="208.41" y="330.61" width="1" height="8.34"></rect>
              <rect x="212.57" y="330.61" width="1" height="8.34"></rect>
            </g>
            <g>
              <rect x="617.57" y="330.61" width="1" height="8.34"></rect>
              <rect x="621.74" y="330.61" width="1" height="8.34"></rect>
            </g>
            <g>
              <rect x="617.57" y="383.44" width="1" height="8.34"></rect>
              <rect x="621.74" y="383.44" width="1" height="8.34"></rect>
            </g>
            <g>
              <rect x="523.49" y="378.8" width="2.5" height="5.56"></rect>
              <rect x="593.49" y="378.8" width="2.5" height="5.56"></rect>
            </g>
            <rect x="414.32" y="378.8" width="2.5" height="5.56"></rect>
            <rect x="495.99" y="378.8" width="2.5" height="5.56"></rect>
            <rect x="386.82" y="378.8" width="2.5" height="5.56"></rect>
            <rect x="320.99" y="378.8" width="2.5" height="5.56"></rect>
            <rect x="293.49" y="378.8" width="2.5" height="5.56"></rect>
            <rect x="230.16" y="378.8" width="2.5" height="5.56"></rect>
            <rect
              x="46.25"
              y="431.26"
              width="1"
              height="7.5"
              transform="translate(-387.77 482.55) rotate(-90)"
            ></rect>
            <rect
              x="46.25"
              y="352.48"
              width="1"
              height="7.5"
              transform="translate(-308.99 403.78) rotate(-90)"
            ></rect>
            <rect
              x="46.25"
              y="274.63"
              width="1"
              height="7.5"
              transform="translate(-231.14 325.93) rotate(-90)"
            ></rect>
            <rect
              x="46.25"
              y="195.85"
              width="1"
              height="7.5"
              transform="translate(-152.36 247.15) rotate(-90)"
            ></rect>
            <rect
              x="46.25"
              y="118"
              width="1"
              height="7.5"
              transform="translate(-74.51 169.3) rotate(-90)"
            ></rect>
            <rect
              x="46.25"
              y="39.23"
              width="1"
              height="7.5"
              transform="translate(4.26 90.52) rotate(-90)"
            ></rect>
            <rect
              x="89.58"
              y="26.76"
              width="1"
              height="8.34"
              transform="translate(180.66 62.65) rotate(180)"
            ></rect>
            <rect
              x="192.08"
              y="26.76"
              width="1"
              height="8.34"
              transform="translate(385.66 62.65) rotate(180)"
            ></rect>
            <rect
              x="293.75"
              y="26.76"
              width="1"
              height="8.34"
              transform="translate(588.99 62.65) rotate(180)"
            ></rect>
            <rect
              x="396.25"
              y="26.76"
              width="1"
              height="8.34"
              transform="translate(793.99 62.65) rotate(180)"
            ></rect>
            <rect
              x="498.75"
              y="26.76"
              width="1"
              height="8.34"
              transform="translate(998.99 62.65) rotate(180)"
            ></rect>
            <rect
              x="601.25"
              y="26.76"
              width="1"
              height="8.34"
              transform="translate(1203.99 62.65) rotate(180)"
            ></rect>
            <rect
              x="702.92"
              y="26.76"
              width="1"
              height="8.34"
              transform="translate(1407.33 62.65) rotate(180)"
            ></rect>
            <rect
              x="639.58"
              y="117.58"
              width="1"
              height="7.41"
              transform="translate(1280.66 243.38) rotate(180)"
            ></rect>
            <rect
              x="476.25"
              y="117.58"
              width="1"
              height="7.41"
              transform="translate(953.99 243.38) rotate(180)"
            ></rect>
            <rect
              x="307.92"
              y="120.36"
              width="1"
              height="4.63"
              transform="translate(617.33 246.16) rotate(180)"
            ></rect>
            <rect
              x="293.75"
              y="99.97"
              width="1"
              height="5.56"
              transform="translate(588.99 206.3) rotate(180)"
            ></rect>
            <rect
              x="166.99"
              y="97.4"
              width="1"
              height="5.56"
              transform="translate(335.48 201.15) rotate(180)"
            ></rect>
            <rect
              x="157.83"
              y="97.4"
              width="1"
              height="5.56"
              transform="translate(317.14 201.15) rotate(180)"
            ></rect>
            <rect
              x="148.66"
              y="110.37"
              width="1"
              height="5.56"
              transform="translate(298.81 227.1) rotate(180)"
            ></rect>
            <rect
              x="148.66"
              y="138.17"
              width="1"
              height="5.56"
              transform="translate(298.81 282.7) rotate(180)"
            ></rect>
            <rect
              x="155.33"
              y="168.76"
              width="1"
              height="7.41"
              transform="translate(312.14 345.72) rotate(180)"
            ></rect>
            <rect
              x="159.48"
              y="168.75"
              width="1"
              height="7.41"
              transform="translate(320.44 345.71) rotate(180)"
            ></rect>
            <line x1="100.5" y1="384.5" x2="93" y2="380"></line>
            <line x1="153.5" y1="416.5" x2="146" y2="412"></line>
            <line x1="96.5" y1="394.5" x2="89" y2="390"></line>
            <line x1="149.5" y1="426.5" x2="142" y2="422"></line>
            <line x1="79.61" y1="445.6" x2="72.11" y2="441.1"></line>
          </g>
          <g id="deco-bg-lines">
            <rect
              x="26.69"
              y="432.86"
              width="1.27"
              height="4.1"
              transform="translate(-407.09 463.03) rotate(-90)"
            ></rect>
            <rect
              x="26.69"
              y="355.24"
              width="1.27"
              height="4.1"
              transform="translate(-329.48 385.42) rotate(-90)"
            ></rect>
            <rect
              x="26.69"
              y="276.43"
              width="1.27"
              height="4.1"
              transform="translate(-250.66 306.61) rotate(-90)"
            ></rect>
            <rect
              x="26.69"
              y="198.87"
              width="1.27"
              height="4.1"
              transform="translate(-173.1 229.04) rotate(-90)"
            ></rect>
            <rect
              x="26.69"
              y="120.06"
              width="1.27"
              height="4.1"
              transform="translate(-94.29 150.23) rotate(-90)"
            ></rect>
            <rect
              x="26.69"
              y="42.5"
              width="1.27"
              height="4.1"
              transform="translate(-16.73 72.67) rotate(-90)"
            ></rect>
            <g>
              <rect x="85.11" y="18.53" width="1.19" height="4.38"></rect>
              <rect x="94.48" y="18.53" width="1.19" height="4.38"></rect>
            </g>
            <g>
              <rect x="186.94" y="18.58" width="1.19" height="4.38"></rect>
              <rect x="196.31" y="18.58" width="1.19" height="4.38"></rect>
            </g>
            <g>
              <rect x="289.24" y="18.51" width="1.19" height="4.38"></rect>
              <rect x="298.61" y="18.51" width="1.19" height="4.38"></rect>
            </g>
            <g>
              <rect x="391.36" y="18.51" width="1.19" height="4.38"></rect>
              <rect x="400.73" y="18.51" width="1.19" height="4.38"></rect>
            </g>
            <g>
              <rect x="494.11" y="18.51" width="1.19" height="4.38"></rect>
              <rect x="503.48" y="18.51" width="1.19" height="4.38"></rect>
            </g>
            <g>
              <rect x="595.75" y="18.51" width="1.19" height="4.38"></rect>
              <rect x="605.12" y="18.51" width="1.19" height="4.38"></rect>
            </g>
            <g>
              <rect x="698.46" y="18.51" width="1.19" height="4.38"></rect>
              <rect y="18.51" width="1.19" height="4.38"></rect>
            </g>
            <g>
              <rect x="202.35" y="398.54" width="1.19" height="4.38"></rect>
              <rect x="211.72" y="398.54" width="1.19" height="4.38"></rect>
            </g>
            <g>
              <rect x="304.17" y="398.6" width="1.19" height="4.38"></rect>
              <rect x="313.54" y="398.6" width="1.19" height="4.38"></rect>
            </g>
            <g>
              <rect x="406.47" y="398.53" width="1.19" height="4.38"></rect>
              <rect x="415.84" y="398.53" width="1.19" height="4.38"></rect>
            </g>
            <g>
              <rect x="508.59" y="398.53" width="1.19" height="4.38"></rect>
              <rect x="517.96" y="398.53" width="1.19" height="4.38"></rect>
            </g>
            <g>
              <rect x="611.35" y="398.53" width="1.19" height="4.38"></rect>
              <rect x="620.72" y="398.53" width="1.19" height="4.38"></rect>
            </g>
            <g>
              <rect x="712.98" y="398.53" width="1.19" height="4.38"></rect>
              <rect x="722.36" y="398.53" width="1.19" height="4.38"></rect>
            </g>
            <g>
              <rect x="202.34" y="414.05" width="1.19" height="4.38"></rect>
              <polyline points="212.91 418.43 211.72 418.43 211.72 414.05 212.91 414.05"></polyline>
            </g>
            <rect x="301.24" y="414.73" width="1.19" height="4.38"></rect>
            <rect x="403.54" y="414.66" width="1.19" height="4.38"></rect>
            <rect x="505.66" y="414.66" width="1.19" height="4.38"></rect>
            <rect x="608.42" y="414.66" width="1.19" height="4.38"></rect>
            <rect x="710.05" y="414.66" width="1.19" height="4.38"></rect>
          </g>
          <g id="clock-lines">
            <polygon
              points="762.24 326.44 193.07 326.44 193.07 178.16 165.57 178.16 166.41 107.72 298.07 107.72 305.99 127.18 762.24 127.18 762.24 326.44"
              stroke="#eca000"
              strokeWidth="4"
              fill="none"
            ></polygon>
            <g>
              <rect x="217.57" y="330.61" width="1" height="8.34"></rect>
              <rect x="221.74" y="330.61" width="1" height="8.34"></rect>
            </g>
            <g>
              <rect x="305.91" y="330.61" width="1" height="8.34"></rect>
              <rect x="310.07" y="330.61" width="1" height="8.34"></rect>
            </g>
            <g>
              <rect x="399.24" y="330.61" width="1" height="8.34"></rect>
              <rect x="403.41" y="330.61" width="1" height="8.34"></rect>
            </g>
            <g>
              <rect x="508.41" y="330.61" width="1" height="8.34"></rect>
              <rect x="512.57" y="330.61" width="1" height="8.34"></rect>
            </g>
            <g>
              <rect x="605.91" y="330.61" width="1" height="8.34"></rect>
              <rect x="610.07" y="330.61" width="1" height="8.34"></rect>
            </g>
          </g>
        </svg>

        <div
          className="absolute left-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 px-3 items-baseline text-right"
          style={{
            fontFamily: "Digital7",
            fontSize: "140px",
            color: "#eca000",
            marginTop: -130,
            marginLeft: 16,
            textShadow: "0 0 8px #eca000",
          }}
        >
          <div
            className="absolute bg-black text-left top-0 left-0 text-xs uppercase"
            style={{
              top: 11,
              left: -16,
              paddingTop: 3,
              paddingRight: 6,
              fontSize: "13px",
              borderTop: "2px solid #eca000",
              fontFamily: "DepartureMono",
              minWidth: 100,
            }}
          >
            <svg
              className="absolute right-0 top-0"
              preserveAspectRatio="none"
              style={{ width: "10px", height: "16px", top: -2, right: -8 }}
              viewBox="0 0 10 10"
            >
              <polygon points="0,0 10,10 0,10" fill="black" />
              <line
                x1="0"
                y1="0"
                x2="10"
                y2="9"
                stroke="#eca000"
                strokeWidth={2}
              />
            </svg>
            {data.label}
          </div>
          <div
            className="flex relative items-baseline"
            style={{
              top: 2,
              right: -4,
            }}
          >
            {timeSplit[0]}
            <svg
              className="inline-block"
              style={{ width: "10px", height: "80px" }}
              viewBox="0 0 10 80"
            >
              <rect x="1" y="12" width="6" height="6" fill="#eca000" />
              <rect x="1" y="64" width="6" height="6" fill="#eca000" />
            </svg>
            {timeSplit[1]}
            <svg
              className="inline-block"
              style={{ width: "10px", height: "80px" }}
              viewBox="0 0 10 80"
            >
              <rect x="1" y="32" width="6" height="6" fill="#eca000" />
              <rect x="1" y="62" width="6" height="6" fill="#eca000" />
            </svg>
            <div
              style={{
                fontSize: "100px",
              }}
              ref={millisecondRef}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dev;
