function openProject(projectName) {
    event.target.closest('.project-card').classList.add('pulse');
    
    setTimeout(() => {
        
        switch(projectName) {
            case 'cronometro':
                window.location.href = './cronometro/cronometroIndex.html';
                break;
            case 'taskManager':
                window.location.href = './taskManager/taskManagerIndex.html';
                break;
            case 'meteo':
                window.location.href = './meteo/meteoIndex.html';
                break;
        }
    }, 300);
}


document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.01)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.classList.remove('pulse');
        });
    });
});


window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});