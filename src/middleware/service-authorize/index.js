import _ from 'lodash';
import ForbiddenError from './ForbiddenError';

/**
 * Middleware for authorising a route.
 * This middleware expects a resource containing permissions on the request object.
 *
 * @param {object} options - Options for the middleware.
 * @param {Array|string} [options.permissionPath] - Define where to find the permissions value on the request object.
 *                                                  Uses 'lodash.get' syntax.
 */
export default (options={}) => {

  function middleware(req, res, next) {
    //If no permissions declared default to Forbidden.
    const permission = _.get(req, options.permissionPath, false);
    if (!permission) {
      return next(new ForbiddenError('No permission'));
    }

    next(null);
  }

  return middleware;
};
