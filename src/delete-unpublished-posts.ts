import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const data = await prisma.user.update({
        where: {
            id: 1,
        },
        data: {
            posts: {
                deleteMany: {
                    published: false,
                },
            },
        },
    });
    console.log(data);
}

main();
