function elementFromHtml(html){
    // Takes a string literal and returns an HTML object
    const template = document.createElement("template");
    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}


function addDefaultHeader(htmlObj){
    // Adds default header to 
    const defaultHeader = elementFromHtml(`
    <header class = "default_header">
        Testing
    </header>
    `);

    document.body.appendChild(defaultHeader);
}

addDefaultHeader();