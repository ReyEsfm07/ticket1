
const calendarioFechas=[
'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09','2020-10','2020-11','2020-12',
'2021-01','2021-02','2021-03','2021-04','2021-05','2021-06','2021-07','2021-08','2021-09','2021-10','2021-11','2021-12',
'2022-01','2022-02','2022-03','2022-04','2022-05','2022-06','2022-07','2022-08','2022-09','2022-10','2022-11','2022-12',
'2023-01','2023-02','2023-03','2023-04','2023-05','2023-06','2023-07','2023-08','2023-09','2023-10','2023-11','2023-12',
'2024-01','2024-02','2024-03','2024-04','2024-05','2024-06','2024-07','2024-08','2024-09','2024-10','2024-11','2024-12',
'2025-01','2025-02','2025-03','2025-04','2025-05','2025-06','2025-07','2025-08','2025-09','2025-10','2025-11','2025-12',
'2026-01','2026-02','2026-03','2026-04','2026-05','2026-06','2026-07','2026-08','2026-09','2026-10','2026-11','2026-12',
'2027-01','2027-02','2027-03','2027-04','2027-05','2027-06','2027-07','2027-08','2027-09','2027-10','2027-11','2027-12',
'2028-01','2028-02','2028-03','2028-04','2028-05','2028-06','2028-07','2028-08','2028-09','2028-10','2028-11','2028-12',
'2029-01','2029-02','2029-03','2029-04','2029-05','2029-06','2029-07','2029-08','2029-09','2029-10','2029-11','2029-12',
'2030-01','2030-02','2030-03','2030-04','2030-05','2030-06','2030-07','2030-08','2030-09','2030-10','2030-11','2030-12'
]



let fecha_pres=localStorage.getItem('fechaPresupuestoInicial')
// console.log(fecha_pres)












