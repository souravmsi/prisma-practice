import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function updateUser(userId: number) {
    const user = await prisma.user.update({
        where: { id: userId },
        data: {
            name: "SOurav New Name",
        },
    });

    console.log(user);
}

updateUser(1);
