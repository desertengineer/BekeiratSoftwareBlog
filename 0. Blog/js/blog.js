// 
function loadBlogData() {
    console.log("Hello: loadBlogData");
    // Define data objects for each category
    const cssData = {
        folder: "https://raw.githubusercontent.com/desertengineer/BekeiratSoftwareBlog/refs/heads/main/0.%20Blog/css/",
        data: [
            ["skinStyle.css", "#page-skin-1"]
            // Add more CSS files and element IDs as needed
        ]
    };

    const jsData = {
        folder: "https://raw.githubusercontent.com/desertengineer/BekeiratSoftwareBlog/refs/heads/main/0.%20Blog/js/",
        data: [
            // ["script1.js", "#script1"],
            // ["script2.js", "#script2"]
        ]
    };

    const htmlData = {
        folder: "https://raw.githubusercontent.com/desertengineer/BekeiratSoftwareBlog/refs/heads/main/0.%20Blog/htmls/",
        data: [
            ["1-top-nav-section.html", ".top-nav-section"],
            ["2-header-section.html", "#header"],
            ["3-page-menu-section.html", ".page-menu-section"],
            ["4-sidebar.html", ".main-content-area.sidebar"],
            ["4-main-blogs.html", ".main-content-area.main-blogs"]
            // ["5-footer-section.html", "footer"]
            // Add more HTML files and element IDs as needed
        ]
    };

    const xmlData = {
        folder: "https://raw.githubusercontent.com/desertengineer/BekeiratSoftwareBlog/refs/heads/main/0.%20Blog/xmls/",
        data: [
            // ["data1.xml", "#data1"],
            // ["data2.xml", "#data2"]
        ]
    };

    // Loop through each data object and call importHTML if data exists
    [cssData, jsData, htmlData, xmlData].forEach(category => {
        if (category.data.length > 0) {
            category.data.forEach(element => {
                importHTML(category.folder + element[0], element[1]);
            });
        }
    });
}
