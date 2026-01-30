const { Client } = require("@notionhq/client");

console.log("SCRIPT START");

if (!process.env.NOTION_TOKEN) {
  console.error("NO NOTION_TOKEN");
  process.exit(1);
}

if (!process.env.NOTION_DB_ID) {
  console.error("NO NOTION_DB_ID");
  process.exit(1);
}

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.NOTION_DB_ID;

async function run() {
  console.log("DB ID:", DATABASE_ID);

  const response = await notion.pages.create({
    parent: { database_id: DATABASE_ID },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: "DEBUG TASK FROM SCRIPT",
            },
          },
        ],
      },
    },
  });

  console.log("SUCCESS:", response.id);
}

run().catch((err) => {
  console.error("NOTION ERROR:");
  console.error(err.body || err);
});
