
const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config({ path: './.env' });

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully connected to database: ' + process.env.DB_DATABASE + ' as ' + process.env.DB_USER + '@' + process.env.DB_HOST + ':' + process.env.DB_PORT);
    }
});

app.get('/', (req, res) => {
    console.log('GET ' + req.url);
    res.send('Hello World!');
});


app.post('/recruit/id', (req, res) => {
    console.log('POST ' + req.url + '    ' + JSON.stringify(req.body));
    if (req.body === undefined || req.body['id'] === undefined || req.body['id'] === NaN) {
        // does not exist, or is not a number
        res.status(400).send({ 'message': 'id is required and must be a number' });
    } else {
        // id is a number
        const id = req.body['id'];
        const { responseGetRecruitById } = require('./GetRecruit.js');
        responseGetRecruitById(db, req, res, id);
    }
});

app.post('/recruit/u_name', (req, res) => {
    console.log('POST ' + req.url + '    ' + JSON.stringify(req.body));
    if (req.body === undefined || req.body['u_name'] === undefined) {
        // does not exist
        res.status(400).send({ 'message': 'u_name is required' });
    } else {
        const u_name = req.body['u_name'];
        const { responseGetRecruitByUName } = require('./GetRecruit.js');
        responseGetRecruitByUName(db, req, res, u_name);
    }
})

app.get('/recruits', (req, res) => {
    console.log('GET ' + req.url);
    const { responseGetAllRecruits } = require('./GetRecruit.js');
    responseGetAllRecruits(db, req, res);
})

app.put('/recruit', (req, res) => {
    console.log('PUT ' + req.url + '    ' + JSON.stringify(req.body));
    const { responsePutRecruit } = require('./PutRecruit.js');
    responsePutRecruit(db, req, res);
});

app.patch('/recruit', (req, res) => {
    console.log('PATCH ' + req.url + '    ' + JSON.stringify(req.body));
    const { responsePatchRecruit } = require('./PatchRecruit.js');
    responsePatchRecruit(db, req, res);
});

app.put('/recruiter', (req, res) => {
    console.log('PUT ' + req.url + '    ' + JSON.stringify(req.body));
    const { responsePutRecruiter } = require('./PutRecruiter.js');
    responsePutRecruiter(db, req, res);
})

app.post('/job_posting/id', (req, res) => {
    console.log('POST ' + req.url + '    ' + JSON.stringify(req.body));
    const { responseGetJobPostingById } = require('./GetJobPosting.js');
    responseGetJobPostingById(db, req, res);
});

app.post('/job_postings', (req, res) => {
    console.log('POST ' + req.url + '    ' + JSON.stringify(req.body));
    const { responseGetAllJobPostings } = require('./GetJobPosting.js');
    responseGetAllJobPostings(db, req, res);
});

app.post('/job_posting/filter', (req, res) => {
    console.log('POST ' + req.url + '    ' + JSON.stringify(req.body));
    const { responseGetFilteredJobPostings } = require('./GetJobPosting.js');
    responseGetFilteredJobPostings(db, req, res);
});

app.post('/company/id', (req, res) => {
    console.log('POST ' + req.url + '    ' + JSON.stringify(req.body));
    const { responseGetCompanyById } = require('./GetCompany.js');
    responseGetCompanyById(db, req, res);
});

app.put('/job_application/recruitapply', (req, res) => {
    console.log('PUT ' + req.url + '    ' + JSON.stringify(req.body));
    const { responsePutJobApplicationRecruitApply } = require('./JobApplication.js');
    responsePutJobApplicationRecruitApply(db, req, res);
})

app.post('/professions', (req, res) => {
    console.log('POST ' + req.url + '    ' + JSON.stringify(req.body));
    const { responseGetAllProfessions } = require('./GetProfessions.js');
    responseGetAllProfessions(db, req, res);
})

app.post('/company/job_postings', (req, res) => {
    console.log('POST ' + req.url + '    ' + JSON.stringify(req.body));
    const { responseGetJobPostingsByCompanyId } = require('./GetJobPosting.js');
    responseGetJobPostingsByCompanyId(db, req, res);
});

app.patch('/recruiter', (req, res) => {
    console.log('PATCH ' + req.url + '    ' + JSON.stringify(req.body));
    const { responsePatchRecruiter } = require('./PatchRecruiter.js');
    responsePatchRecruiter(db, req, res);
});

app.post('/companies', (req, res) => {
    console.log('POST ' + req.url + '    ' + JSON.stringify(req.body));
    const { responseGetAllCompanies } = require('./GetCompany.js');
    responseGetAllCompanies(db, req, res);
})

app.post('/u_names', (req, res) => {
    console.log('POST ' + req.url + '   ' + JSON.stringify(req.body));
    const {responseGetAllUNames} = require('./GetUNames.js');
    responseGetAllUNames(db, req, res);
})

app.post('/login', (req, res) => {
    console.log('POST ' + req.url + '   ' + JSON.stringify(req.body));
    const {responseLogin} = require('./Login.js');
    responseLogin(db, req, res);
});

app.post('/job_posting/recruit_id', (req, res) => {
    console.log('POST ' + req.url + '   ' + JSON.stringify(req.body));
    const {responseGetJobApplicationsByRecruitId} = require('./JobApplication.js');
    responseGetJobApplicationsByRecruitId(db, req, res);
});

app.post('/recruiter/u_name', (req, res) => {
    console.log('POST ' + req.url + '   ' + JSON.stringify(req.body));
    const {responseGetRecruiterByUName} = require('./GetRecruiter.js');
    responseGetRecruiterByUName(db, req, res);
});

app.post('/job_application/job_postingid', (req, res) => {
    console.log('POST ' + req.url + '   ' + JSON.stringify(req.body));
    const {resposneGetRecruitsByJobPostingId} = require('./JobApplication.js');
    resposneGetRecruitsByJobPostingId(db, req, res);
})

const server = app.listen(3001, '0.0.0.0', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`API listening at http://${host}:${port}`);
});