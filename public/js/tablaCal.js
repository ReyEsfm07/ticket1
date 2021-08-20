function submit() {
    let fecha_pres = document.getElementsByName("trip-start")[0].value//document.getElementById("names").value;
    localStorage.setItem('fechaPresupuestoInicial',fecha_pres)
  }
