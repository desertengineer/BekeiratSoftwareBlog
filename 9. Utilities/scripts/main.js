// Start of link action handlers
document.querySelectorAll('.item-link').forEach(item => {
    item.addEventListener('click', function (event) {
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
/**
 * Dynamically loads HTML content from a given file URL into a target element.
 * @param {string} filePath - URL of the HTML file hosted on GitHub (raw version).
 * @param {string} elemSelector - CSS selector of the element to inject the content into.
 */
async function importHTML(filePath, elemSelector) {
    console.log("Hello: importHTML")
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);

        const html = await response.text();
        const target = document.querySelector(elemSelector);
        if (target) target.innerHTML = html;
        else console.error(`Selector not found: ${elemSelector}`);
    } catch (err) {
        console.error(`Error importing HTML:`, err);
    }
} 