import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // const post = await prisma.post.create({
    //     data: {
    //         title: "Task 1",
    //         content: "This is demo content",
    //         authorId: 1,
    //     },
    // });

    const post = await prisma.post.create({
        data: {
            title: "Task 2",
            content: "This is again a demo content",
            author: {
                connect: { id: 1 },
            },
            published: false,
        },
    });

    return post;
};

main()
    .then((data) => {
        console.log(data, "data");
    })
    .catch((error) => {
        console.log(error, "error");
        process.exit(1);
    });
