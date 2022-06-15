const request = require('supertest');
const app = require("../../index");

describe('Testing clientRouter', ()=>{

    it('Must return 201 code if all data are valids', async () =>{
        const client = {
            name: "Amber",
            mainPhone: "741852963",
            secondyPhone:"794561563"
        }
        const res = await request(app)
        .post('/clients/register')
        .send(client);
        expect(res.status).toBe(201);

    });
    

    it('Must return 400 code if some datum is invalid', async () => {
        const client = {
            name: "Amber",
            mainPhone: "741852963",
            secondyPhone:"794561563"
        }
        const res = await request(app)
        .post('/clients/register')
        .send(client);
        expect(res.status).toBe(400);
    });

    
})