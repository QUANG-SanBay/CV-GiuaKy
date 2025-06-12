// Tạo hiệu ứng cuộn mượt khi người dùng nhấn vào liên kết có href bắt đầu bằng "#"
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        // Tìm phần chứa các kỹ năng (grid chứa các thanh kỹ năng)
        const skillsSection = document.querySelector('.skills-grid');
        if (skillsSection) {
            observer.observe(skillsSection.closest('.section'));
        }