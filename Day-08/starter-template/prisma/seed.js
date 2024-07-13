const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const listData = [
  {
    id: 1,
    title: "Dishes",
    summary: "Wash the dishes",
  },
  {
    id: 2,
    title: "Laundry",
    summary: "Do the laundry",
  },
  {
    id: 3,
    title: "Grocery Shopping",
    summary: "Buy groceries",
  },
  {
    id: 4,
    title: "Vacuum",
    summary: "Vacuum the house",
  },
  {
    id: 5,
    title: "Clean Bathroom",
    summary: "Clean the bathroom",
  },
  {
    id: 6,
    title: "Mow the Lawn",
    summary: "Mow the lawn",
  },
  {
    id: 7,
    title: "Clean Garage",
    summary: "Clean the garage",
  },
  {
    id: 8,
    title: "Organize Closet",
    summary: "Organize the closet",
  },
  {
    id: 9,
    title: "Clean Fridge",
    summary: "Clean the fridge",
  },
  {
    id: 10,
    title: "Clean Oven",
    summary: "Clean the oven",
  },
  {
    id: 11,
    title: "Clean Windows",
    summary: "Clean the windows",
  },
  {
    id: 12,
    title: "Clean Car",
    summary: "Clean the car",
  },
  {
    id: 13,
    title: "Wash Bedding",
    summary: "Wash the bedding",
  },
];

async function main() {
  console.log(`Update me to seed data`);
  for (const item of listData) {
    await prisma.list.create({
      data: item,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
