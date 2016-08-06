function MainCtrl($http, $scope) {
    $scope.patrocinadores = {};
    $scope.atencion = {};
    $scope.datos = {};
    $http.post('http://localhost/easyapp/huellitas/galeria').then(function (data) {
        $scope.galeria = data.data;
    });
}

function PublicacionesCtrl($scope, $state, DatosArticulos, Novedades, Notificar) {
    $scope.verArticulo = function (id) {
        DatosArticulos.setArticuloActual(id);
        if ($state.is('fapa.articulo')) {
            $state.reload();
        } else {
            $state.go('fapa.articulo');
        }
    };
    Novedades.listar().then(function (data) {
        $scope.publicaciones = data;
    }, function (error) {
        console.error(error);
        Notificar.mensaje("No se ha obtenido la información del articulo");
    });
}

angular
        .module('inspinia')
        .controller('PublicacionesCtrl', PublicacionesCtrl)
        .controller('MainCtrl', MainCtrl);

