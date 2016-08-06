function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/fapa/inicio");
    $ocLazyLoadProvider.config({
        debug: false
    });

    $stateProvider
            .state('fapa', {
                abstract: true,
                url: "/fapa",
                templateUrl: "views/common/content.html",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['js/plugins/wow/wow.min.js']
                            },
                            {
                                files: ['js/plugins/dotdotdot/jquery.dotdotdot.min.js']
                            },
                            {
                                files: ['js/plugins/sweetalert/sweetalert.min.js', 'js/plugins/sweetalert/sweetalert.css']
                            },
                            {
                                name: 'oitozero.ngSweetAlert',
                                files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                            },
                            {
                                files: ['css/plugins/slick/slick.css', 'css/plugins/slick/slick-theme.css', 'js/plugins/slick/slick.min.js']
                            },
                            {
                                name: 'slick',
                                files: ['js/plugins/slick/angular-slick.min.js']
                            }
                        ]);
                    }
                }
            })
            .state('fapa.inicio', {
                url: "/inicio",
                templateUrl: "views/inicio.html",
                data: {pageTitle: 'Huellitas del Llano', specialClass: 'landing-page'},
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['js/plugins/dotdotdot/jquery.dotdotdot.min.js']
                            },
                            {
                                files: ['css/plugins/slick/slick.css', 'css/plugins/slick/slick-theme.css', 'js/plugins/slick/slick.min.js']
                            },
                            {
                                name: 'slick',
                                files: ['js/plugins/slick/angular-slick.min.js']
                            },
                            {
                                files: ['js/plugins/dotdotdot/jquery.dotdotdot.min.js']
                            },
                            {
                                files: ['js/plugins/sweetalert/sweetalert.min.js', 'js/plugins/sweetalert/sweetalert.css']
                            },
                            {
                                name: 'oitozero.ngSweetAlert',
                                files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                            }
                        ]);
                    }
                }
            })
            .state('fapa.blog', {
                url: "/blog",
                templateUrl: "views/blog.html",
                data: {pageTitle: 'Publicaciones', specialClass: 'landing-page'},
                controller: 'PublicacionesCtrl as blog',
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['js/plugins/dotdotdot/jquery.dotdotdot.min.js']
                            }
                        ]);
                    }
                }
            })
            .state('fapa.adopciones', {
                url: "/adopciones",
                template: "<adopciones-listar></adopciones-listar>",
                data: {pageTitle: 'Adopta un Amigo', specialClass: 'landing-page'}
            })
            .state('fapa.adopcion', {
                url: "/adopcion",
                template: "<adopciones-detalles></adopciones-detalles>",
                data: {pageTitle: 'Detalles de la Adopción', specialClass: 'landing-page'}
            })
            .state('fapa.articulo', {
                url: "/articulo",
                template: "<articulos-mostrar></articulos-mostrar>",
                data: {pageTitle: 'Publicacion', specialClass: 'landing-page'}
            })
            .state('fapa.nosotros', {
                url: "/nosotros",
                templateUrl: "views/nosotros.html",
                data: {pageTitle: 'Acerca de la Fundación', specialClass: 'landing-page'}
            })
            .state('fapa.servicios', {
                url: "/servicios",
                templateUrl: "views/servicios.html",
                data: {pageTitle: 'Servicios de la Fundación', specialClass: 'landing-page'}
            })
            .state('fapa.tienda', {
                url: "/tienda",
                templateUrl: "views/servicios.html",
                data: {pageTitle: 'Servicios de la Fundación', specialClass: 'landing-page'}
            })
            .state('fapa.contacto', {
                url: "/contacto",
                templateUrl: "views/servicios.html",
                data: {pageTitle: 'Servicios de la Fundación', specialClass: 'landing-page'}
            })
            ;

}
angular
        .module('inspinia')
        .config(config)
        .run(function ($rootScope, $state) {
            $rootScope.$state = $state;
        });
