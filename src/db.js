import sql from 'mssql';

const config = {
    server: 'localhost', // Data Source
    database: '2024_ERP', // Initial Catalog
    options: {
        encrypt: true, // Encrypt
        trustServerCertificate: true, // TrustServerCertificate
        // Integrated security settings:
        trustedConnection: true, // Integrated Security
        enableArithAbort: true
    }
};

// Function to get data
async function getData() {
    try {
        // Ensure that SQL Server driver knows to expect Windows Authentication
        const pool = await sql.connect(config);

        const result = await pool.request().query('SELECT * FROM 2024_ERP');
        return result.recordset;
    } catch (err) {
        console.error('SQL error', err);
        throw err;
    }
}

export { getData };
