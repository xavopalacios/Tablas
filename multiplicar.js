function generarTablas() {
    let tabla= document.getElementById("math-input").value;
    let contenedor = document.getElementById('table-container'); 
    let title= document.getElementById("txtTitle");
    let multiplicador = document.getElementById("txtMultiplicador");
    
    multiplicador.innerHTML="Multiplicador base: <strong>"+tabla+"</strong>"
    title.innerHTML="Tabla del " +tabla +" - Académico";
    //tabla.innerHTML = "<head><tr><th>Operación</th><th>Resultado</th></tr></thead><tbody></tbody>";
    let contenido="<thead><tr><th>Operación</th><th>Resultado</th></tr></thead><tbody></tbody>";

    
    for(let i=1; i<=10; i++){
        let resultado = tabla * i;

        contenido += "<tr><td>"+ tabla +" × "+ i +"</td><td class='res' >"+ resultado +"</td></tr>";
        
    }   
    contenedor.innerHTML = contenido;
    
}