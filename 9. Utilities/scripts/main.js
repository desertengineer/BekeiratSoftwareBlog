 // Start of link action handlers
 document.querySelectorAll('.item-link').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const action = this.getAttribute('data-action');
            linkAction(action);
        });
    });
// End of link action handlers
// Start of link action handlers
    function linkAction(action) {
        switch (action) {
            case 'action1':
                alert('Action 1 executed!');
                break;
            case 'action2':
                alert('Action 2 executed!');
                break;
            case 'action3':
                alert('Action 3 executed!');
                break;
            default:
                alert('Unknown action!');
        }
    }
// End of link action handlers

// Function to load document content into specified element
    function loadDoc(filePath,elemSelector) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById(elemSelector).innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", filePath, true);
      xhttp.send();
    }