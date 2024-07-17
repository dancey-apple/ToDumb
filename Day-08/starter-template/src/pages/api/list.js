import { prisma } from "@/server/prisma";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const lists = await prisma.list.findMany();
        res.status(200).json({ items: lists });
    } else {
        res.status(404).json({ message: "We only support GET requests" });
    }
}
