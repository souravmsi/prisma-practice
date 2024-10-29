"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({ log: ["info", "query"] });
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user_posts = yield prisma.user.create({
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
    });
}
main()
    .then((data) => {
    console.log(data, "data");
})
    .catch((error) => {
    console.log(error, "error");
    process.exit(1);
});
