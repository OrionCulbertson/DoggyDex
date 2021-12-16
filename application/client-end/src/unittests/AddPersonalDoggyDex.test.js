import request from 'supertest';
import mockapp from './mockApp';
import { jest } from '@jest/globals';

const addDog = jest.fn();
const app = mockapp({addDog});
const userOne = '1';
const userTwo = '2';
describe('Adding dog to PersonalDoggyDex', () => {
    it('checks the users doggydex', async () => {
        // console.log('userOne ', userOne);
        // console.log('userTwo ', userTwo);
        const userOneResponse = await request(app).get('/getDog').send(userOne);
        //console.log(userOneResponse.text);
        //expect(userOneResponse.text).toBe('[]');
        const userTwoResponse = await request(app).get('/getDog').send(userTwo);
        //console.log(userOneResponse.text);
        //expect(userTwoResponse.text).toBe('[1000, 1025]');
        
    });
});

