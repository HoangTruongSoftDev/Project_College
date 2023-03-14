-- script to create NORTHWOODS database
-- revised 09/01/2022 Huu Con Nguyen
connect sys/sys as sysdba;
DROP USER des03 CASCADE;
CREATE USER des03 IDENTIFIED BY des03;
GRANT connect , resource, create view TO des03;
connect des03/des03;

DROP TABLE enrollment CASCADE CONSTRAINTS;
DROP TABLE course_section CASCADE CONSTRAINTS;
DROP TABLE term CASCADE CONSTRAINTS;
DROP TABLE course CASCADE CONSTRAINTS;
DROP TABLE student CASCADE CONSTRAINTS;
DROP TABLE faculty CASCADE CONSTRAINTS;
DROP TABLE location CASCADE CONSTRAINTS;

CREATE TABLE LOCATION
(loc_id NUMBER(6),
bldg_code VARCHAR2(10),
room VARCHAR2(6),
capacity NUMBER(5), 
CONSTRAINT location_loc_id_pk PRIMARY KEY (loc_id));

CREATE TABLE faculty
(f_id NUMBER(6),
f_last VARCHAR2(30),
f_first VARCHAR2(30),
f_mi CHAR(1),
loc_id NUMBER(5),
f_phone VARCHAR2(10),
f_rank VARCHAR2(8),
f_pin NUMBER(4),
f_image BLOB, 
CONSTRAINT faculty_f_id_pk PRIMARY KEY(f_id),
CONSTRAINT faculty_loc_id_fk FOREIGN KEY (loc_id) REFERENCES location(loc_id));

CREATE TABLE student
(s_id NUMBER(6),
s_last VARCHAR2(30),
s_first VARCHAR2(30),
s_mi CHAR(1),
s_address VARCHAR2(25),
s_city VARCHAR2(20),
s_state CHAR(2),
s_zip VARCHAR2(10),
s_phone VARCHAR2(10),
s_class CHAR(2),
s_dob DATE,
s_pin NUMBER(4),
f_id NUMBER(6),
time_enrolled VARCHAR2(30),
CONSTRAINT student_s_id_pk PRIMARY KEY (s_id),
CONSTRAINT student_f_id_fk FOREIGN KEY (f_id) REFERENCES faculty(f_id));

CREATE TABLE TERM
(term_id NUMBER(6),
term_desc VARCHAR2(20),
status VARCHAR2(20),
CONSTRAINT term_term_id_pk PRIMARY KEY (term_id),
CONSTRAINT term_status_cc CHECK ((status = 'OPEN') OR (status = 'CLOSED')));

CREATE TABLE COURSE
(course_id NUMBER(6),
call_id VARCHAR2(10),
course_name VARCHAR2(25),
credits NUMBER(2),
CONSTRAINT course_course_id_pk PRIMARY KEY(course_id));

CREATE TABLE COURSE_SECTION
(c_sec_id NUMBER(6),
course_id NUMBER(6) CONSTRAINT course_section_courseid_nn NOT NULL,
term_id NUMBER(6) CONSTRAINT course_section_termid_nn NOT NULL,
sec_num NUMBER(2) CONSTRAINT course_section_secnum_nn NOT NULL,
f_id NUMBER(5),
c_sec_day VARCHAR2(10),
c_sec_time DATE,
c_sec_duration VARCHAR2(30),
loc_id NUMBER(6),
max_enrl NUMBER(4) CONSTRAINT course_section_maxenrl_nn NOT NULL,
CONSTRAINT course_section_csec_id_pk PRIMARY KEY (c_sec_id),
CONSTRAINT course_section_cid_fk FOREIGN KEY (course_id) REFERENCES course(course_id), 	
CONSTRAINT course_section_loc_id_fk FOREIGN KEY (loc_id) REFERENCES location(loc_id),
CONSTRAINT course_section_termid_fk FOREIGN KEY (term_id) REFERENCES term(term_id),
CONSTRAINT course_section_fid_fk FOREIGN KEY (f_id) REFERENCES faculty(f_id));

CREATE TABLE ENROLLMENT
(s_id NUMBER(6),
c_sec_id NUMBER(6),
grade CHAR(1),
CONSTRAINT enrollment_pk PRIMARY KEY (s_id, c_sec_id),
CONSTRAINT enrollment_sid_fk FOREIGN KEY (s_id) REFERENCES student(s_id),
CONSTRAINT enrollment_csecid_fk FOREIGN KEY (c_sec_id) REFERENCES course_section (c_sec_id));



