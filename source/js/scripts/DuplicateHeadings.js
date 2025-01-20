function addDuplicateHeadings() {
    const headings = document.querySelectorAll(".main-heading__wrapper h2");
  
    headings.forEach((heading) => {
      if (heading.parentElement.querySelector(".main-heading__duplicate")) return;
        const duplicate = document.createElement("span");
        duplicate.textContent = heading.textContent;
        duplicate.classList.add("main-heading__duplicate");
        duplicate.setAttribute("aria-hidden", "true");
  
      heading.parentElement.style.position = "relative";
      heading.parentElement.appendChild(duplicate);
    });
  }
  

  export default addDuplicateHeadings
 

  