module.exports = function (context, req) {
  const { Connection, Request } = require("tedious");

  const config = {
    authentication: {
      options: {
        userName: process.env["DB_USERNAME"],
        password: process.env["DB_PASSWORD"],
      },
      type: "default",
    },
    server: "coffee-team-sql-server.database.windows.net",
    options: {
      database: "coffee-team-db",
      encrypt: true,
    },
  };

  const connection = new Connection(config);
  connection.on("connect", err => {
    if (err) {
      context.log(err.message);
    } else {
      queryDatabase();
    }
  });

  function queryDatabase() {
    let result = {};

    const query = new Request(
      'SELECT * FROM test;',
      (err, rowCount) => {
        if (err) {
          console.error("ERROR: " + err.message);
        } else {
          console.log(rowCount + ' row(s) returned.');
        }

        connection.close();
      }
    );

    query.on("row", columns => {
      let id;
      
      columns.forEach(column => {
        console.log(`${column.metadata.colName}: ${column.value}`);
        let colName = column.metadata.colName;
        let value = column.value;
        if (colName === "id") {
          id = value;
          result[id] = {}
        } else {
          result[id][colName] = value;
        }
      });
    });

    query.on("requestCompleted", () => {
      context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(result),
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:4200',
        },
      };

      context.done();
    });

    connection.execSql(query);
  }
}