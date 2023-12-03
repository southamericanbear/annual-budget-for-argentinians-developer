export const mockRequestJwtValidator = (token: string | undefined) =>
  ({
    headers: {
      authorization: token,
    },
    body: {
      email: 'dittler.a@gmail.com',
      password: 'password123',
    },
  } as any);

export const mockResponseJwtValidator = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};
