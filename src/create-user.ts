import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const user = await prisma.user.create({
        data: {
            email: "souravjoshimails@gmail.com",
            name: "Sourav Joshi",
        },
    });
    return user;
};

main()
    .then((data) => {
        console.log(data, "data");
    })
    .catch((error) => {
        console.log(error, "error");
        process.exit(1);
    });
