import sqlite3 from "sqlite3";

export const db = new sqlite3.Database('./tasks.db', (err)=>{

    if (err) {
        throw err.message;
    }
    console.log("Connected to the Tasks Database");
});

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        notices(
            id_notice INTEGER PRIMARY KEY,
            title TEXT NOT NULL,
            date TEXT NOT NULL,
            summary TEXT NOT NULL,
            content VARCHAR(1000) NOT NULL,
        )
`);


