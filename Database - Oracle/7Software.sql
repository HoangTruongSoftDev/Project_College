--script to create Software Experts database
-- revised 09/01/2022 Huu Con Nguyen
connect sys/sys as sysdba;
DROP USER des04 CASCADE;
CREATE USER des04 IDENTIFIED BY des04;
GRANT connect , resource, create view TO des04;
--ALTER USER nora03 QUOTA 100M ON USERS;
connect des04/des04;

DROP TABLE evaluation CASCADE CONSTRAINTS;
DROP TABLE project_consultant CASCADE CONSTRAINTS;
DROP TABLE project_skill CASCADE CONSTRAINTS;
DROP TABLE project CASCADE CONSTRAINTS;
DROP TABLE client CASCADE CONSTRAINTS;
DROP TABLE consultant_skill CASCADE CONSTRAINTS;
DROP TABLE skill CASCADE CONSTRAINTS;
DROP TABLE consultant CASCADE CONSTRAINTS;

CREATE TABLE consultant
(c_id NUMBER(6),
c_last VARCHAR2(20),
c_first VARCHAR2(20),
c_mi CHAR(1),
c_add VARCHAR2(30),
c_city VARCHAR2(20),
c_state CHAR(2),
c_zip VARCHAR2(10),
c_phone VARCHAR2(15),
c_email VARCHAR2(30), 
CONSTRAINT consultant_c_id_pk PRIMARY KEY (c_id));

CREATE TABLE skill
(skill_id NUMBER(3),
skill_description VARCHAR2(50),
CONSTRAINT skill_skill_id_pk PRIMARY KEY (skill_id));

CREATE TABLE consultant_skill
(c_id NUMBER(6),
skill_id NUMBER(3),
certification VARCHAR2(8),
CONSTRAINT consultant_skill_pk PRIMARY KEY (c_id, skill_id),
CONSTRAINT consultant_skill_c_id_fk FOREIGN KEY (c_id) REFERENCES consultant(c_id),
CONSTRAINT consultant_skill_skill_id_fk FOREIGN KEY (skill_id) REFERENCES skill(skill_id));

CREATE TABLE client
(client_id NUMBER(6),
client_name VARCHAR2(30),
contact_last VARCHAR2(30),
contact_first VARCHAR2(30),
contact_phone VARCHAR2(15),
CONSTRAINT client_client_id_pk PRIMARY KEY (client_id));

CREATE TABLE project
(p_id NUMBER(6),
project_name VARCHAR2(30),
client_id NUMBER(6),
mgr_id NUMBER(6),
parent_p_id NUMBER(6),
CONSTRAINT project_pid_pk PRIMARY KEY (p_id),
CONSTRAINT project_client_id_fk FOREIGN KEY (client_id) REFERENCES client(client_id),
CONSTRAINT project_mgr_id_fk FOREIGN KEY (mgr_id) REFERENCES consultant(c_id));

ALTER TABLE project
ADD CONSTRAINT project_parent_pid_fk FOREIGN KEY (parent_p_id) REFERENCES project(p_id);

CREATE TABLE project_skill
(p_id NUMBER(6),
skill_id NUMBER(3),
CONSTRAINT project_skill_pk PRIMARY KEY (p_id, skill_id),
CONSTRAINT project_skill_pid_fk FOREIGN KEY (p_id) REFERENCES project(p_id),
CONSTRAINT project_skill_skill_id_fk FOREIGN KEY (skill_id) REFERENCES skill(skill_id));

CREATE TABLE project_consultant
(p_id NUMBER(6),
c_id NUMBER(6),
roll_on_date DATE,
roll_off_date DATE,
elapsed_time VARCHAR2(30),
CONSTRAINT project_consultant_pk PRIMARY KEY (p_id, c_id),
CONSTRAINT project_consultant_p_id_fk FOREIGN KEY (p_id) REFERENCES project(p_id),
CONSTRAINT project_consultant_c_id_fk FOREIGN KEY (c_id) REFERENCES consultant(c_id));

CREATE TABLE evaluation
(e_id NUMBER(8),
e_date DATE,
p_id NUMBER(6),
evaluator_id NUMBER(6),
evaluatee_id NUMBER(6),
score NUMBER(3),
comments VARCHAR2(300),
CONSTRAINT evaluation_e_id_pk PRIMARY KEY (e_id),
CONSTRAINT evaluation_p_id_fk FOREIGN KEY (p_id) REFERENCES project(p_id),
CONSTRAINT evaluation_evaluator_id_fk FOREIGN KEY (evaluator_id) REFERENCES consultant(c_id),
CONSTRAINT evaluation_evaluatee_id_fk FOREIGN KEY (evaluatee_id) REFERENCES consultant(c_id));

--insert values into CONSULTANT
INSERT INTO consultant VALUES
(100, 'Myers', 'Mark', 'F', '1383 Alexander Ave.', 'Eau Claire', 'WI', '54703', '7155559652', 'mmyers@swexpert.com');

