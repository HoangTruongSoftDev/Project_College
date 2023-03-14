--Name: Hoang Truong
--Student ID: 202130169


SPOOL "C:\Truong\Lasalle College\Fall 2022\Database II\Assignment\Project Part 6\Project_part_6_Spool.txt"
CONNECT sys/sys as sysdba;
SELECT to_char(sysdate,'DD Month YYYY Day HH:MI:SS') AS "Timeline" FROM dual;
PROMPT '============== Question 1 ==============';
--Run script 7northwoods in schemas des03
--Create a procedure to display all the faculty member (f_id, f_last, f_first,
--f_rank), under each faculty member, display all the student advised by that
--faculty member
--(s_id, s_last, s_first, birthdate, s_class).
CONNECT des03/des03;
SET SERVEROUTPUT ON;
SET LINESIZE 200
CREATE OR REPLACE PROCEDURE P_p6q1 AS 
	CURSOR faculty_curr IS
		SELECT f_id, f_last,f_first, f_rank FROM faculty;
	CURSOR student_curr(p_f_id in student.f_id%TYPE) IS
		SELECT s_id, s_last, s_first, s_dob, s_class 
		FROM student 
		WHERE f_id = p_f_id;
	v_row_faculty faculty_curr%ROWTYPE;
	v_row_student student_curr%ROWTYPE;
BEGIN
	OPEN faculty_curr;
		FETCH faculty_curr INTO v_row_faculty;
		WHILE faculty_curr%FOUND LOOP
			DBMS_OUTPUT.PUT_LINE(CHR(10)||'===================================================================================');
			DBMS_OUTPUT.PUT_LINE('Faculty ID is: ' || v_row_faculty.f_id || '. Faculty Last name: ' || v_row_faculty.f_last || '. Faculty First name: ' || v_row_faculty.f_first ||'. Faculty rank: ' || v_row_faculty.f_rank);
			DBMS_OUTPUT.PUT_LINE(CHR(10)||'Students are advised by faculty number ' || v_row_faculty.f_id || ': ');
			OPEN student_curr(v_row_faculty.f_id);
			FETCH student_curr INTO v_row_student;
			WHILE student_curr%FOUND LOOP
				DBMS_OUTPUT.PUT_LINE(CHR(9)||'Student ID: ' || v_row_student.s_id || '. Student last name: ' || v_row_student.s_last || '. Student First name: ' || v_row_student.s_first || '. Date of Birth: ' ||v_row_student.s_dob || '. Student Class: ' || v_row_student.s_class);
				FETCH student_curr INTO v_row_student;
			END LOOP;
			CLOSE student_curr;
		FETCH faculty_curr INTO v_row_faculty;
		END LOOP;
	CLOSE faculty_curr;
END;
/
PROMPT '************** Testing **************';
EXEC P_p6q1;
PROMPT '============== Question 2 ==============';
--Run script 7software in schemas des04
--Create a procedure to display all the consultants. Under each
--consultant display all his/her skill (skill description) and the status of the
--skill (certified or not)

CONNECT des04/des04;
SET SERVEROUTPUT ON;
CREATE OR REPLACE PROCEDURE P_p6q2 AS
	CURSOR consultant_skill_curr(p_c_id IN consultant.c_id%TYPE) IS
		SELECT consultant_skill.c_id, consultant_skill.skill_id, consultant_skill.certification, skill.skill_description
		FROM consultant_skill JOIN skill
		ON skill.skill_id = consultant_skill.skill_id
		WHERE consultant_skill.c_id = p_c_id;
	CURSOR consultant_curr IS
		SELECT c_id, c_first, c_last
		FROM consultant;
	row_consultant_skill_curr consultant_skill_curr%ROWTYPE;
	row_consultant_curr consultant_curr%ROWTYPE;
BEGIN
	OPEN consultant_curr;
		FETCH consultant_curr INTO row_consultant_curr;
		WHILE consultant_curr%FOUND LOOP
			DBMS_OUTPUT.PUT_LINE(CHR(10)||'===================================================================================');
			DBMS_OUTPUT.PUT_LINE('The information of consultant whose ID is ' || row_consultant_curr.c_id || ' and full name is ' || row_consultant_curr.c_first || ' ' || row_consultant_curr.c_last);			
			OPEN consultant_skill_curr(row_consultant_curr.c_id);
				FETCH consultant_skill_curr INTO row_consultant_skill_curr;
				WHILE consultant_skill_curr%FOUND LOOP
				DBMS_OUTPUT.PUT_LINE(CHR(9) || '- The skill description: ' || row_consultant_skill_curr.skill_description);
				DBMS_OUTPUT.PUT_LINE(CHR(9)||'- The status of certification: ' || row_consultant_skill_curr.certification || CHR(10));
				FETCH consultant_skill_curr INTO row_consultant_skill_curr;
				END LOOP;
			CLOSE consultant_skill_curr;
			FETCH consultant_curr INTO row_consultant_curr;			
		END LOOP;
	CLOSE consultant_curr;
