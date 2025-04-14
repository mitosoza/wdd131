const copyrightYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();

copyrightYear.innerHTML = `&copy;${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;