function agregarColumna() {



  let x = document.getElementById('headTable2').getElementsByTagName('th').length;
  let columnasFecha=parseInt(x-2)
  // console.log("cjhecatye esti",columnasFecha===0)

  if(fecha_pres===null && columnasFecha===0){
    window.location.replace("http://localhost:3000/calendario");
  }else{
    


    let indFecha=-1;
    for (let value of calendarioFechas){
      indFecha += 1;
      if (value === fecha_pres) {
        
        // console.log("esta es la fecha",value,indFecha)
        fechaArrayI=indFecha
      }
    }

    // console.log("rec",fechaArrayI)
    // console.log(parseInt(fechaArrayI)+parseInt(columnasFecha))
    // console.log(parseInt(fechaArrayI))

    const columnas=document.getElementById('headTable')
    const columnasDataI=document.getElementById('bodyColINGRESOS')
    const columnasDataE=document.getElementById('bodyColEGRESOS')
    const columnasDataT=document.getElementById('bodyColTOTAL')
    const columnasDataTA=document.getElementById('bodyColTOTAL_ACUMULADO')


    const columnas2=document.getElementById('headTable2')
    const columnasDataI2=document.getElementById('bodyColINGRESOS2')
    const columnasDataE2=document.getElementById('bodyColEGRESOS2')
    const columnasDataT2=document.getElementById('bodyColTOTAL2')
    const columnasDataTA2=document.getElementById('bodyColTOTAL_ACUMULADO2')



    let fecha_colum_din=calendarioFechas[parseInt(fechaArrayI)+parseInt(columnasFecha)]

    const th=document.createElement('th')
    th.setAttribute("id", "fecha"+columnasFecha)
    th.setAttribute("class", "ColNameFecha")
    th.textContent=fecha_colum_din

    const tdI=document.createElement('td')
    tdI.setAttribute("id", "informacionI"+columnasFecha)
    tdI.textContent="informacionI"

    const tdE=document.createElement('td')
    tdE.setAttribute("id", "informacionE"+columnasFecha)
    tdE.textContent="informacionE"

    const tdT=document.createElement('td')
    tdT.setAttribute("id", "informacionT"+columnasFecha)
    tdT.textContent="informacionT"

    const tdTA=document.createElement('td')
    tdTA.setAttribute("id", "informacionTA"+columnasFecha)
    tdTA.textContent="informacionTA"



    const th2=document.createElement('th')
    th2.setAttribute("id", "fecha2"+columnasFecha)
    th2.setAttribute("class", "ColNameFecha2")
    th2.textContent=fecha_colum_din

    const tdI2=document.createElement('td')
    tdI2.setAttribute("id", "informacionI2"+columnasFecha)
    tdI2.textContent="informacionI"

    const tdE2=document.createElement('td')
    tdE2.setAttribute("id", "informacionE2"+columnasFecha)
    tdE2.textContent="informacionE"

    const tdT2=document.createElement('td')
    tdT2.setAttribute("id", "informacionT2"+columnasFecha)
    tdT2.textContent="informacionT"

    const tdTA2=document.createElement('td')
    tdTA2.setAttribute("id", "informacionTA2"+columnasFecha)
    tdTA2.textContent="informacionTA"


    columnas.insertBefore(th, document.getElementById('columFinal'));
    columnasDataI.insertBefore(tdI,document.getElementById('ultColumnSumINGRESOS'))
    columnasDataE.insertBefore(tdE,document.getElementById('ultColumnSumEGRESOS'))
    columnasDataT.insertBefore(tdT,document.getElementById('ultColumnSumTOTAL'))
    columnasDataTA.insertBefore(tdTA,document.getElementById('ultColumnSumTOTAL_ACUMULADO'))



    columnas2.insertBefore(th2, document.getElementById('columFinal2'));
    columnasDataI2.insertBefore(tdI2,document.getElementById('ultColumnSumINGRESOS2'))
    columnasDataE2.insertBefore(tdE2,document.getElementById('ultColumnSumEGRESOS2'))
    columnasDataT2.insertBefore(tdT2,document.getElementById('ultColumnSumTOTAL2'))
    columnasDataTA2.insertBefore(tdTA2,document.getElementById('ultColumnSumTOTAL_ACUMULADO2'))





    localStorage.removeItem('fechaPresupuestoInicial')





    //TABLA3
    /// agregar las fechas de la tabla 3
    //NUMERO DE CONCEPTOS 
    let conceptos=document.getElementById('table3').getElementsByClassName('conceptoDinamicoBodyTable3td')
    console.log("conceptos de la tabla 3", conceptos.length)

    if(conceptos.length==0){
      let th3=document.createElement('th')
      th3.setAttribute("id", "fecha3"+columnasFecha)
      th3.setAttribute("class", "ColNameFecha3")
      th3.textContent=fecha_colum_din
  
      console.log("esslc",columnasFecha+1)
      const fechaTable3=document.getElementById('trTable3')
  
      fechaTable3.insertBefore(th3, document.getElementById('columpenultima3'))
    }else{
      console.log("hay conceptos")
    }

    //SI los CONCEPTOS SON MAYOR A 0
    if(conceptos.length>0){
      let th3=document.createElement('th')
      th3.setAttribute("id", "fecha3"+columnasFecha)
      th3.setAttribute("class", "ColNameFecha3")
      th3.textContent=fecha_colum_din
  
      const fechaTable3=document.getElementById('trTable3')
      fechaTable3.insertBefore(th3, document.getElementById('columpenultima3'))











      for(let i=1;i<=conceptos.length;i++){

        let conId=document.getElementById("conceptoDinamicoBodyTable3C"+i)
        // console.log("los conceptos son",i,conId)
        let columnasFechaN=columnasFecha+1
        
        const tdConcep=document.createElement('td')
        tdConcep.setAttribute("id", "concepto_Coltd"+columnasFechaN+"_Concep"+i)
        tdConcep.innerHTML=`<input type="text" class="conceptoDinamicoBodyTable3tdi" id="concepto_Col${columnasFechaN}_Concep${i}" placeholder="INGRESO"></input>`


        console.log("checa esto",'datosSumatoriaDinamicoBodyTable3thCSum'+i)
        console.log(tdConcep)
        conId.insertBefore(tdConcep, document.getElementById('datosSumatoriaDinamicoBodyTable3thCSum'+i))

       

        
    }
    }



  }
  



}







































