function DatosArticulos() {
    var datos = {
        articuloActual: ''
    };
    return {
        getArticuloActual: function () {
            return datos.articuloActual;
        },
        setArticuloActual: function (id) {
            datos.articuloActual = id;
        }
    };
}
function DatosAdopciones() {
    var datos = {
        adopcionActual: ''
    };
    return {
        getAdopcionActual: function () {
            return datos.adopcionActual;
        },
        setAdopcionActual: function (id) {
            datos.adopcionActual = id;
        }
    };
}
function CalendarioLocal() {
    var dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    var diasMd = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    var diasXs = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var mesesMd = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    return {
    };
}
function Novedades(NovedadesRest) {
    var Animal = {};
    Animal.listar = function () {
        return NovedadesRest.listar();
    };
    Animal.recientes = function (id) {
        return NovedadesRest.recientes();
    };
    Animal.buscar = function (id) {
        return NovedadesRest.buscar(id);
    };
    return Animal;
}
function Adopciones(AdopcionesRest) {
    var Animal = {};
    Animal.listar = function () {
        return AdopcionesRest.listar();
    };
    Animal.disponibles = function () {
        return AdopcionesRest.disponibles();
    };
    Animal.buscar = function (id) {
        return AdopcionesRest.buscar(id);
    };
    return Animal;
}
function Notificar(SweetAlert) {
    var alerta = {};
    alerta.ok = function () {
        SweetAlert.swal("TAREA REALIZADA CORRECTAMENTE", "Se completo satisfactoriamente la tarea solicitada", "success");
    };
    alerta.ajax = function (data) {
        SweetAlert.swal(data.mensaje, data.estado, data.codigo === "1" ? "success" : "error");
    };
    alerta.form = function () {
        SweetAlert.swal("EL FORMULARIO NO ESTA COMPLETO", "Debe llenar todos los campos del formulario", "error");
    };
    alerta.error = function (error) {
        console.error(error);
        SweetAlert.swal("NO SE PUEDE REALIZAR LA TAREA", "El componenete solicitado ha arrojado un error", "error");
    };
    alerta.seleccionar = function () {
        SweetAlert.swal({
            title: "No puede Realizar la accion Solicitada",
            text: "Debe marcar uno de los elementos de la tabla como seleccionado",
            type: "warning",
            showCancelButton: false,
            confirmButtonText: "Aceptar",
            closeOnConfirm: true,
            closeOnCancel: true
        });
    };
    alerta.cancelado = function () {
        SweetAlert.swal("Operación Cancelada", "La tarea ha sido cancelada por el usuario", "error");
    };
    alerta.mensaje = function (texto, estado) {
        SweetAlert.swal("Respuesta del Servidor", texto, estado == "1" ? "success" : "error");
    };
    return alerta;
}
angular.module('inspinia')
        .factory('Adopciones', Adopciones)
        .factory('Novedades', Novedades)
        .factory('Notificar', Notificar)
        .factory('DatosArticulos', DatosArticulos)
        .factory('DatosAdopciones', DatosAdopciones);