import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/XdtBcAFhwzpzEZBl/scene.splinecode');

//여기는 윗부분 그대로 긁어와서 앞부분 2로 바꿔주고 export 후 code export 부분의 load 뒷부분만 긁어와서 붙혀주면 됨
const canvas2 = document.getElementById('canvas3d_2');
const app2 = new Application(canvas2);
app2.load('https://prod.spline.design/gbW5vuKIJs0PTvBi/scene.splinecode');

//나혼자 추가함
const canvas3 = document.getElementById('canvas3d_3');
const app3 = new Application(canvas3);
app3.load('https://prod.spline.design/uXsOzPJqVOtKyFFO/scene.splinecode');