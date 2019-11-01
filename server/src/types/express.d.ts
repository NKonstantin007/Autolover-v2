import express from 'express';
import {User} from '../models/UserModel';

declare module 'express' {
      interface Request {
        user: User
      }
}