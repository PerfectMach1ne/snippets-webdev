const element = document.getElementById("elt");
const out = document.getElementById("out");
const elementStyle = element.style;

// We loop through all styles (for…of doesn't work with CSStyleDeclaration)
for (const prop in elementStyle) {
  /* The Object.hasOwn() static method returns true if the specified object
   has the indicated property as its own property. If the property is inherited, 
   or does not exist, the method returns false. */
  if (Object.hasOwn(elementStyle, prop)) {
    out.textContent += `${
      elementStyle[prop]
    } = '${elementStyle.getPropertyValue(elementStyle[prop])}'\n`;
  }
}