function agregarConcepto(){

  //ACA SACAMOS EL NUMERO DE COLUMNAS
  let variableColumnasName=document.getElementById('table1').getElementsByClassName('ColNameFecha')
  let namesd=[].map.call(variableColumnasName, item => item.textContent)

  // console.log("columnas A =" ,variableColumnasName.length,namesd,namesd[namesd.length-1])




  //NUMERO DE CONCEPTOS 
  let variableConceptosName=document.getElementById('table3').getElementsByClassName('conceptoDinamicoBodyTable3td')
  let numConceptos=variableConceptosName.length
  // console.log("numero de conceptos t3",variableConceptosName.length)
 
  //TABLA3
  //PRIMER PASO VER SI TIENE CERO COLUMNAS
  let numeroColumnasTabla3Fecha=variableColumnasName.length


  if(numeroColumnasTabla3Fecha===0){

    const headTable3=document.querySelector('#bodyTable3')
    const template=document.querySelector('#template-concepto-body').content
    const fragment=document.createDocumentFragment()



    //VARIABLES DENTRO DEL TR BODY TABLE 3 TEMPLATE
    let bodyTable3Concepto=template.querySelector(".conceptoDinamicoBodyTable3td")
    // bodyTable3Concepto.setAttribute("id", "concepto_titulo_Col"+numeroColumnasTabla3Fecha+"_Concep"+numConceptos)
    bodyTable3Concepto.innerHTML=`<input type="text" class="conceptoDinamicoBodyTable3tdi" placeholder="conceptojs" id="concepto_titulo_input_Col${numeroColumnasTabla3Fecha+1}_Concep${numConceptos+1}">`
    let bodyTable3Sumatoria=template.querySelector(".datosSumatoriaDinamicoBodyTable3th")
    // bodyTable3Sumatoria.setAttribute("id", "datosSumatoriaDinamicoBodyTable3_Col"+numeroColumnasTabla3Fecha+"_Concep"+numConceptos)
    let bodyTable3Acciones=template.querySelector(".accionesDinamicoBodyTable3th")
    // bodyTable3Acciones.setAttribute("id", "accionesDinamicoBodyTable3_Col"+numeroColumnasTabla3Fecha+"_Concep"+numConceptos)


    // console.log("los valores de los conceptos son",bodyTable3Concepto,bodyTable3Sumatoria,bodyTable3Acciones)

    // console.log(variableConceptosName.length)
    const clone=template.cloneNode(true)
    fragment.appendChild(clone)
    headTable3.appendChild(fragment)



    const conceptoFila=document.getElementById('conceptoDinamicoBodyTable3')
    conceptoFila.setAttribute("id", "conceptoDinamicoBodyTable3C"+variableConceptosName.length)


    const conceptoSumatoriaFila=document.getElementById('datosSumatoriaDinamicoBodyTable3th')
    conceptoSumatoriaFila.setAttribute("id", "datosSumatoriaDinamicoBodyTable3thCSum"+variableConceptosName.length)


    const conceptoAccionesFila=document.getElementById('datosAccionesDinamicoBodyTable3th')
    conceptoAccionesFila.setAttribute("id", "datosAccionesDinamicoBodyTable3thCAcc"+variableConceptosName.length+1)
   



  }





  //SI EL NUMERO DE COLUMNAS ES MAYOR A 0,SI EXISTEN COLUMNAS

  if(numeroColumnasTabla3Fecha>0 && numConceptos>0){
    let ultimoTRDinamico=document.getElementById("conceptoDinamicoBodyTable3C"+numConceptos)
    // console.log("conceptoDinamicoBodyTable3C"+numConceptos)
    let nuevoTRDinamico=ultimoTRDinamico.cloneNode(true)
    
    nuevoTRDinamicoId="conceptoDinamicoBodyTable3C"+(parseInt(numConceptos)+1)
    nuevoTRDinamico.id=nuevoTRDinamicoId
    console.log(nuevoTRDinamicoId)
    console.log(nuevoTRDinamico)



    // nuevoTRDinamico.getElementById("concepto_titulo_input_Col1_Concep"+numConceptos).id="concepto_titulo_input_Col1_Concep"+(parseInt(numConceptos)+1)


    let bodyTable3Identificador=document.getElementById("bodyTable3")
    bodyTable3Identificador.appendChild(nuevoTRDinamico);
    // console.log("num de col y conceptos es mayor a 0 concepto",numeroColumnasTabla3Fecha,numConceptos)

    let tdTable3=document.getElementById(nuevoTRDinamicoId).getElementsByTagName("td")
    console.log("aca inicia la magia")
    // console.log(tdTable3)
    // console.log(tdTable3[0])
    // console.log(tdTable3[tdTable3.length-1])
  




 ///IDENTIFICADOR
 ///DE
 //LA
 //PRIMERA
 //COLUMNA








    // CREAMOS LOS IDENTIFICADORES DE LAS FECHAS
    for (let i=1;i<tdTable3.length-2;i++){
      tdTable3[i].id="concepto_Col"+numeroColumnasTabla3Fecha+"Concep"+numConceptos
    }

    //Penultimo
    tdTable3[tdTable3.length-2].id="datosSumatoriaDinamicoBodyTable3thCSum"+(parseInt(numConceptos)+1)
    //Ultimo
    tdTable3[tdTable3.length-1].id="datosAccionesDinamicoBodyTable3thCAcc"+(parseInt(numConceptos)+1)+"1"

  }











  if(numeroColumnasTabla3Fecha>0 && numConceptos===0){
    const headTable3=document.querySelector('#bodyTable3')
    const template=document.querySelector('#template-concepto-body-primeraVez').content
    const fragment=document.createDocumentFragment()

    const clone=template.cloneNode(true)
    fragment.appendChild(clone)
    headTable3.appendChild(fragment)

    for(let i=1;i<=numeroColumnasTabla3Fecha;i++){


      let fechaPrimerConcepto=document.createElement('td')
      // fechaPrimerConcepto.setAttribute("id", "concepto_Col"+numeroColumnasTabla3Fecha+"1_Concep1")
      fechaPrimerConcepto.innerHTML=`<input type="text" class="conceptoDinamicoBodyTable3tdi" id="concepto_Col${numeroColumnasTabla3Fecha}_Concep1" placeholder="INGRESO">`
      
      
      let sadasfas=document.getElementById("conceptoDinamicoBodyTable3C1")
      sadasfas.insertBefore(fechaPrimerConcepto, document.getElementById("datosSumatoriaDinamicoBodyTable3thCSum1"))


    }
    console.log("se va a hacer lo siguiente")
  }



}