INSERT INTO consultant VALUES
(101, 'Hernandez', 'Sheila', 'R', '3227 Brian Street', 'Eau Claire', 'WI', '54702', '7155550282', 'shernandez@earthware.com');

INSERT INTO consultant VALUES
(102, 'Zhang', 'Brian', NULL, '2227 Calumet Place', 'Altoona', 'WI', '54720', '7155558383', 'zhang@swexpert.com');

INSERT INTO consultant VALUES
(103, 'Carlson', 'Sarah', 'J', '1334 Water Street', 'Eau Claire', 'WI', '54703', '7155558008', 'carlsons@swexpert.com');

INSERT INTO consultant VALUES
(104, 'Courtlandt', 'Paul', 'R', '1911 Pine Drive', 'Eau Claire', 'WI', '54701', '7155555225', 'courtlpr@yamail.com');

INSERT INTO consultant VALUES
(105, 'Park', 'Janet', 'S', '2333 157th Street', 'Chippewa Falls', 'WI', '54712', '7155554944', 'jpark@swexpert.com');

--insert values into SKILL
INSERT INTO skill VALUES
(1, 'VB .NET Programming');

INSERT INTO skill VALUES
(2, 'COBOL Programming');

INSERT INTO skill VALUES
(3, 'Java Programming');

INSERT INTO skill VALUES
(4, 'Project Management');

INSERT INTO skill VALUES
(5, 'Web Application Programming');

INSERT INTO skill VALUES
(6, 'Oracle Developer Programming');

INSERT INTO skill VALUES
(7, 'Oracle Database Administration');

INSERT INTO skill VALUES
(8, 'Windows NT/2000 Network Administration');

INSERT INTO skill VALUES
(9, 'Windows XP Network Administration');

--insert values into CONSULTANT_SKILL
INSERT INTO consultant_skill VALUES
(100, 1, 'Y');

INSERT INTO consultant_skill VALUES
(100, 3, 'N');

INSERT INTO consultant_skill VALUES
(100, 6, 'Y');

INSERT INTO consultant_skill VALUES
(101, 4, 'N');

INSERT INTO consultant_skill VALUES
(101, 5, 'N');

INSERT INTO consultant_skill VALUES
(102, 7, 'Y');

INSERT INTO consultant_skill VALUES
(103, 1, 'Y');

INSERT INTO consultant_skill VALUES
(103, 6, 'Y');

INSERT INTO consultant_skill VALUES
(103, 8, 'Y');

INSERT INTO consultant_skill VALUES
(103, 9, 'Y');

INSERT INTO consultant_skill VALUES
(104, 8, 'N');

INSERT INTO consultant_skill VALUES
(104, 9, 'Y');

INSERT INTO consultant_skill VALUES
(105, 2, 'N');

INSERT INTO consultant_skill VALUES
(105, 3, 'N');

INSERT INTO consultant_skill VALUES
(105, 4, 'Y');

--insert into CLIENT
INSERT INTO client VALUES (1, 'Crisco Systems', 'Martin', 'Andrew', '5215557220');
INSERT INTO client VALUES (2, 'Supreme Data Corporation', 'Martinez', 'Michelle', '5205559821');
INSERT INTO client VALUES (3, 'Lucid Technologies', 'Brown', 'Jack', '7155552311');
INSERT INTO client VALUES (4, 'Morningstar Bank', 'Wright', 'Linda', '9215553320');
INSERT INTO client VALUES (5, 'Maverick Petroleum', 'Miller', 'Tom', '4085559822');
INSERT INTO client VALUES (6, 'Birchwood Mall', 'Brenner', 'Nicole', '7155550828');

--insert into PROJECT
INSERT INTO project VALUES
(1, 'Hardware Support Intranet', 2, 105, NULL);

INSERT INTO project VALUES
(2, 'Hardware Support Interface', 2, 103, 1);

INSERT INTO project VALUES
(3, 'Hardware Support Database', 2, 102, 1);

INSERT INTO project VALUES
(4, 'Teller Support System', 4, 105, NULL);

INSERT INTO project VALUES
(5, 'Internet Advertising', 6, 105, NULL);

INSERT INTO project VALUES
(6, 'Network Design', 6, 104, 5);

INSERT INTO project VALUES
(7, 'Exploration Database', 5, 102, NULL);

--insert into PROJECT_SKILL
INSERT INTO project_skill VALUES (1, 8);
INSERT INTO project_skill VALUES (1, 9);
INSERT INTO project_skill VALUES (2, 3);
INSERT INTO project_skill VALUES (3, 6);
INSERT INTO project_skill VALUES (3, 7);
INSERT INTO project_skill VALUES (4, 2);
INSERT INTO project_skill VALUES (4, 7);
INSERT INTO project_skill VALUES (5, 5);
INSERT INTO project_skill VALUES (5, 9);
INSERT INTO project_skill VALUES (6, 9);
INSERT INTO project_skill VALUES (7, 6);
INSERT INTO project_skill VALUES (7, 7);

