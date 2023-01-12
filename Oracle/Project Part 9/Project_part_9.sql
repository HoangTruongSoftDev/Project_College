-- Hoang Truong
-- Student ID: 202130169

SPOOL "C:\Truong\Project_part_9_Spool.txt";
CONNECT des02/des02
SELECT to_char(sysdate,'DD MM YYYY Day HH:MI:SS') FROM Dual;

PROMPT ================= Question 1 =================
--Create a package with OVERLOADING procedure used to insert a new customer. The user has
--the choice of providing either
--a/ Last Name, address
--b/ Last Name, birthdate
--c/ Last Name, First Name, birthdate
--d/ Customer id, last name, birthdate
--In case no customer id is provided, please use a number from a sequence called
--customer_sequence

CREATE OR REPLACE PACKAGE customer_package IS
	PROCEDURE P_create_new_customer(p_lastName IN VARCHAR2, p_address VARCHAR2);
	PROCEDURE P_create_new_customer(p_lastName IN VARCHAR2, p_dob DATE);
	PROCEDURE P_create_new_customer(p_lastName IN VARCHAR2, p_firstName VARCHAR2, p_dob DATE);
	PROCEDURE P_create_new_customer(p_c_id IN NUMBER, p_lastName IN VARCHAR2, p_dob DATE);	
END;
/
CREATE SEQUENCE customer_sequence START WITH 6;
CREATE OR REPLACE PACKAGE BODY customer_package IS
	PROCEDURE P_create_new_customer(p_lastName IN VARCHAR2, p_address VARCHAR2) AS
		BEGIN
			INSERT INTO CUSTOMER(c_id,c_last,c_address) VALUES(customer_sequence.NEXTVAL, p_lastName, p_address);
			DBMS_OUTPUT.PUT_LINE('Insert a new customer sucessfully');
			COMMIT;
		END P_create_new_customer;
	PROCEDURE P_create_new_customer(p_lastName IN VARCHAR2,  p_dob DATE) AS
		BEGIN
			INSERT INTO CUSTOMER(c_id,c_last,c_birthdate) VALUES(customer_sequence.NEXTVAL, p_lastName, p_dob);
			DBMS_OUTPUT.PUT_LINE('Insert a new customer sucessfully');
			COMMIT;
		END P_create_new_customer;
	PROCEDURE P_create_new_customer(p_lastName IN VARCHAR2, p_firstName VARCHAR2, p_dob DATE) AS
		BEGIN
			INSERT INTO CUSTOMER(c_id,c_last,c_first,c_birthdate) VALUES(customer_sequence.NEXTVAL, p_lastName, p_firstName, p_dob);
			DBMS_OUTPUT.PUT_LINE('Insert a new customer sucessfully');
			COMMIT;
		END P_create_new_customer;
	PROCEDURE P_create_new_customer(p_c_id IN NUMBER, p_lastName IN VARCHAR2, p_dob DATE) AS
		v_c_id CUSTOMER.c_id%TYPE;
		BEGIN
			SELECT c_id
			INTO v_c_id
			FROM CUSTOMER
			WHERE c_id = p_c_id;
			DBMS_OUTPUT.PUT_LINE('This id has already existed. Please choose another ID');
			EXCEPTION
			WHEN NO_DATA_FOUND THEN
				INSERT INTO CUSTOMER(c_id,c_last,c_birthdate) VALUES(p_c_id, p_lastName, p_dob);
				COMMIT;
				DBMS_OUTPUT.PUT_LINE('Insert a new customer sucessfully');
		END P_create_new_customer;
END;
/
SET SERVEROUTPUT ON
PROMPT ********** Testing first time **********
EXEC customer_package.P_create_new_customer('Pham','Ho Chi Minh');

PROMPT ********** Testing second time **********
EXEC customer_package.P_create_new_customer('Nguyen', to_date('20/10/2003','DD/MM/YYYY'));

PROMPT ********** Testing third time **********
EXEC customer_package.P_create_new_customer('Pham', 'Truong', to_date('28/02/2003','DD/MM/YYYY'));

PROMPT ********** Testing fourth time **********
EXEC customer_package.P_create_new_customer(1,'Bui', to_date('01/01/2003','DD/MM/YYYY'));

PROMPT ********** Testing fifth time **********
EXEC customer_package.P_create_new_customer(20,'Bui', to_date('01/01/2003','DD/MM/YYYY'))

CONNECT des03/des03
PROMPT ================= Question 2 =================
--Create a package with OVERLOADING procedure used to insert a new student. The user has the
--choice of providing either
--a/ Student id, last name, birthdate
--b/ Last Name, birthdate
--c/ Last Name, address
--d/ Last Name, First Name, birthdate, faculty id
--In case no student id is provided, please use a number from a sequence called
--student_sequence.
--Make sure that the package with the overloading procedure is user friendly enough to handle
--error such as:
--- Faculty id does not exist
--- Student id provided already existed
--- Birthdate is in the future

