const twelveFootDomain = "https://12ft.io/proxy?q=";
const mediumDomain = "https://medium.com";

const add12ftToMediumArticleURL = (url) => {
  if (!url.includes(twelveFootDomain)) {
    const urlWith12ft = twelveFootDomain + encodeURIComponent(mediumDomain + url);
    return urlWith12ft;
  }
  return url;
};

const modifyEachArticleLink = () => {
  const links = document.querySelectorAll('a[aria-label="Post Preview Title"]');
  links.forEach((link) => {
    const originalURL = link.getAttribute("href");
    const modifiedURL = add12ftToMediumArticleURL(originalURL);
    link.setAttribute("href", modifiedURL);

    // Prevent the navigation to Medium's detail page, and instead
    // navigate to the 12ft.io proxy page
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = modifiedURL;
    });
  });
};

const observeDOMChanges = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      modifyEachArticleLink();
    }
  }
};

const observer = new MutationObserver(observeDOMChanges);

// Start observing the target element for changes
const target = document.querySelector("div.dx.s");
observer.observe(target, { childList: true, subtree: true });
