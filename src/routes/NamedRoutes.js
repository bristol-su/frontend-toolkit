import WindowAccessor from '../utils/WindowAccessor';

export default new class {

    trimParam(param) {
        return ;
    }

    /**
     * Get the path of a named route
     *
     * @param name Name of the route
     * @param parameters Object containing the route parameters. Any parameters not used for the route will be added in the query.
     */
    path(name, parameters) {
        if(!WindowAccessor.has(['named_routes', name])) {
            throw new Error('Route with name [' + name + '] could not be found');
        }

        let url = WindowAccessor.get(['named_routes', name])
        let urlParameters = Object.assign({}, parameters);

        return url.replace(
          /{([^}]+)}/gi,
          (tag, i) => {
              let keyName = tag.replace(/{|}|\?/g, '');

              if(tag.indexOf('?') === -1 && !urlParameters.hasOwnProperty(keyName)) {
                  throw new Error('Key ' + keyName + ' is required for the route ' + name);
              }

              let tagValue = urlParameters[keyName];
              delete urlParameters[keyName];
              return tagValue;
          }
        );
    }

    /**
     * Get the path of a named route for a module.
     *
     * This differs by path by adding the module/activity parameters to the route, allowing you to use the route
     * as if it were a base route.
     *
     * @param name Name of the route
     * @param parameters Any parameters that your route defines
     */
    moduleWebPath(name, parameters) {
        // Get the Webs query from QueryParams
        // Add module instance and activity
        // call path
    }

    moduleApiPath(name, parameters) {
        // Get the API query from QueryParams
        // Add module instance and activity
        // call path
    }

}
