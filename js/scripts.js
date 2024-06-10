function toggleSection(clickedCard) {
    const content = clickedCard.getAttribute('data-content');
    const bgColor = clickedCard.getAttribute('data-bg-color');
    
    // Ensure the temporary section exists
    let $tempSection = $('#temporary-section');
    if (!$tempSection.length) {
      $tempSection = $('<div/>', {
        id: 'temporary-section',
        class: 'collapse w-100',
        html: '<div class="container"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><p></p></div>'
      }).css('background-color', bgColor); // Set initial background color
      $('body').append($tempSection); // Append to body to cover the full width
      
      // Close button functionality
      $tempSection.on('click', '.close', function() {
        $tempSection.collapse('hide');
      });
    }
  
    // Update the content and background color
    $tempSection.find('p').text(content);
    $tempSection.css('background-color', bgColor);
  
    // Calculate the position to insert the temporary section
    const cardPosition = $(clickedCard).position().top;
    let insertAfterRow = -1;
    $('#grid-container .grid-item').each(function(index) {
      if ($(this).position().top === cardPosition) {
        insertAfterRow = index;
      }
    });
  
    // Move the temporary section after the last card in the row
    $('#grid-container .grid-item').eq(insertAfterRow).after($tempSection);
  
    // Show the section
    $tempSection.collapse('show');
  }


  document.addEventListener('DOMContentLoaded', function() {
    const celestialBodies = document.querySelectorAll('.planet, .sun');
    const container = document.querySelector('.integration-area');
  
    function adjustOrbitsForMobile() {
        celestialBodies.forEach(body => {
            if (body.classList.contains('planet')) {
                // Verificar se é mobile e ajustar o valor do data-orbit
                const orbitRadius = window.innerWidth < 768 ? body.getAttribute('data-orbit-mobile') * 50 : body.getAttribute('data-orbit') * 50;
                const angle = body.getAttribute('data-angle');
                const x = orbitRadius * Math.cos(angle * Math.PI / 180);
                const y = orbitRadius * Math.sin(angle * Math.PI / 180);
                body.style.width = `${body.getAttribute('data-size')}px`;
                body.style.height = `${body.getAttribute('data-size')}px`;
                body.style.left = `calc(50% + ${x}px)`;
                body.style.top = `calc(50% + ${y}px)`;
                body.style.transform = 'translate(-50%, -50%)';
                body.style.backgroundColor = body.getAttribute('data-color');
            }

          // Adicionando evento de clique que redireciona para uma URL
          celestialBodies.forEach(body => {
            body.addEventListener('click', function() {
            window.location.href = body.getAttribute('data-url');
          });
        });
  
            if (window.innerWidth > 768) {
            // Create tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip-model';
            tooltip.innerHTML = `<strong>${body.id}</strong>`;
            container.appendChild(tooltip);  // Append to container to avoid overflow issues

  
            // Event listeners for mouseover and mouseout
            body.addEventListener('mouseover', function(e) {
                const rect = body.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
  
                tooltip.style.display = 'block';
                tooltip.style.left = `${rect.left - containerRect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`; // Center horizontally relative to container
                tooltip.style.top = `${rect.bottom - containerRect.top + 3}px`; // Position below the planet or sun relative to container
  
                // Diminuir a opacidade de todos os outros corpos celestes
                celestialBodies.forEach(otherBody => {
                    if (otherBody !== body) {
                        otherBody.style.opacity = '0.5';
                    }
                });
            });
  
            body.addEventListener('mouseout', function() {
                tooltip.style.display = 'none';
  
                // Restaurar a opacidade de todos os corpos celestes ao sair
                celestialBodies.forEach(otherBody => {
                    otherBody.style.opacity = '1';
                });
            });
          }
        });
    }
  
    // Detectar mudança de tamanho da tela
    window.addEventListener('resize', adjustOrbitsForMobile);
  
    // Ajustar órbitas no carregamento inicial
    adjustOrbitsForMobile();

    // Garantir que o pop-up esteja oculto quando a página for carregada
    var popup = document.getElementById('popupForm');
    popup.classList.remove('show');
    popup.style.display = 'none'; // Garantir que o pop-up esteja oculto
  });

  document.getElementById('downloadBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Impedir comportamento padrão do link
    var popup = document.getElementById('popupForm');
    popup.style.display = 'flex';
    setTimeout(function() {
        popup.classList.add('show'); // Adicionar a classe 'show' para exibir o pop-up
    }, 10); // Pequeno atraso para garantir a transição
});

document.querySelector('.close').addEventListener('click', function() {
    var popup = document.getElementById('popupForm');
    popup.classList.remove('show'); // Remover a classe 'show' para ocultar o pop-up
    setTimeout(function() {
        popup.style.display = 'none';
    }, 300); // Aguardar a transição antes de ocultar o pop-up
});

document.getElementById('downloadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Aqui você pode adicionar a lógica para salvar as informações ou enviar para um servidor

    var popup = document.getElementById('popupForm');
    popup.classList.remove('show'); // Remover a classe 'show' para ocultar o pop-up
    setTimeout(function() {
        popup.style.display = 'none';
    }, 300); // Aguardar a transição antes de ocultar o pop-up

    // Iniciar o download do PDF
    window.location.href = 'path/to/your/pdf.pdf';
});


// script.js
