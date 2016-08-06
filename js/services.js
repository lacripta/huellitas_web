function AdopcionesRest($http, $q) {
    return {
        listar: adoptables,
        buscar: buscar
    };
    function adoptables() {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'POST',
            url: 'http://localhost/easyapp/huellitas/adopciones/disponibles',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function buscar(id) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'POST',
            url: 'http://localhost/easyapp/huellitas/adopciones/buscar/' + id,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
}
function NovedadesRest($http, $q) {
    return {
        listar: listarTodas,
        recientes: recientes,
        buscar: buscar
    };
    function listarTodas() {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'POST',
            url: 'http://localhost/easyapp/huellitas/novedades/publicas',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function recientes() {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            cahce: true,
            method: 'POST',
            url: 'http://localhost/easyapp/huellitas/novedades/recientes',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }

    function buscar(id) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'POST',
            url: 'http://localhost/easyapp/huellitas/novedades/ver/' + id,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
}
angular.module('inspinia')
        .service('AdopcionesRest', AdopcionesRest)
        .service('NovedadesRest', NovedadesRest);