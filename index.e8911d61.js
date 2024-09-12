document.querySelectorAll("form input").forEach(function(e){var t=e.name.split(/(?=[A-Z])/).join(" "),l=e.id,a=document.createElement("label");a.className="field-label",a.setAttribute("for",l),a.textContent=t,e.placeholder=t.charAt(0).toUpperCase()+t.slice(1),e.parentNode.append(a)});
//# sourceMappingURL=index.e8911d61.js.map
