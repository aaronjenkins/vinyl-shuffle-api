const { Client } = require('@notionhq/client');

exports.handler = async (event) => {
    const notion = new Client({
        auth: process.env.NOTION_TOKEN,
    });
    let rawNotionData = await notion.databases.query({
        database_id: process.env.DATABASEID,
    });
    let albums = rawNotionData["results"]
    let album = albums[Math.floor(Math.random() * albums.length)]
    const response = {
        statusCode: 200,
        body: album,
    };
    return response;
};
