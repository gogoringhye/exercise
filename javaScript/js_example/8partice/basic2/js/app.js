/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 10, //바꿀 것만 원래 값 적어놔주면 됨80
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#f00" //"#ffffff"
      },
      "shape": {
        "type": "image", //circle
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "https://mblogthumb-phinf.pstatic.net/MjAyMzAzMTVfMjgy/MDAxNjc4ODQzNDY1ODEx.xfaVMbG0N3MERKbPTCT-1tdnmT4RRmzBBdP-WBUZhYUg.EBn-oMGj9c7oYKpCjxI2ErYG5kCPrvUwFpHLzgCszJEg.PNG.kvet0126/%EA%B0%84%ED%98%B8%EC%82%AC%EA%B3%A0%EC%96%91%EC%9D%B4.png?type=w800",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true, //false(true는 값이 랜덤하게 어떤 것은 값이 투명하고 어떤 것은 불투명하게 값이 적용됨)
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 30, //50
        "random": false,//랜덤하지않게
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false, //true(false 선을 안보이게 함)
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1, //6 (숫자가 작을수록 속도가 느려짐)
        "direction": "bottom", //none
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,//true
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,//true
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);