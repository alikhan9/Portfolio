import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Logo = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      className="particles"
      id="tsparticles"
       init={particlesInit}
      options={{
        "autoPlay": true,
        "background": {
          "color": {
            "value": "hsl(200,20%,10%)"
          },
          "image": "\n",     
          "repeat": "no-repeat",
          "size": "cover",
          "opacity": 1
        },
        "backgroundMask": {
          "composite": "destination-out",
          "cover": {
            "color": {
              "value": "#fff"
            },
            "opacity": 1
          },
          "enable": false
        },
        "fullScreen": {
          "enable": false,
          "zIndex": 2
        },
        "detectRetina": false,
        "duration": 0,
        "fpsLimit": 60,
        "interactivity": {
          "detectsOn": "window",
          "events": { 
            "onHover": {
              "enable": true,
              "mode": "bubble",
              "parallax": {
                "enable": false,
                "force": 2,
                "smooth": 10
              }
            },
            "resize": true
          },
          "modes": {  
            "bubble": {
              "distance": 60,
              "duration": 2,
              "mix": false,
              "opacity": 8,
              "size": 8,    
            },     
          }
        },
        "manualParticles": [],    
        "particles": {
          "bounce": {
            "horizontal": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            },
            "vertical": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            }
          },
          
          
          "gradient": [],
          "groups": {},
          "links": {
            "blink": false,
            "color": {
              "value": "#ffffff"
            },
            "consent": false,
            "distance": 30,
            "enable": true,
            "frequency": 0.2,
            "opacity": 0.4,
            "width": 1,
            "warp": true
          },
          "move": {
            "angle": {
              "offset": 0,
              "value": 90
            },
            "attract": {
              "distance": 200,
              "enable": false,
              "rotate": {
                "x": 600,
                "y": 1200
              }
            },
            "center": {
              "x": 50,
              "y": 50,
              "radius": 0
            },
            "decay": 0,
            "distance": {},
            "direction": "none",
            "drift": 0,
            "enable": true,
            "gravity": {
              "acceleration": 9.81,
              "enable": false,
              "inverse": false,
              "maxSpeed": 50
            },
            "path": {
              "clamp": true,
              "delay": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0
              },
              "enable": false,
              "options": {}
            },
            "outModes": {
              "default": "bounce",
              "bottom": "bounce",
              "left": "bounce",
              "right": "bounce",
              "top": "bounce"
            },
            "random": false,
            "size": false,
            "speed": 1,
            "spin": {
              "acceleration": 0,
              "enable": false
            },
            "straight": false,
            "trail": {
              "enable": false,
              "length": 10,
              "fillColor": {
                "value": "#000000"
              }
            },
            "vibrate": false,
            "warp": false
          },
          "number": {
            "limit": 700,
            "value": 10
          },
          "reduceDuplicates": true,
          
          
          
          "shape": {
            "options": {},
            "type": "circle"
          },
          "size": {
            "random": {
              "enable": true,
              "minimumValue": 1
            },
            "value": 1,
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "decay": 0,
              "sync": false,
              "destroy": "none",
              "startValue": "random",
              "minimumValue": 0.1
            }
          },
          "stroke": {
            "width": 0
          },
          "zIndex": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "opacityRate": 1,
            "sizeRate": 1,
            "velocityRate": 1
          }
        },
        "responsive": [],
        "style": {},
        "themes": [],
        "zLayers": 100,
        "polygon": {
          "draw": {
            "enable": true,
            "stroke": {
              "color": {
                "value": "rgba(255,255,255,0.2)"
              },
              "width": 0.5,
              "opacity": 0.2
            }
          },
          "enable": true,
          "inline": {
            "arrangement": "one-per-point"
          },
          "scale": 0.8,
          "type": "inline",
          "url": "https://particles.js.org/images/smalldeer.svg"
        }
      }}
    />
  );
};