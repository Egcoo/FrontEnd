const lights = document.querySelectorAll('.light');
let activeLight = 0;

const lightDurations = {
  0: 30000, // 红灯时长：30s
  1: 5000,  // 黄灯时长：5s
  2: 35000  // 绿灯时长：35s
};

function switchLight() {
  lights[activeLight].classList.remove('active');
  activeLight = (activeLight + 1) % lights.length;
  lights[activeLight].classList.add('active');
  setTimeout(switchLight, lightDurations[activeLight]);
}

switchLight();