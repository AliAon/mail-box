/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Fade } from "react-awesome-reveal";

export default function Title({
  heading = "h3",
  title = "Title",
  color = "#004275",
  fontFamily = "Inter",
  transform = "none",
  className,
  animate=false
}) {
  const direction=animate ? "up" : "undefined" 
  switch (heading) {
    case "h1":
      // code block
      return (
        <Fade  direction={direction} triggerOnce>
          <h1
            style={{
              color: color,
              fontFamily: fontFamily,
              textTransform: transform,
            }}
            className={`lg:text-6xl text-4xl  ${className} `}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
        </Fade>
      );
    case "h2":
      return (
        <Fade  direction={direction} triggerOnce>
          <h2
            style={{
              color: color,
              fontFamily: fontFamily,
              textTransform: transform,
            }}
            className={`lg:text-5xl font-bold md:text-3xl text-3xl  ${className}`}
            dangerouslySetInnerHTML={{ __html: title }}

          >
           
          </h2>
        </Fade>
      );
    case "h3":
      return (
        <Fade direction={direction} triggerOnce>
          <h3
            style={{
              color: color,
              fontFamily: fontFamily,
              textTransform: transform,
            }}
            className={`  ${className} xl:text-4xl text-2xl`}
            dangerouslySetInnerHTML={{ __html: title }}

          >
           
          </h3>
        </Fade>
      );
    case "h4":
      return (
        <Fade direction={direction} triggerOnce>
          <h4
            style={{
              color: color,
              fontFamily: fontFamily,
              textTransform: transform,
            }}
            className={` ${className} text-2xl  `}
            dangerouslySetInnerHTML={{ __html: title }}

          >
            
          </h4>
        </Fade>
      );
    case "h5":
      return (
        <Fade direction={direction} triggerOnce>
          <h5
            style={{
              color: color,
              fontFamily: fontFamily,
              textTransform: transform,
            }}
            className={` ${className} sm:text-xl  text-lg `}
            dangerouslySetInnerHTML={{ __html: title }}

          >
            
          </h5>
        </Fade>
      );
    case "h6":
      return (
        <Fade direction={direction} triggerOnce>
          <h6
            style={{
              color: color,
              fontFamily: fontFamily,
              textTransform: transform,
            }}
            className={`text-base font-normal leading-none  ${className}	`}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h6>
        </Fade>
      );
    default:
      return (
        <Fade direction={direction} triggerOnce>
          <h4
            style={{
              color: color,
              fontFamily: fontFamily,
              textTransform: transform,
            }}
            className={`text-2xl   ${className}`}
            dangerouslySetInnerHTML={{ __html: title }}

          >
           
          </h4>
        </Fade>
      );
  }
}
