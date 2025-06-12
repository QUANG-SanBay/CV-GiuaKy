function initThreeJS() {
    const canvas = document.querySelector('#backgroundCanvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        canvas: canvas,
        alpha: true,
        antialias: true 
    });

    // Set renderer size to 100% width of banner, height auto (keep aspect ratio)
    const banner = document.querySelector('.banner');
    const width = banner.offsetWidth;
    const height = banner.offsetHeight;
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Ensure canvas fills 100% width
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = width;
    canvas.height = height;

    // Create particles
    const geometry = new THREE.BufferGeometry();
    const particles = 2000; // Number of stars
    const positions = new Float32Array(particles * 3);
    const sizes = new Float32Array(particles);

    for(let i = 0; i < particles * 3; i += 3) {
        // Random 3D positions for stars
        positions[i] = (Math.random() - 0.5) * 15;     // X
        positions[i + 1] = (Math.random() - 0.5) * 10; // Y
        positions[i + 2] = (Math.random() - 0.5) * 10; // Z
        
        // Random sizes for each star
        sizes[i / 3] = Math.random() * 2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Material for the stars
    const material = new THREE.PointsMaterial({
        color: 0x336CA5,
        size: 0.1,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
        map: createCircleTexture()
    });

    // Create star points
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 5;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Move points to the right
        const positions = geometry.attributes.position.array;
        for(let i = 0; i < positions.length; i += 3) {
            positions[i] -= 0.001;
            if(positions[i] < -7.5) {
                positions[i] = 7.5;
            }
        }
        geometry.attributes.position.needsUpdate = true;
        
        renderer.render(scene, camera);
    }

    // Create circular texture for stars
    function createCircleTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        
        const context = canvas.getContext('2d');
        context.beginPath();
        context.arc(32, 32, 30, 0, Math.PI * 2);
        context.closePath();
        
        // Radial gradient for soft star glow
        const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.5, 'rgba(200,200,255,0.5)');
        gradient.addColorStop(1, 'rgba(127,127,255,0)');
        
        context.fillStyle = gradient;
        context.fill();
        
        return new THREE.CanvasTexture(canvas);
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        const width = banner.offsetWidth;
        const height = banner.offsetHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.width = width;
        canvas.height = height;
    });

    // Start animation
    animate();
}


// ...existing code...

// Scroll Reveal Animation
function initScrollReveal() {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 800,
        delay: 100,
        reset: true
    });

    // Hobbies section
    sr.reveal('.my-infor__hobbies', {
        delay: 150
    });

    // Skills section
    sr.reveal('.my-infor__skills', {
        delay: 150
    });

    // Language section
    sr.reveal('.my-infor__Language', {
        delay: 150
    });

    // Contact section
    sr.reveal('.my-infor__Contact', {
        delay: 150
    });

    // About Me section
    sr.reveal('.my-infor__aboutMe', {
        origin: 'right',
        delay: 150
    });

    // Career Objective section
    sr.reveal('.my-infor__CareerObjective', {
        origin: 'right',
        delay: 150
    });

    // Certificates & Awards section
    sr.reveal('.my-infor__CertificatesAwards', {
        origin: 'right',
        delay: 150
    });

    // Projects section
    sr.reveal('.my-infor__project', {
        origin: 'right',
        delay: 150
    });

    // Footer
    sr.reveal('.footer', {
        delay: 150
    });
}

// Initialize ScrollReveal when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    initScrollReveal();
});