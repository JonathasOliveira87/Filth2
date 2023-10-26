document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".scroll");

    links.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var offsetTop = targetElement.getBoundingClientRect().top;
                var startPosition = window.pageYOffset;
                var startTime = null;

                function animateScroll(currentTime) {
                    if (startTime === null) {
                        startTime = currentTime;
                    }

                    var timeElapsed = currentTime - startTime;
                    var progress = Math.min(timeElapsed / 800, 1);
                    var ease = easeOutQuad(progress);

                    window.scrollTo(0, startPosition + offsetTop * ease);

                    if (timeElapsed < 800) {
                        requestAnimationFrame(animateScroll);
                    }
                }

                function easeOutQuad(t) {
                    return t * (2 - t);
                }

                requestAnimationFrame(animateScroll);
            }
        });
    });

    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav-list a');

    // Adicione um ouvinte de evento de clique ao menu-toggle
    menuToggle.addEventListener('click', function () {
        // Alterne a exibição do nav-list
        if (navList.style.display === 'block') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'block';
        }
    });

    // Adicione um ouvinte de evento de clique para cada link no menu
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Ocultar o menu após clicar em um link
            navList.style.display = 'none';
        });
    });

  
});


'click', function rotateImage(img) {
    img.classList.toggle("bar");
  }