END;
/
PROMPT '************** Testing **************';
EXEC P_p6q2;

PROMPT '============== Question 3  ==============';
--Run script 7clearwater in schemas des02
--Create a procedure to display all items (item_id, item_desc, cat_id) under
--each item, display all the inventories belong to it.
CONNECT des02/des02;
SET SERVEROUTPUT ON;
CREATE OR REPLACE PROCEDURE P_p6q3 AS
	CURSOR item_curr IS
		SELECT item_id, item_desc, cat_id FROM item;
	v_row_item item_curr%ROWTYPE;
	CURSOR inv_curr(p_item_id IN item.item_id%TYPE) IS
		SELECT inv_id, color, inv_size, inv_price, inv_qoh
		FROM inventory
		WHERE item_id = p_item_id;
	v_row_inv inv_curr%ROWTYPE;
BEGIN
	OPEN item_curr;
		FETCH item_curr INTO v_row_item;
		WHILE item_curr%FOUND LOOP
			DBMS_OUTPUT.PUT_LINE(CHR(10)||'===================================================================================');
			DBMS_OUTPUT.PUT_LINE('The information of item which item_id is ' || v_row_item.item_id || ':');
			DBMS_OUTPUT.PUT_LINE(CHR(9) || '+ Description of item: ' || v_row_item.item_desc);
			DBMS_OUTPUT.PUT_LINE(CHR(9) || '+ Category ID: ' || v_row_item.cat_id);
			OPEN inv_curr(v_row_item.item_id);
				FETCH inv_curr INTO v_row_inv;
				WHILE inv_curr%FOUND LOOP
					DBMS_OUTPUT.PUT_LINE(CHR(10)||'*****************');
					DBMS_OUTPUT.PUT_LINE('The information of item''iventory which inv_id is ' || v_row_inv.inv_id || ':');
					DBMS_OUTPUT.PUT_LINE(CHR(9) || '+ Color of invetory: ' || v_row_inv.color);
					DBMS_OUTPUT.PUT_LINE(CHR(9) || '+ Size of invetory: ' || v_row_inv.inv_size);
					DBMS_OUTPUT.PUT_LINE(CHR(9) || '+ Price of invetory: ' || v_row_inv.inv_price);
					DBMS_OUTPUT.PUT_LINE(CHR(9) || '+ Quantity on hand of invetory: ' || v_row_inv.inv_qoh);
					FETCH inv_curr INTO v_row_inv;
				END LOOP;
			CLOSE inv_curr;
		FETCH item_curr INTO v_row_item;
		END LOOP;
	CLOSE item_curr;
END;
/

PROMPT '************** Testing **************';
EXEC P_p6q3;

PROMPT '============== Question 4  ==============';
--Modify question 3 to display beside the item description the value of
--the item (value = inv_price * inv_qoh).
CREATE OR REPLACE PROCEDURE P_p6q4 AS
	CURSOR item_curr IS
		SELECT item_id, item_desc, cat_id FROM item;
	v_row_item item_curr%ROWTYPE;
	CURSOR inv_curr(p_item_id IN item.item_id%TYPE) IS
		SELECT inv_id, color, inv_size, inv_price, inv_qoh
		FROM inventory
		WHERE item_id = p_item_id;
	v_row_inv inv_curr%ROWTYPE;
	v_value NUMBER;
