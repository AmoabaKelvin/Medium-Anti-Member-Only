const freediumUrl = "https://freedium.cfd/";
const mediumDomain = "https://medium.com";

function handleNewArticles(mutationsList) {
  mutationsList.forEach((mutation) => {
    if (mutation.type === "childList") {
      mutation.addedNodes.forEach((node) => {
        if (node.tagName === "ARTICLE") {
          const links = node.querySelectorAll('div[class^="iq"] a');

          links.forEach((link) => {
            const originalURL = link.getAttribute("href");
            const modifiedURL = freediumUrl + originalURL;

            link.setAttribute("href", modifiedURL);

            link.addEventListener("click", (event) => {
              event.preventDefault();
              window.open(modifiedURL, "_blank");
            });
          });
        }
      });
    }
  });
}

const targetNode = document.body;
const config = { childList: true, subtree: true };
const observer = new MutationObserver(handleNewArticles);
observer.observe(targetNode, config);