---- inserting into LOCATION table
INSERT INTO location VALUES
(1, 'CR', '101', 150);

INSERT INTO location VALUES
(2, 'CR', '202', 40);

INSERT INTO location VALUES
(3, 'CR', '103', 35);

INSERT INTO location VALUES
(4, 'CR', '105', 35);

INSERT INTO location VALUES
(5, 'BUS', '105', 42);

INSERT INTO location VALUES
(6, 'BUS', '404', 35);

INSERT INTO location VALUES
(7, 'BUS', '421', 35);

INSERT INTO location VALUES
(8, 'BUS', '211', 55);

INSERT INTO location VALUES
(9, 'BUS', '424', 1);

INSERT INTO location VALUES
(10, 'BUS', '402', 1);

INSERT INTO location VALUES
(11, 'BUS', '433', 1);

INSERT INTO location VALUES
(12, 'LIB', '217', 2);

INSERT INTO location VALUES
(13, 'LIB', '222', 1);


--- inserting records into FACULTY
INSERT INTO faculty VALUES
(1, 'Cox', 'Kim', 'J', 9, '7155551234', 'ASSO', 1181, EMPTY_BLOB());

INSERT INTO faculty VALUES
(2, 'Blanchard', 'John', 'R', 10, '7155559087', 'FULL', 1075, EMPTY_BLOB());

INSERT INTO faculty VALUES
(3, 'Williams', 'Jerry', 'F', 12, '7155555412', 'ASST', 8531, EMPTY_BLOB());

INSERT INTO faculty VALUES
(4, 'Sheng', 'Laura', 'M', 11, '7155556409', 'INST', 1690, EMPTY_BLOB());

INSERT INTO faculty VALUES
(5, 'Brown', 'Philip', 'E', 13, '7155556082', 'ASSO', 9899, EMPTY_BLOB());

--- inserting records into STUDENT
INSERT INTO student VALUES
(1, 'Miller', 'Sarah', 'M', '144 Windridge Blvd.', 'Eau Claire', 
'WI', '54703', '7155559876', 'SR', TO_DATE('07/14/1985', 'MM/DD/YYYY'), 8891, 1, '3-2');

INSERT INTO student VALUES
(2, 'Umato', 'Brian', 'D', '454 St. John''s Place', 'Eau Claire', 
'WI', '54702', '7155552345', 'SR', TO_DATE('08/19/1985', 'MM/DD/YYYY'), 1230, 1, '4-2');

INSERT INTO student VALUES
(3, 'Black', 'Daniel', NULL, '8921 Circle Drive', 'Bloomer', 
'WI', '54715', '7155553907', 'JR', TO_DATE('10/10/1982', 'MM/DD/YYYY'), 1613, 1, '3-0');

INSERT INTO student VALUES
(4, 'Mobley', 'Amanda', 'J', '1716 Summit St.', 'Eau Claire', 
'WI', '54703', '7155556902', 'SO', TO_DATE('09/24/1986', 'MM/DD/YYYY'), 1841, 2, '2-2');

INSERT INTO student VALUES
(5, 'Sanchez', 'Ruben', 'R', '1780 Samantha Court', 'Eau Claire', 
'WI', '54701', '7155558899', 'SO', TO_DATE('11/20/1986', 'MM/DD/YYYY'), 4420, 4, '1-11');

INSERT INTO student VALUES
(6, 'Connoly', 'Michael', 'S', '1818 Silver Street', 'Elk Mound', 
'WI', '54712', '7155554944', 'FR', TO_DATE('12/4/1986', 'MM/DD/YYYY'), 9188, 3, '0-4');

--- inserting records into TERM
INSERT INTO term VALUES
(1, 'Fall 2005', 'CLOSED');

INSERT INTO term VALUES
(2, 'Spring 2006', 'CLOSED');

INSERT INTO term VALUES
(3, 'Summer 2006', 'CLOSED');

INSERT INTO term VALUES
(4, 'Fall 2006', 'CLOSED');

INSERT INTO term VALUES
(5, 'Spring 2007', 'CLOSED');

INSERT INTO term VALUES
(6, 'Summer 2007', 'OPEN');

--- inserting records into COURSE
INSERT INTO course VALUES
(1, 'MIS 101', 'Intro. to Info. Systems', 3);

