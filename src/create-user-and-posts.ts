import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
    const user_posts = await prisma.user.create({
        data: {
            name: "Nitish Panwar",
            email: "nitish.panwar@gmail.com",
            posts: {
                create: [
                    {
                        title: "Task-1",
                        content: "demo content",
                        published: true,
                    },

                    {
                        title: "Task-2",
                        content: "demo content",
                    },
                ],
            },
        },
    });
    return user_posts;
}

main()
    .then((data) => {
        console.log(data, "data");
    })
    .catch((error) => {
        console.log(error, "error");
        process.exit(1);
    });