BEGIN
	OPEN item_curr;
		FETCH item_curr INTO v_row_item;
		WHILE item_curr%FOUND LOOP
			DBMS_OUTPUT.PUT_LINE(CHR(10)||'===================================================================================');
			DBMS_OUTPUT.PUT_LINE('The information of item which item_id is ' || v_row_item.item_id || ':');
			DBMS_OUTPUT.PUT_LINE(CHR(9) || '+ Description of item: ' || v_row_item.item_desc);
			DBMS_OUTPUT.PUT_LINE(CHR(9) || '+ Category ID: ' || v_row_item.cat_id);
			OPEN inv_curr(v_row_item.item_id);
				FETCH inv_curr INTO v_row_inv;
				WHILE inv_curr%FOUND LOOP
					DBMS_OUTPUT.PUT_LINE(CHR(10)||'*****************');
					DBMS_OUTPUT.PUT_LINE('The information of item''iventory which inv_id is ' || v_row_inv.inv_id || ':');
					DBMS_OUTPUT.PUT_LINE(CHR(9) || '+ Color of invetory: ' || v_row_inv.color);
					DBMS_OUTPUT.PUT_LINE(CHR(9) || '+ Size of invetory: ' || v_row_inv.inv_size);
					DBMS_OUTPUT.PUT_LINE(CHR(9) || '+ Price of invetory: ' || v_row_inv.inv_price);
					DBMS_OUTPUT.PUT_LINE(CHR(9) || '+ Quantity on hand of invetory: ' || v_row_inv.inv_qoh);
					v_value := v_row_inv.inv_price * v_row_inv.inv_qoh;
					DBMS_OUTPUT.PUT_LINE(CHR(9) || '+ Value of invetory: ' || v_value);
					FETCH inv_curr INTO v_row_inv;	
				END LOOP;
			CLOSE inv_curr;
		FETCH item_curr INTO v_row_item;
		END LOOP;
	CLOSE item_curr;
END;
/
PROMPT '************** Testing **************';
EXEC P_p6q4;

PROMPT '============== Question 5  ==============';
--Run script 7software in schemas des04
--Create a procedure that accepts a consultant id, and a character used to
--update the status (certified or not) of all the SKILLs belonged to the
--consultant inserted.
--Display 4 information about the consultant such as id, name, …Under each
--consultant display all his/her skill (skill description) and the OLD and NEW
--status of the skill (certified or not).
CONNECT des04/des04;
SET SERVEROUTPUT ON;
CREATE OR REPLACE PROCEDURE P_p6q5(p_c_id IN consultant.c_id%TYPE, p_certification IN consultant_skill.certification%TYPE) AS
	CURSOR consultant_skill_curr(pa_c_id IN consultant.c_id%TYPE) IS
		SELECT consultant_skill.c_id, consultant_skill.skill_id, consultant_skill.certification, consultant.c_last, consultant.c_first, consultant.c_email
		FROM consultant_skill
		JOIN consultant
		ON consultant_skill.c_id = consultant.c_id
		WHERE consultant_skill.c_id = pa_c_id
		FOR UPDATE OF certification;
	CURSOR skill_curr(p_skill_id IN skill.skill_id%TYPE) IS
		SELECT skill_description
		FROM skill
		WHERE skill_id = p_skill_id;
	v_old_certification consultant_skill.certification%TYPE;
	v_row_consultant_skill consultant_skill_curr%ROWTYPE;
	v_row_skill skill_curr%ROWTYPE;
BEGIN
	OPEN consultant_skill_curr(p_c_id);
		FETCH consultant_skill_curr INTO v_row_consultant_skill;
		
		DBMS_OUTPUT.PUT_LINE('The information of consultant is: ' || CHR(10) || CHR(9) || '+ Student ID: ' || v_row_consultant_skill.c_id || CHR(10) || CHR(9) || '+ Consultant last name: ' || v_row_consultant_skill.c_last || CHR(10) || CHR(9) || '+ Consultant first name: ' || v_row_consultant_skill.c_first || CHR(10) || CHR(9) || '+ Consultant email: ' || v_row_consultant_skill.c_email);
		WHILE consultant_skill_curr%FOUND LOOP
			OPEN skill_curr(v_row_consultant_skill.skill_id);
				FETCH skill_curr INTO v_row_skill;
					DBMS_OUTPUT.PUT_LINE('*************************');
					DBMS_OUTPUT.PUT_LINE('Information of Skill ID ' || v_row_consultant_skill.skill_id);
					DBMS_OUTPUT.PUT_LINE(CHR(9) || '+ Skill description: ' || v_row_skill.skill_description || CHR(10) || CHR(9) || '+ Old certification: ' || v_row_consultant_skill.certification || CHR(10) || CHR(9) || '+ New certification: ' || p_certification);
			CLOSE skill_curr;
		UPDATE consultant_skill SET certification = p_certification WHERE CURRENT OF consultant_skill_curr;
		FETCH consultant_skill_curr INTO v_row_consultant_skill;
		END LOOP;
		COMMIT;
	CLOSE consultant_skill_curr;
END;
/
PROMPT '************** Testing **************';
EXEC P_p6q5(100,'Y');
SPOOL OFF;
--@"C:\Truong\Lasalle College\Fall 2022\Database II\Assignment\Project Part 6\Project_part_6.sql"