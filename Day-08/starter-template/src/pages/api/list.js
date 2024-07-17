import { prisma } from "@/server/prisma";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const lists = await prisma.list.findMany(
            {
                where: { id: { not: 0 } },
            }
        );
        res.status(200).json({ message: "Hello World!" });
    } else {
        res.status(404).json({ message: "We only support GET requests" });
    }
}
