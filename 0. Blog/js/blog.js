function loadBlogData() {
    // Declaring 
    const blogCssFolder = "https://raw.githubusercontent.com/desertengineer/BekeiratSoftwareBlog/refs/heads/main/0.%20Blog/css/";
    const blogJsFolder = "https://raw.githubusercontent.com/desertengineer/BekeiratSoftwareBlog/refs/heads/main/0.%20Blog/js/";
    const blogHtmlFolder = "https://raw.githubusercontent.com/desertengineer/BekeiratSoftwareBlog/refs/heads/main/0.%20Blog/htmls/";
    const blogXmlFolder = "https://raw.githubusercontent.com/desertengineer/BekeiratSoftwareBlog/refs/heads/main/0.%20Blog/xmls/";
    // File & Element id arrays
    var cssArray = [["skinStyle.css", "#page-skin-1"]];
    var jsArray = [];
    var htmlArray = [];
    var xmlsArray = [];

    // Loop on data arrays
    if (cssArray.length != 0) {
        cssArray.forEach(element => {
            importHTML(blogCssFolder + element[0], element[1]);
        });
    }

}
