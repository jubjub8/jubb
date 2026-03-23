const cubeContainer = document.getElementById('cube');
const size = 3; // 3x3x3
const spacing = 105; // Tamanho do cubo (100) + um pequeno gap (5)

// 1. Gerar os cubinhos
for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
            
            // Lógica para deixar o meio vazado (pula a posição central 0,0,0)
            if (x === 0 && y === 0 && z === 0) continue;

            const miniCube = document.createElement('div');
            miniCube.className = 'mini-cube';
            
            // Posiciona o cubinho no espaço 3D
            const posX = x * spacing;
            const posY = y * spacing;
            const posZ = z * spacing;
            miniCube.style.transform = `translate3d(${posX}px, ${posY}px, ${posZ}px)`;

            // Cria as 6 faces para cada cubinho
            const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
            faces.forEach(faceName => {
                const face = document.createElement('div');
                face.className = `face ${faceName}`;
                miniCube.appendChild(face);
            });

            cubeContainer.appendChild(miniCube);
        }
    }
}

// 2. Interação com o mouse
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (e) => {
    // Normaliza a rotação baseada na posição do mouse
    // Invertemos o Y (mouse para cima = rotacionar para trás)
    rotateY = (e.clientX / window.innerWidth - 0.5) * 360;
    rotateX = (e.clientY / window.innerHeight - 0.5) * -360;

    cubeContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
