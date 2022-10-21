function elementFromHtml(html){
    // Takes a string literal and returns an HTML object
    const template = document.createElement("template");
    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}

function addDefaultHeader(){
    // Adds default header to body.
    const defaultHeader = elementFromHtml(`
    <header class = "default_header">
        <ul class = "nav">
            
            <li><img src = "./img/arrow.png"><a href = "index.html" class = "block-center">Home</a></li>
            <li><img src = "./img/arrow.png" class = "block-center"><a href = "" class = "block-center">Projects</a></li>
        </ul>
    </header>
    `);

    document.body.appendChild(defaultHeader);
}

addDefaultHeader();



function unhideArrow(){
    document.getElementById("btn").style.display = 'block'
}

