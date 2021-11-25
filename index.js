const { Client } = require('@notionhq/client');

exports.handler = async (event) => {
    const notion = new Client({
        auth: process.env.NOTION_TOKEN,
    });
    let page = await notion.databases.query({
        database_id: process.env.DATABASEID,
    });
    const response = {
        statusCode: 200,
        body: page,
    };
    return response;
};
