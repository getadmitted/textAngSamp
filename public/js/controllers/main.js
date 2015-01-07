// js/controllers/main.js
angular.module('todoController', [])

        // inject the Todo service factory into our controller
        .controller('mainController', function($scope, $http, Todos, $location) {
                $scope.formData = {};

                // GET =====================================================================
             
                Todos.get()
                        .success(function(data) {
                                $scope.todos = data;
                        });

                $scope.createTodo = function() {

                        if (!$.isEmptyObject($scope.formData)) {

                                Todos.create($scope.formData)

                                        // if successful creation, call our get function to get all the new todos
                                        .success(function(data) {
                                                $scope.formData = {}; // clear the form so our user is ready to enter another
                                                $scope.todos = data; // assign our new list of todos
                                                $location.path('/'); // redirect to index.html
                                        });

                        }
                };

                // DELETE ==================================================================
             
                $scope.deleteTodo = function(id) {
                        Todos.delete(id)
                                // if successful creation, call our get function to get all the new todos
                                .success(function(data) {
                                        $scope.todos = data; // assign our new list of todos
                                });
                };
        });