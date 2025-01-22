
/**
 * @typedef {"main-pane" | "art-pane"} PaneID 
 */


const paneMetadata = Object.seal({
    currentPaneID: "main-pane"
});


function transitionAnimationStart() {

}

function transitionAnimationEnd(){

}

/**
 * 
 * @param {PaneID} paneID 
 */
function setCurrentPane(paneID){
    const currentPane = document.getElementById(paneMetadata.currentPaneID);
    const nextPane = document.getElementById(paneID);
    if (!nextPane){
        throw new Error(`Pane with id "${paneID}" not found`);
    }

    paneMetadata.currentPaneID = paneID;

    transitionAnimationStart();
    currentPane.style.display = "none";
    nextPane.style.display = "block";
    transitionAnimationEnd();


}
