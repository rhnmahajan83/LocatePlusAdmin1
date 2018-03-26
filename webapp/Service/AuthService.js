/**
 * Created by Rohan on 3/25/2018.
 */
app.service('AuthService', function($http, $localStorage) {
    this.register = function (name, email, password)
    {
        return $http({
            method:     'POST',
            url:        '/api/auth/register',
            data:       {
                name:           name,
                email:          email,
                password:       password
            }
        })
    }

    this.login = function (email, password)
    {
        return $http({
            method:     'POST',
            url:        '/api/auth/login',
            data:       {
                email:          email,
                password:       password
            }
        })
    }

    this.logout = function ()
    {
        return $http({
            method:     'GET',
            url:        '/api/auth/logout',
            headers:    {
                'X-Auth-Token':    $localStorage.accessToken
            }
        })
    }
}