INSERT INTO course VALUES
(2, 'MIS 301', 'Systems Analysis', 3);

INSERT INTO course VALUES
(3, 'MIS 441', 'Database Management', 3);

INSERT INTO course VALUES
(4, 'CS 155', 'Programming in C++', 3);

INSERT INTO course VALUES
(5, 'MIS 451', 'Web-Based Systems', 3);

--- inserting records into COURSE_SECTION
INSERT INTO course_section VALUES
(1, 1, 4, 1, 2, 'MWF', TO_DATE('10:00 AM', 'HH:MI AM'), '0 00:00:50.00', 1, 140);

INSERT INTO course_section VALUES
(2, 1, 4, 2, 3, 'TR', TO_DATE('09:30 AM', 'HH:MI AM'), '0 00:01:15.00', 7, 35);

INSERT INTO course_section VALUES
(3, 1, 4, 3, 3, 'MWF', TO_DATE('08:00 AM', 'HH:MI AM'), '0 00:00:50.00', 2, 35);

INSERT INTO course_section VALUES
(4, 2, 4, 1, 4, 'TR', TO_DATE('11:00 AM', 'HH:MI AM'), '0 00:01:15.00', 6, 35);

INSERT INTO course_section VALUES
(5, 2, 5, 2, 4, 'TR', TO_DATE('02:00 PM', 'HH:MI PM'), '0 00:01:15.00', 6, 35);

INSERT INTO course_section VALUES
(6, 3, 5, 1, 1, 'MWF', TO_DATE('09:00 AM', 'HH:MI AM'), '0 00:00:50.00', 5, 30);

INSERT INTO course_section VALUES
(7, 3, 5, 2, 1, 'MWF', TO_DATE('10:00 AM', 'HH:MI AM'), '0 00:00:50.00', 5, 30);

INSERT INTO course_section VALUES
(8, 4, 5, 1, 5, 'TR', TO_DATE('08:00 AM', 'HH:MI AM'), '0 00:01:15.00', 3, 35);

INSERT INTO course_section VALUES
(9, 5, 5, 1, 2, 'MWF', TO_DATE('02:00 PM', 'HH:MI PM'), '0 00:00:50.00', 5, 35);

INSERT INTO course_section VALUES
(10, 5, 5, 2, 2, 'MWF', TO_DATE('03:00 PM', 'HH:MI PM'), '0 00:00:50.00', 5, 35);

INSERT INTO course_section VALUES
(11, 1, 6, 1, 1, 'MTWRF', TO_DATE('08:00 AM', 'HH:MI AM'), '0 00:01:30.00', 1, 50);

INSERT INTO course_section VALUES
(12, 2, 6, 1, 2, 'MTWRF', TO_DATE('08:00 AM', 'HH:MI AM'), '0 00:01:30.00', 6, 35);

INSERT INTO course_section VALUES
(13, 3, 6, 1, 3, 'MTWRF', TO_DATE('09:00 AM', 'HH:MI AM'), '0 00:01:30.00', 5, 35);

--- inserting records into ENROLLMENT
INSERT INTO enrollment VALUES
(1, 1, 'A');

INSERT INTO enrollment VALUES
(1, 4, 'A');

INSERT INTO enrollment VALUES
(1, 6, 'B');

INSERT INTO enrollment VALUES
(1, 9, 'B');

INSERT INTO enrollment VALUES
(2, 1, 'C');

INSERT INTO enrollment VALUES
(2, 5, 'B');

INSERT INTO enrollment VALUES
(2, 6, 'A');

INSERT INTO enrollment VALUES
(2, 9, 'B');

INSERT INTO enrollment VALUES
(3, 1, 'C');

INSERT INTO enrollment VALUES
(3, 12, NULL);

INSERT INTO enrollment VALUES
(3, 13, NULL);

INSERT INTO enrollment VALUES
(4, 11, NULL);

INSERT INTO enrollment VALUES
(4, 12, NULL);

INSERT INTO enrollment VALUES
(5, 1, 'B');

INSERT INTO enrollment VALUES
(5, 5, 'C');

INSERT INTO enrollment VALUES
(5, 9, 'C');

INSERT INTO enrollment VALUES
(5, 11, NULL);

INSERT INTO enrollment VALUES
(5, 13, NULL);

INSERT INTO enrollment VALUES
(6, 11, NULL);

INSERT INTO enrollment VALUES
(6, 12, NULL);

COMMIT;
