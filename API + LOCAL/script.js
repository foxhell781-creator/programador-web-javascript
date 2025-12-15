if (localStorage.getIten("tema") == "dark") {
    document.body.classlist.add("dark");
}

function trocarTema(){
    document.body.classlist.toglee("dark");
if (document.body.classList.contains("dark")) {
    localStorage.setIten("tema",  "dark");
} else {
    localStorage.setItem("tema", "light");
}
}