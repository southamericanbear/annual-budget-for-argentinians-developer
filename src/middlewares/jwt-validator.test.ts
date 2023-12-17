import jwt from 'jsonwebtoken';
import { jwtValidator } from './';
import { mockRequestJwtValidator, mockResponseJwtValidator } from '../test';

describe('jwtMiddleware', () => {
  it('should return 401 if no token is provided', () => {
    const req = mockRequestJwtValidator(undefined);
    const res = mockResponseJwtValidator();
    const next = jest.fn();

    jwtValidator(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'No token provided' });
    expect(next).not.toHaveBeenCalled();
  });

  it('should return 403 if the token is invalid', () => {
    const INVALID_TOKEN = 'invalid_token';
    const req = mockRequestJwtValidator(INVALID_TOKEN);
    const res = mockResponseJwtValidator();
    const next = jest.fn();

    jwtValidator(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: 'Failed to authenticate token' });
    expect(next).not.toHaveBeenCalled();
  });

  it('should call next() if the token is valid', () => {
    const VALID_TOKEN = jwt.sign({ id: '123' }, process.env.JWT_SECRET_KEY);

    const req = mockRequestJwtValidator(VALID_TOKEN);
    const res = mockResponseJwtValidator();
    const next = jest.fn();

    jwtValidator(req, res, next);

    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });
});
