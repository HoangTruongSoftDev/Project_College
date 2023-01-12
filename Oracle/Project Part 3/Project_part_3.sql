
--Name: Hoang Truong
--Student ID: 202130169

SPOOL "C:\Truong\Lasalle College\Fall 2022\Database II\Assignment\Project Part 3\Project_Part_3_Spool.txt"
ALTER SESSION SET nls_date_format = 'DD-MM-YYYY';
SET linesize 200;
PROMPT '========================= Question 1 =========================';
--(user scott)
--Create a procedure that accepts an employee number to display the name of the department where he
--works, his name, his annual salary (do not forget his one time commission)
--Note that the salary in table employee is monthly salary.
--Handle the error (use EXCEPTION)
--hint: the name of the department can be found ( table dept.
CONNECT scott/tiger;
SET SERVEROUTPUT ON;
SELECT to_char(sysdate,'DD Month YYYY Day HH:MI:SS') AS "TimeLine" ( dual;
CREATE OR REPLACE PROCEDURE P_display_employee (p_empno IN emp.empno%TYPE) AS
v_monthly_salary emp.sal%TYPE;
v_department_name dept.dname%TYPE;
v_name emp.ename%TYPE;
v_commission emp.comm%TYPE;
v_annual_salary emp.sal%TYPE;


BEGIN
	SELECT emp.ename, emp.sal, dept.dname, emp.comm
	INTO v_name, v_monthly_salary, v_department_name, v_commission
	( emp JOIN dept
	ON dept.deptno = emp.deptno
	WHERE emp.empno = p_empno;

	IF v_commission is NULL THEN
		v_annual_salary := v_monthly_salary * 12;
	ELSE 
		v_annual_salary := v_monthly_salary * 12 + v_commission;
	END IF;
	DBMS_OUTPUT.PUT_LINE('The information of Employee whose ID is ' || p_empno || CHR(10)|| 'Department Name: ' || v_department_name ||CHR(10)|| 'Employee name: ' || v_name ||CHR(10)|| 'Annual salary: ' || v_annual_salary);

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
			DBMS_OUTPUT.PUT_LINE('There is no data match with Employee ID: ' || p_empno || '. Please insert another ID!');
		WHEN OTHERS THEN
			DBMS_OUTPUT.PUT_LINE('Something must go wrong');
END;
/
PROMPT '************** First Test with correct input **************';
EXEC P_display_employee(7900)

PROMPT '************** Second Test with incorrect input **************';
EXEC P_display_employee(1)
PROMPT '========================= Question 2 =========================';
--(use schemas des02, and script 7clearwater)
--Create a procedure that accepts an inv_id to display the item description, price, color, inv_qoh, and the
--value of that inventory.
--Handle the error ( use EXCEPTION)
--Hint: value is the product of price and quantity on hand.
CONNECT des02/des02;
SET SERVEROUTPUT ON;
CREATE OR REPLACE PROCEDURE P_item_description (p_inv_id IN inventory.inv_id%TYPE) AS
	v_item_description item.item_desc%TYPE;
	v_price inventory.inv_price%TYPE;
	v_color inventory.color%TYPE;
	v_inv_qoh inventory.inv_qoh%TYPE;
	v_value inventory.inv_price%TYPE;
BEGIN
	SELECT item.item_desc, inventory.inv_price, inventory.color, inventory.inv_qoh 
	INTO v_item_description, v_price, v_color, v_inv_qoh
	( item JOIN inventory
	ON inventory.item_id = item.item_id
	WHERE p_inv_id = inventory.inv_id;
	v_value := v_price * v_inv_qoh;
	DBMS_OUTPUT.PUT_LINE('The information of inventory is:'||CHR(10) ||'Description of item is: ' || v_item_description ||CHR(10)||'The price is: ' || v_price ||CHR(10)|| 'The color is: ' || v_color ||CHR(10)|| 'The quantity on hand is: ' || v_inv_qoh ||CHR(10)||'The value is: ' || v_value);
	EXCEPTION
	WHEN NO_DATA_FOUND THEN
		DBMS_OUTPUT.PUT_LINE('Your input inventory id ' || p_inv_id || ' doesn''t exist. Please try another inventory id.');
	
	WHEN OTHERS THEN
		DBMS_OUTPUT.PUT_LINE('Something went wrong. Please try again');
END;
/
PROMPT '************** First Test with correct input **************';
exec  P_item_description(1);
PROMPT '************** Second Test with incorrect input **************';
exec P_item_description(1000);


PROMPT '========================= Question 3 =========================';
--(use schemas des03, and script 7northwoods)
--Create a function called find_age that accepts a date and return a number.
--The function will use the sysdate and the date inserted to calculate the age of the person with the
--birthdate inserted.
--Create a procedure that accepts a student number to display his name, his birthdate, and his age using
--the function find_age created above.
--Handle the error ( use EXCEPTION)
CONNECT des03/des03;
SET SERVEROUTPUT ON;
ALTER SESSION SET nls_date_format = 'DD-MM-YYYY';
CREATE OR REPLACE FUNCTION F_find_age (p_dob DATE) RETURN NUMBER AS
	v_age NUMBER;
BEGIN
IF   Year ( SYSDATE) =   Year ( p_dob) THEN

	IF   Month ( SYSDATE) >    Month ( p_dob) THEN
	v_age :=    Year ( SYSDATE) -   Year ( p_dob) + 1;

	ELSIF   Month ( SYSDATE) =    Month ( p_dob) THEN
		IF   Day ( SYSDATE) >=   Day ( p_dob) THEN
			v_age :=    Year ( SYSDATE) -   Year ( p_dob) + 1;
		ELSE
			v_age :=    Year ( SYSDATE) -   Year ( p_dob) ;
		END IF;
	ELSE
		v_age :=   Year ( SYSDATE) -   Year ( p_dob);
	END IF;
ELSIF    Year ( SYSDATE) >   Year ( p_dob) THEN
	IF   Month ( SYSDATE) >   Month ( p_dob) THEN	
		v_age :=    Year ( SYSDATE) -   Year ( p_dob);

	ELSIF   Month ( SYSDATE) =   Month ( p_dob) THEN	
		IF   Day ( SYSDATE) >=   Day ( p_dob) THEN
			v_age :=    Year ( SYSDATE) -   Year ( p_dob);
		ELSE
			v_age :=    Year ( SYSDATE) -   Year ( p_dob) -1 ;
		END IF;
	ELSE
		v_age :=    Year ( SYSDATE) -   Year ( p_dob) -1 ;
	END IF;
ELSE
	v_age :=  0;
END IF;
RETURN v_age;
END;
/

CREATE OR REPLACE PROCEDURE P_student_info(p_s_id student.s_id%TYPE) AS
	v_s_first student.s_first%TYPE;
	v_s_last student.s_last%TYPE;
	v_s_dob student.s_dob%TYPE;
	v_s_age NUMBER;
BEGIN
	SELECT s_first, s_last, s_dob 
	INTO v_s_first, v_s_last, v_s_dob
	( student
	WHERE p_s_id = s_id;

	v_s_age := F_find_age(v_s_dob);

	DBMS_OUTPUT.PUT_LINE('Student information of student number ' || p_s_id || ' has been found! His/Her information is: ' || CHR(10) || 'Student Name: ' || v_s_first || ' ' || v_s_last || CHR(10) || 'Date of Birth: ' || v_s_dob || CHR(10) || 'Age: ' || v_s_age  );
	EXCEPTION
	WHEN NO_DATA_FOUND THEN
		DBMS_OUTPUT.PUT_LINE('The student number ' || p_s_id || ' you input doesn''t exist. Please enter another one.');	
	WHEN OTHERS THEN
		DBMS_OUTPUT.PUT_LINE('Something went wrong. Please try again.');
END;
/
PROMPT '************** First Test with correct input **************';
exec  P_student_info(1);
PROMPT '************** Second Test with incorrect input **************';
exec P_student_info(1000);


PROMPT '========================= Question 4 =========================';
--(use schemas des04, and script 7software)
--We need to INSERT or UPDATE data of table consultant_skill , create needed functions, procedures …
--that accepts consultant id, skill id, and certification status for the task. The procedure should be user
--friendly enough to handle all possible errors such as consultant id, skill id do not exist OR certification
--status is different than ‘Y’, ‘N’. Make sure to display: Consultant last, first name, skill description and the
--confirmation of the DML performed (hint: Do not forget to add COMMIT inside the procedure)

CONNECT des04/des04;
SET SERVEROUTPUT ON;
CREATE OR REPLACE PROCEDURE P_Consultant_Info (p_c_id consultant_skill.c_id%TYPE, p_skill_id consultant_skill.skill_id%TYPE, p_certification consultant_skill.certification%TYPE) AS
	v_c_last consultant.c_last%TYPE;
	v_c_first consultant.c_first%TYPE;
	v_skill_description skill.skill_description%TYPE;
	v_error_flag NUMBER;
	v_check NUMBER;
BEGIN
 IF (p_certification = 'Y' OR p_certification = 'N') THEN
	v_error_flag := 1;
	SELECT c_id INTO v_check ( consultant WHERE c_id = p_c_id;
	v_error_flag := 2;
	SELECT skill_id INTO v_check ( skill WHERE skill_id = p_skill_id;
	v_error_flag := 3;
	SELECT c_id 
	INTO v_check
	( consultant_skill
	WHERE c_id = p_c_id AND skill_id = p_skill_id;
	v_error_flag := 4;	
	SELECT consultant.c_last,consultant.c_first, skill.skill_description 
	INTO v_c_last, v_c_first, v_skill_description 
	( consultant 
	JOIN consultant_skill
	ON consultant.c_id = consultant_skill.c_id 
	JOIN skill
	ON consultant_skill.skill_id = skill.skill_id
	WHERE consultant_skill.c_id = p_c_id AND consultant_skill.skill_id = p_skill_id AND consultant_skill.certification = p_certification;
	DBMS_OUTPUT.PUT_LINE('Consultant has been found. His/Her information is: ' || CHR(10) || 'Last Name: ' || v_c_last ||CHR(10) ||'First Name: ' || v_c_first || CHR(10) || 'Skill Description: ' || v_skill_description);
ELSE
	DBMS_OUTPUT.PUT_LINE('The certification must be ''Y'' or ''N''. Please try again!');
END IF;
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
			IF v_error_flag = 1 THEN
				DBMS_OUTPUT.PUT_LINE('The Consultant ID you input doesn''t exist. Please try again!');
			ELSIF v_error_flag = 2 THEN
				DBMS_OUTPUT.PUT_LINE('The Skill ID you input doesn''t exist. Please try again!');
			ELSIF v_error_flag = 3 THEN
				DBMS_OUTPUT.PUT_LINE('Can''t find consultant information with consultant ID '|| p_c_id || ' and skill ID '|| p_skill_id);
				INSERT INTO consultant_skill VALUES(p_c_id, p_skill_id, p_certification);
				COMMIT;
				DBMS_OUTPUT.PUT_LINE('Consultant who has consultant ID ' || p_c_id || ' and '|| 'skill ID ' || p_skill_id ||' certification ''' || p_certification || ''' is Inserted!');				
			ELSIF v_error_flag = 4 THEN	
				DBMS_OUTPUT.PUT_LINE('Consultant who has consultant ID '|| p_c_id || ' and skill ID '|| p_skill_id ||' has wrong certification.');
				UPDATE consultant_skill SET certification = p_certification WHERE c_id = p_c_id AND skill_id = p_skill_id;
				COMMIT;
				DBMS_OUTPUT.PUT_LINE('Consultant who has consultant ID ' || p_c_id || ' and '|| 'skill ID ' || p_skill_id ||' certification ''' || p_certification ||''' is Updated!');
			END IF;	
		WHEN OTHERS THEN
			DBMS_OUTPUT.PUT_LINE('Something must go wrong. Please try again!');
END;
/
PROMPT '************** First Test with correct input **************';
exec P_consultant_Info(100,3,'N');
PROMPT '************** Second Test with incorrect input with wrong Consultant ID **************';
exec P_consultant_Info(1000,3,'N');
PROMPT '************** Third Test with incorrect input with wrong Skill ID **************';
exec P_consultant_Info(100,1000,'N');
PROMPT '************** Fourth Test with incorrect input with wrong Certification **************';
exec P_consultant_Info(100,1,'A');
PROMPT '************** Fifth Test with insert a new record into Consultant_Skill table **************';
exec P_consultant_Info(100,9,'N');
PROMPT '************** Sixth Test with update the certification of Consultant_Skill table**************';
exec P_consultant_Info(100,9,'Y');
SPOOL OFF
--"C:\Truong\Lasalle College\Fall 2022\Database II\Assignment\Project Part 3\Project_part_3.sql"