--insert into PROJECT_CONSULTANT
INSERT INTO project_consultant VALUES
(1, 101, TO_DATE('06/15/2006', 'MM/DD/YYYY'), TO_DATE('12/15/2006', 'MM/DD/YYYY'), '92 00:00:00.00');

INSERT INTO project_consultant VALUES
(1, 104, TO_DATE('01/05/2006', 'MM/DD/YYYY'), TO_DATE('12/15/2006', 'MM/DD/YYYY'), '126 00:00:00.00');

INSERT INTO project_consultant VALUES
(1, 103, TO_DATE('01/05/2006', 'MM/DD/YYYY'), TO_DATE('06/05/2006', 'MM/DD/YYYY'), '5 00:00:00.00');

INSERT INTO project_consultant VALUES
(1, 105, TO_DATE('01/05/2006', 'MM/DD/YYYY'), TO_DATE('12/15/2006', 'MM/DD/YYYY'), '45 00:00:00.00');

INSERT INTO project_consultant VALUES
(2, 105, TO_DATE('07/17/2006', 'MM/DD/YYYY'), TO_DATE('09/17/2006', 'MM/DD/YYYY'), '25 00:00:00.00');

INSERT INTO project_consultant VALUES
(2, 100, TO_DATE('07/17/2006', 'MM/DD/YYYY'), TO_DATE('09/17/2006', 'MM/DD/YYYY'), '0 00:00:00.00');

INSERT INTO project_consultant VALUES
(3, 103, TO_DATE('09/15/2006', 'MM/DD/YYYY'), TO_DATE('03/15/2007', 'MM/DD/YYYY'), '125 00:00:00.00');

INSERT INTO project_consultant VALUES
(3, 104, TO_DATE('10/15/2006', 'MM/DD/YYYY'), TO_DATE('12/15/2006', 'MM/DD/YYYY'), '50 00:00:00.00');

INSERT INTO project_consultant VALUES
(4, 105, TO_DATE('06/05/2006', 'MM/DD/YYYY'), TO_DATE('06/05/2007', 'MM/DD/YYYY'), '25 00:00:00.00');

INSERT INTO project_consultant VALUES
(4, 104, TO_DATE('06/15/2006', 'MM/DD/YYYY'), TO_DATE('12/15/2006', 'MM/DD/YYYY'), '53 00:00:00.00');

INSERT INTO project_consultant VALUES
(4, 102, TO_DATE('07/15/2006', 'MM/DD/YYYY'), TO_DATE('12/15/2006', 'MM/DD/YYYY'), '30 00:00:00.00');

INSERT INTO project_consultant VALUES
(5, 105, TO_DATE('09/19/2006', 'MM/DD/YYYY'), TO_DATE('03/19/2007', 'MM/DD/YYYY'), '15 00:00:00.00');

INSERT INTO project_consultant VALUES
(5, 103, TO_DATE('09/19/2006', 'MM/DD/YYYY'), TO_DATE('03/19/2007', 'MM/DD/YYYY'), '15 00:00:00.00');

INSERT INTO project_consultant VALUES
(6, 103, TO_DATE('09/19/2006', 'MM/DD/YYYY'), TO_DATE('03/19/2007', 'MM/DD/YYYY'), '5 00:00:00.00');

INSERT INTO project_consultant VALUES
(6, 104, TO_DATE('09/19/2006', 'MM/DD/YYYY'), TO_DATE('03/19/2007', 'MM/DD/YYYY'), '10 00:00:00.00');

INSERT INTO project_consultant VALUES
(7, 102, TO_DATE('05/20/2006', 'MM/DD/YYYY'), TO_DATE('12/20/2006', 'MM/DD/YYYY'), '55 00:00:00.00');

INSERT INTO project_consultant VALUES
(7, 100, TO_DATE('05/25/2006', 'MM/DD/YYYY'), TO_DATE('12/20/2006', 'MM/DD/YYYY'), '100 00:00:00.00');

--insert into EVALUATION
INSERT INTO evaluation VALUES
(100, TO_DATE('01/07/2007', 'MM/DD/YYYY'), 1, 105, 101, 90, NULL);

INSERT INTO evaluation VALUES
(101, TO_DATE('01/07/2007', 'MM/DD/YYYY'), 1, 105, 104, 85, NULL);

INSERT INTO evaluation VALUES
(102, TO_DATE('01/08/2007', 'MM/DD/YYYY'), 1, 105, 103, 90, NULL);

INSERT INTO evaluation VALUES
(103, TO_DATE('12/20/2006', 'MM/DD/YYYY'), 1, 103, 105, 100, NULL);

INSERT INTO evaluation VALUES
(104, TO_DATE('12/29/2006', 'MM/DD/YYYY'), 1, 104, 105, 75, NULL);

INSERT INTO evaluation VALUES
(105, TO_DATE('01/15/2007', 'MM/DD/YYYY'), 1, 101, 105, 90, NULL);

COMMIT;















































