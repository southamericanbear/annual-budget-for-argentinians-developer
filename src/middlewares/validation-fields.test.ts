import request from 'supertest';
import express from 'express';
import { signupValidators } from '../utils';

const app = express();
app.use(express.json());

app.post('/signup', signupValidators, (req: any, res: any) => {
  res.status(201).json({ message: 'Validation passed' });
});

describe('Signup Validation', () => {
  it('should return 400 for invalid email', async () => {
    const res = await request(app).post('/signup').send({ email: 'invalid-email', password: 'password123', name: 'Test User' });

    expect(res.status).toBe(400);
  });

  it('should return 201 for valid signup data', async () => {
    const res = await request(app).post('/signup').send({ email: 'valid-email@example.com', password: 'password123', name: 'Test User' });

    expect(res.status).toBe(201);
    expect(res.body).toEqual({ message: 'Validation passed' });
  });
});