function eliminarColumna() {

  let x = document.getElementById('headTable2').getElementsByTagName('th').length;
  let columnasFechaRemove=parseInt(x-3)

  if (columnasFechaRemove>=0){
    let elementfecha = document.getElementById("fecha"+columnasFechaRemove);
    elementfecha.parentNode.removeChild(elementfecha);
    let elementinformacionI = document.getElementById("informacionI"+columnasFechaRemove);
    elementinformacionI.parentNode.removeChild(elementinformacionI);
    let elementinformacionE = document.getElementById("informacionE"+columnasFechaRemove);
    elementinformacionE.parentNode.removeChild(elementinformacionE);
    let elementinformacionT = document.getElementById("informacionT"+columnasFechaRemove);
    elementinformacionT.parentNode.removeChild(elementinformacionT);
    let elementinformacionTA = document.getElementById("informacionTA"+columnasFechaRemove);
    elementinformacionTA.parentNode.removeChild(elementinformacionTA);
  
  
  
  
    let elementfecha2 = document.getElementById("fecha2"+columnasFechaRemove);
    elementfecha2.parentNode.removeChild(elementfecha2);
    let elementinformacionI2 = document.getElementById("informacionI2"+columnasFechaRemove);
    elementinformacionI2.parentNode.removeChild(elementinformacionI2);
    let elementinformacionE2 = document.getElementById("informacionE2"+columnasFechaRemove);
    elementinformacionE2.parentNode.removeChild(elementinformacionE2);
    let elementinformacionT2 = document.getElementById("informacionT2"+columnasFechaRemove);
    elementinformacionT2.parentNode.removeChild(elementinformacionT2);
    let elementinformacionTA2 = document.getElementById("informacionTA2"+columnasFechaRemove);
    elementinformacionTA2.parentNode.removeChild(elementinformacionTA2);
    
    
    // variableColumnasName=document.getElementById('table1').getElementsByClassName('ColNameFecha').length
    // console.log("columnas E =" ,variableColumnasName)
  }else{
    console.log("Columnas ==",columnasFechaRemove)
  }



  //TABLA 3
  //ACA SACAMOS EL NUMERO DE COLUMNAS
  let variableColumnasName=document.getElementById('table1').getElementsByClassName('ColNameFecha')
  let namesd=[].map.call(variableColumnasName, item => item.textContent)
  let numeroColumnasTabla3Fecha=variableColumnasName.length
  //NUMERO DE CONCEPTOS 
  let variableConceptosName=document.getElementById('table3').getElementsByClassName('conceptoDinamicoBodyTable3td')
  let numConceptos=variableConceptosName.length
  
  
  let elementInformacionFechaTb3 = document.getElementById("fecha3"+(parseInt(numeroColumnasTabla3Fecha)));
  elementInformacionFechaTb3.parentNode.removeChild(elementInformacionFechaTb3);


  console.log(variableConceptosName.length)
  for (let i=1;i<=3;i++){

    let elementInformacionInputEgresos = document.getElementById("concepto_Coltd"+(parseInt(numeroColumnasTabla3Fecha)+1)+"_Concep"+i);

    

    elementInformacionInputEgresos.parentNode.removeChild(elementInformacionInputEgresos);
  }



}

