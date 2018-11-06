import express from 'express';
import moment from 'moment';

import {quizQuestions} from '../src/api/questionnaire';

const app = express();
const port = 3001;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Personality test listening on port ${port}`);
});

// API end point load the questions
app.get("/questions", function (req, res) {
  res.status(200).send(quizQuestions);
});