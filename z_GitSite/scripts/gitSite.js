 document.querySelectorAll('.item-link').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const action = this.getAttribute('data-action');
            handleAction(action);
        });
    });

    function handleAction(action) {
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