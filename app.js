const cubeX = document.getElementById('cube-x');
const cubeY = document.getElementById('cube-y');

// 102 significa 100px do cubo + 2px de fresta (vazado sutil)
const spacing = 108; 

for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
            if (x === 0 && y === 0 && z === 0) continue;

            const miniCube = document.createElement('div');
            miniCube.className = 'mini-cube';
            miniCube.style.transform = `translate3d(${x * spacing}px, ${y * spacing}px, ${z * spacing}px)`;

            ['front', 'back', 'right', 'left', 'top', 'bottom'].forEach(side => {
                const face = document.createElement('div');
                face.className = `face ${side}`;
                miniCube.appendChild(face);
            });

            cubeX.appendChild(miniCube);
        }
    }
}

let isDragging = false;
let rotX = -20; 
let rotY = 30;
let lastX, lastY;

window.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastX;
    const deltaY = e.clientY - lastY;

    rotY += deltaX * 0.5;
    rotX += deltaY * 0.5; // Direção corrigida

    cubeY.style.transform = `rotateY(${rotY}deg)`;
    cubeX.style.transform = `rotateX(${rotX}deg)`;

    lastX = e.clientX;
    lastY = e.clientY;
});

window.addEventListener('mouseup', () => isDragging = false);
window.addEventListener('mouseleave', () => isDragging = false);