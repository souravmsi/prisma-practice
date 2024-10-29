import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllUsers() {
    const users = await prisma.user.findMany({});
    console.log(users);
}

async function getUser(email: string) {
    const users = await prisma.user.findMany({
        where: {
            email,
        },
        include: {
            posts: true,
        },
    });

    console.log(users);
}

getAllUsers();
getUser("souravjoshimails@gmail.com");