CREATE OR REPLACE PACKAGE student_package IS
	PROCEDURE P_create_new_student(p_s_id IN NUMBER, p_s_last IN VARCHAR2, p_s_dob IN DATE);
	PROCEDURE P_create_new_student(p_s_last IN VARCHAR2, p_s_dob IN DATE);
	PROCEDURE P_create_new_student(p_s_last IN VARCHAR2, p_s_address IN VARCHAR2);
	PROCEDURE P_create_new_student(p_s_last IN VARCHAR2, p_s_first IN VARCHAR2, p_s_dob IN DATE, p_f_id NUMBER);
END;
/

CREATE SEQUENCE student_sequence START WITH 6;

CREATE OR REPLACE PACKAGE BODY student_package IS
	PROCEDURE P_create_new_student(p_s_id IN NUMBER, p_s_last IN VARCHAR2, p_s_dob IN DATE) AS
	BEGIN
		IF sysdate - p_s_dob < 0 THEN
			INSERT INTO student(s_id, s_last, s_dob) VALUES (p_s_id, p_s_last,p_s_dob);
			COMMIT;
			DBMS_OUTPUT.PUT_LINE('Insert a new student sucessfully');
		ELSE 
			DBMS_OUTPUT.PUT_LINE('The date of birth must be in future');
		EXCEPTION
		WHEN DUP_VAL_ON_INDEX THEN
			DBMS_OUTPUT.PUT_LINE('This id has already existed. Please choose another ID');
	END P_create_new_student;

	PROCEDURE P_create_new_student(p_s_last IN VARCHAR2, p_s_dob IN DATE) AS
	BEGIN
		IF sysdate - p_s_dob < 0 THEN
			INSERT INTO student(s_id, s_last, s_dob) VALUES (student_sequence.NEXTVAL, p_s_last,p_s_dob);
			COMMIT;
			DBMS_OUTPUT.PUT_LINE('Insert a new student sucessfully');
		ELSE 
			DBMS_OUTPUT.PUT_LINE('The date of birth must be in future');
		WHEN DUP_VAL_ON_INDEX THEN
			DBMS_OUTPUT.PUT_LINE('This id has already existed. Please choose another ID');
	END P_create_new_student;

	PROCEDURE P_create_new_student(p_s_last IN VARCHAR2, p_s_address IN VARCHAR2) AS
	BEGIN
		INSERT INTO student(s_id, s_last, s_address) VALUES (student_sequence.NEXTVAL, p_s_last,p_s_zddress);
		COMMIT;
		DBMS_OUTPUT.PUT_LINE('Insert a new student sucessfully');
		WHEN DUP_VAL_ON_INDEX THEN
			DBMS_OUTPUT.PUT_LINE('This id has already existed. Please choose another ID');
	END P_create_new_student;

	PROCEDURE P_create_new_student(p_s_last IN VARCHAR2, p_s_first IN VARCHAR2, p_s_dob IN DATE, p_f_id NUMBER) AS
		v_f_id NUMBER;
	BEGIN
	IF sysdate - p_s_dob < 0 THEN
		SELECT f_id
		INTO v_f_id
		FROM faculty
		WHERE f_id = p_f_id;
		INSERT INTO student(s_id, s_last, s_address) VALUES (student_sequence.NEXTVAL, p_s_last,p_s_zddress);
		COMMIT;
		DBMS_OUTPUT.PUT_LINE('Insert a new student sucessfully');
	ELSE 
			DBMS_OUTPUT.PUT_LINE('The date of birth must be in future');
		WHEN DUP_VAL_ON_INDEX THEN
			DBMS_OUTPUT.PUT_LINE('This student id has already existed. Please choose another ID');
		WHEN NO_DATA_FOUND THEN
			DBMS_OUTPUT.PUT_LINE('This faculty id has not existed. Please insert another faculty ID');
	END P_create_new_student;
END;
/
SET SERVEROUTPUT ON
PROMPT ********** Testing first time **********
EXEC customer_package.P_create_new_customer(20,'Pham',to_date('02/01/2005','DD/MM/YYYY'));

PROMPT ********** Testing second time **********
EXEC customer_package.P_create_new_customer(20,'Pham',to_date('02/01/2005','DD/MM/YYYY'));

PROMPT ********** Testing third time **********
EXEC customer_package.P_create_new_customer('Nguyen', to_date('20/10/2003','DD/MM/YYYY'));

PROMPT ********** Testing fourthtime **********
EXEC customer_package.P_create_new_customer('Pham','Ha Noi');

PROMPT ********** Testing fifth time **********
EXEC customer_package.P_create_new_customer('Bui', 'Hung', to_date('01/01/2003','DD/MM/YYYY'), 1);

PROMPT ********** Testing sixfth time **********
EXEC customer_package.P_create_new_customer('Bui', 'Hung', to_date('01/01/2003','DD/MM/YYYY'), 100);
SPOOL OFF;		