const { Client } = require('@notionhq/client');
const dotenv = require('dotenv');
dotenv.config();

exports.handler = async (event) => {
    const notion = new Client({
        auth: process.env.NOTION_TOKEN,
    });
    let page = await notion.databases.query({
        database_id: process.env.DATABASEID,
    });
    const response = {
        statusCode: 200,
        body: JSON.stringify(page),
    };
    return response;
};
