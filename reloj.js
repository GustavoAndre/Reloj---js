(function(){
    var actualizarHora = function(){

        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            año = fecha.getFullYear();

        var pHora = document.getElementById("horas"),
            pAMPM = document.getElementById("ampm"),
            pMinutos = document.getElementById("minutos"),
            pSegundos = document.getElementById("segundos"),
            pDiaSemana = document.getElementById("diaSemana"),
            pDia = document.getElementById("dia"),
            pMes = document.getElementById("mes"),
            pYear = document.getElementById("year");

        var dia_Semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
        var mes_año = ["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE",
                       "OCTUBRE","NOVIEMBRE","DICIEMBRE" ];   

            pDiaSemana.innerHTML=dia_Semana[diaSemana];
            pDia.innerHTML = dia;
            pMes.innerHTML = mes_año[mes];
            pYear.innerHTML = año;

            if (horas>=12) {
                horas -= 12;
                ampm = "PM"; 
            }else{
                ampm="AM";
            }
            pHora.innerHTML = horas;
            pAMPM.innerHTML = ampm;
            if (minutos<10) {
                minutos = "0"+minutos;
            }
            if (segundos<10) {
                segundos = "0"+segundos;
            }
            pMinutos.innerHTML = minutos;
            pSegundos.innerHTML = segundos;
    };
        actualizarHora();
        var intervalo = setInterval(actualizarHora,999);
}())