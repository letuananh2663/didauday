import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Phố cổ Hội An",
        imageSrc: "/icon.svg",
      },
      {
        id: 2,
        title: "Thánh địa Mỹ Sơn",
        imageSrc: "/icon.svg",
      },
      {
        id: 3,
        title: "Cố đô Huế",
        imageSrc: "/icon.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: "Introduction",
      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: "Something else",
      },
      {
        id: 3,
        unitId: 1,
        order: 2,
        title: "Something else",
      },
      {
        id: 4,
        unitId: 1,
        order: 2,
        title: "Something else",
      },
      {
        id: 5,
        unitId: 1,
        order: 2,
        title: "Something else",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: "Phố cổ Hội An thuộc tỉnh",
      },
      {
        id: 2,
        lessonId: 1,
        type: "SELECT",
        order: 2,
        question:
          "Phố cổ Hội An là cảng thị truyền thống Đông Nam Á duy nhất ở Việt Nam",
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        order: 3,
        question:
          "Phố cổ Hội An được công nhận là một di sản thế giới UNESCO vào năm",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: "/icon.svg",
        correct: false,
        text: "Quảng Ninh",
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "/icon.svg",
        correct: false,
        text: "Quảng Ngải",
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: "/icon.svg",
        correct: true,
        text: "Quảng Nam",
      },
      {
        id: 4,
        challengeId: 1,
        imageSrc: "/icon.svg",
        correct: false,
        text: "Thừa Thiên Huế",
      },
      {
        id: 5,
        challengeId: 2,
        imageSrc: "/icon.svg",
        correct: true,
        text: "Đúng",
      },
      {
        id: 6,
        challengeId: 2,
        imageSrc: "/icon.svg",
        correct: false,
        text: "Sai",
      },
      {
        id: 7,
        challengeId: 3,
        imageSrc: "/icon.svg",
        correct: false,
        text: "1889",
      },
      {
        id: 8,
        challengeId: 3,
        imageSrc: "/icon.svg",
        correct: true,
        text: "1999",
      },
      {
        id: 9,
        challengeId: 3,
        imageSrc: "/icon.svg",
        correct: false,
        text: "1989",
      },
      {
        id: 10,
        challengeId: 3,
        imageSrc: "/icon.svg",
        correct: false,
        text: "1988",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

void main();
