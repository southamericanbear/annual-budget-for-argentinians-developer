import { jwtValidator } from './';
import jwt from 'jsonwebtoken';

const mockRequest = (token: string | undefined) =>
	({
		headers: {
			authorization: token,
		},
	} as any);

const mockResponse = () => {
	const res: any = {};
	res.status = jest.fn().mockReturnValue(res);
	res.json = jest.fn().mockReturnValue(res);
	return res;
};

describe('jwtMiddleware', () => {
	it('should return 401 if no token is provided', () => {
		const req = mockRequest(undefined);
		const res = mockResponse();
		const next = jest.fn();

		jwtValidator(req, res, next);

		expect(res.status).toHaveBeenCalledWith(401);
		expect(res.json).toHaveBeenCalledWith({ message: 'No token provided' });
		expect(next).not.toHaveBeenCalled();
	});

	it('should return 403 if the token is invalid', () => {
		const INVALID_TOKEN = 'invalid_token';
		const req = mockRequest(INVALID_TOKEN);
		const res = mockResponse();
		const next = jest.fn();

		jwtValidator(req, res, next);

		expect(res.status).toHaveBeenCalledWith(403);
		expect(res.json).toHaveBeenCalledWith({ message: 'Failed to authenticate token' });
		expect(next).not.toHaveBeenCalled();
	});

	it('should call next() if the token is valid', () => {
		const VALID_TOKEN = jwt.sign({ id: '123' }, process.env.JWT_SECRET_KEY);
		const req = mockRequest(VALID_TOKEN);
		const res = mockResponse();
		const next = jest.fn();

		jwtValidator(req, res, next);

		expect(res.status).not.toHaveBeenCalled();
		expect(res.json).not.toHaveBeenCalled();
		expect(next).toHaveBeenCalled();
	});
});
