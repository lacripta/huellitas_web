function pageTitle($rootScope, $timeout) {
    return {
        link: function (scope, element) {
            var listener = function (event, toState, toParams, fromState, fromParams) {
                var title = 'F.A.P.A | Pagina Principal';
                if (toState.data && toState.data.pageTitle)
                    title = 'F.A.P.A | ' + toState.data.pageTitle;
                $timeout(function () {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    };
}
function sideNavigation($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            // Call the metsiMenu plugin and plug it to sidebar navigation
            $timeout(function () {
                element.metisMenu();

            });
        }
    };
}
function iboxTools($timeout) {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'views/common/ibox_tools.html',
        controller: function ($scope, $element) {
            $scope.showhide = function () {
                var ibox = $element.closest('div.ibox');
                var icon = $element.find('i:first');
                var content = ibox.find('div.ibox-content');
                content.slideToggle(200);
                icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
                ibox.toggleClass('').toggleClass('border-bottom');
                $timeout(function () {
                    ibox.resize();
                    ibox.find('[id^=map-]').resize();
                }, 50);
            };
            $scope.closebox = function () {
                var ibox = $element.closest('div.ibox');
                ibox.remove();
            };
        }
    };
}
function landingScrollspy() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.scrollspy({
                target: '.navbar-fixed-top',
                offset: 80
            });
        }
    };
}
function fitHeight() {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.css("height", $(window).height() + "px");
            element.css("min-height", $(window).height() + "px");
        }
    };
}
function truncate($timeout) {
    return {
        restrict: 'A',
        scope: {
            truncateOptions: '='
        },
        link: function (scope, element) {
            $timeout(function () {
                if (!scope.truncateOptions) {
                    scope.truncateOptions = {
                        watch: 'window',
                        wrap: 'word'
                    };
                }
                element.dotdotdot(scope.truncateOptions);
            });
        }
    };
}
function articulosRecientes(DatosArticulos) {
    return {
        restrict: 'E',
        templateUrl: 'views/articulos_recientes.html',
        scope: {
        },
        controller: function ($scope, $state, Novedades, Notificar) {
            Novedades.recientes().then(function (data) {
                $scope.recientes = data;
            }, function (error) {
                console.error(error);
                Notificar.mensaje("No se ha obtenido la información del articulo");
            });
            $scope.dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
            $scope.diasAv = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
            $scope.diasC = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
            $scope.meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            $scope.mesesC = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
            $scope.truncateOptions = {
                watch: 'window',
                wrap: 'word'
            };
            $scope.verArticulo = function (id) {
                DatosArticulos.setArticuloActual(id);
                if ($state.is('fapa.articulo')) {
                    $state.reload();
                } else {
                    $state.go('fapa.articulo');
                }
            };
        }
    };
}
function articulosRecientesMini(DatosArticulos) {
    return {
        restrict: 'E',
        templateUrl: 'views/articulos_recientes_mini.html',
        scope: {
        },
        controller: function ($scope, $state, Novedades, Notificar) {
            Novedades.recientes().then(function (data) {
                $scope.recientes = data;
            }, function (error) {
                console.error(error);
                Notificar.mensaje("No se ha obtenido la información del articulo");
            });
            $scope.dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
            $scope.diasAv = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
            $scope.diasC = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
            $scope.meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            $scope.mesesC = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
            $scope.truncateOptions = {
                watch: 'window',
                wrap: 'word'
            };
            $scope.verArticulo = function (id) {
                DatosArticulos.setArticuloActual(id);
                if ($state.is('fapa.articulo')) {
                    $state.reload();
                } else {
                    $state.go('fapa.articulo');
                }
            };
        }
    };
}
function articulosMostrar(DatosArticulos) {
    return {
        restrict: 'E',
        templateUrl: 'views/articulos_mostrar.html',
        scope: {
        },
        controller: function ($scope, Novedades, Notificar) {
            Novedades.buscar(DatosArticulos.getArticuloActual()).then(function (data) {
                $scope.verArt = data;
            }, function (error) {
                console.error(error);
                Notificar.mensaje("No se ha obtenido la información del articulo");
            });
        }
    };
}
function adopcionesListar() {
    return {
        restrict: 'E',
        templateUrl: 'views/adopciones_listar.html',
        scope: {
        },
        controller: function ($scope, $state, Adopciones, Notificar, DatosAdopciones) {
            $scope.verAdopcion = function (id) {
                console.log(id);
                DatosAdopciones.setAdopcionActual(id);
                if ($state.is('fapa.adopcion')) {
                    $state.reload();
                } else {
                    console.info(DatosAdopciones.getAdopcionActual());
                    $state.go('fapa.adopcion');
                }
            };
            Adopciones.listar().then(function (data) {
                $scope.adopciones = data;
            }, function (error) {
                console.error(error);
                Notificar.mensaje("No se ha obtenido la lista de adopciones");
            });
        }
    };
}
function adopcionesDetalles() {
    return {
        restrict: 'E',
        templateUrl: 'views/adopciones_detalles.html',
        scope: {
        },
        controller: function ($scope, Adopciones, DatosAdopciones, Notificar) {
            Adopciones.buscar(DatosAdopciones.getAdopcionActual()).then(function (data) {
                $scope.adt = data;
            }, function (error) {
                console.error(error);
                Notificar.mensaje("No se ha podido obtener la informacion de esta adopcion");
            });
        }
    };
}
function atencionAnimales() {
    return {
        restrict: 'E',
        templateUrl: 'views/atencion_animales.html',
        scope: {
        },
        controller: function () {

        }
    };
}
function patrocinadores() {
    return {
        restrict: 'E',
        templateUrl: 'views/patrocinadores.html',
        scope: {
        },
        controller: function () {

        }
    };
}
angular
        .module('inspinia')
        .directive('pageTitle', pageTitle)
        .directive('sideNavigation', sideNavigation)
        .directive('iboxTools', iboxTools)
        .directive('truncate', truncate)
        .directive('patrocinadores', patrocinadores)
        .directive('adopcionesListar', adopcionesListar)
        .directive('adopcionesDetalles', adopcionesDetalles)
        .directive('atencionAnimales', atencionAnimales)
        .directive('articulosRecientes', articulosRecientes)
        .directive('articulosRecientesMini', articulosRecientesMini)
        .directive('articulosMostrar', articulosMostrar)
        .directive('landingScrollspy', landingScrollspy)
        .directive('fitHeight', fitHeight);
