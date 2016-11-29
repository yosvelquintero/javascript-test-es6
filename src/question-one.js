/**
 * Question one
 * 
 * @class QuestionOne
 */
export default class QuestionOne {
  
  /**
   * Get SQL code
   * 
   * @returns
   * 
   * @memberOf QuestionOne
   */
  getSqlCode() {
    return `<pre><code>
  -- Crete database sqltest:
   CREATE DATABASE sqltest;
   
  -- Use sqltest:
   USE sqltest;

  -- Create table students:
  CREATE TABLE students(
    id integer, 
    name varchar(60), 
    address varchar(200)
  );

  -- Create table applications:
  CREATE TABLE applications(
    id integer, 
    student_id integer, 
    score float
  );

  -- Inserts into students:
  INSERT INTO students VALUES(1, 'Javier', 'Carrer Diputacio, 379');
  INSERT INTO students VALUES(2, 'Rolando', 'Carrer del Rosselló, 290');
  INSERT INTO students VALUES(3, 'Yosvel', 'Carrer de Sicília, 105');
  INSERT INTO students VALUES(4, 'Anna', 'Carrer del Consell de Cent, 336');
  INSERT INTO students VALUES(5, 'Valeria', 'Carrer de Nàpols, 97');
  INSERT INTO students VALUES(6, 'Frank', 'Carrer de Ali Bei, 65');

  -- Inserts into applications:
  INSERT INTO applications VALUES(1, 2, 88.6);
  INSERT INTO applications VALUES(2, 2, 68);
  INSERT INTO applications VALUES(3, 3, 100);
  INSERT INTO applications VALUES(4, 3, 98);
  INSERT INTO applications VALUES(5, 5, 70);
  INSERT INTO applications VALUES(6, 6, 90.5);

  -- Query:
  SELECT COUNT(id), name FROM (
    SELECT applications.id, students.name
      FROM students
      LEFT JOIN applications on students.id = applications.student_id
  ) AS s
  GROUP BY s.name
  ORDER BY count(s.id) DESC, s.name;

  -- Expected output:
  -- 2|Rolando
  -- 2|Yosvel
  -- 1|Frank
  -- 1|Valeria
  -- 0|Anna
  -- 0|Javier
</code></pre>`;
  }
}
