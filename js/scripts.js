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
  