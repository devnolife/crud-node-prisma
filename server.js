const express = require('express');
const server = express();
const port = 8000;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

server.use(express.json());

//read atau get semua data mahasiswa
server.get('/all-mahasiswa', async (request, response) => {
    try {
        const mahasiswa = await prisma.mahasiswa.findMany();
        response.statusCode = 200;
        response.json(mahasiswa);
    } catch (err) {
        response.statusCode = 500
        response.json({
            message: "Internal Server Error",
            data: err
        })
    }
})

//post atau create data mahasiswa
server.post('/create-mahasiswa', async (request, response) => {
    try {
        const { nama, nim } = request.body;
        const data = await prisma.mahasiswa.create({
            data: {
                nama: nama,
                nim: nim
            }
        })
        response.statusCode = 200;
        response.json(data)
    } catch (err) {
        response.statusCode = 500
        response.json({
            message: "Internal Server Error",
            data: err
        })
    }
})

//update nama mahasiswa atau put
server.put('/update-mahasiswa/:nim', async (request, response) => {
    try {
        const { nama } = request.body;
        const { nim } = request.params;
        const data = await prisma.mahasiswa.update({
            where: {
                nim: nim
            },
            data: {
                nama: nama
            }
        })
        response.statusCode = 200;
        response.json(data)
    } catch (err) {
        response.statusCode = 500
        response.json({
            message: "Internal Server Error",
            data: err
        })
    }
})

//delete data mahasiswa atau delete

server.delete('/delete-mahasiswa/:nim', async (request, response) => {
    try {
        const { nim } = request.params;
        const data = await prisma.mahasiswa.delete({
            where: {
                nim: nim
            }
        })
        response.statusCode = 200;
        response.json(data)
    } catch (err) {
        response.statusCode = 500
        response.json({
            message: "Internal Server Error",
            data: err
        })
    }
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



