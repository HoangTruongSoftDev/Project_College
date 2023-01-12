-- Hoang Truong
-- Student ID: 202130169

SPOOL "C:\Truong\Lasalle College\Fall 2022\Database II\Assignment\Project Part 7\Project_part_7_Spool.txt";

CONNECT des03/des03
SELECT To_char(sysdate,'DD MM YYYY Day HH:MI:SS') AS "TimeLine" FROM Dual;
PROMPT =============== Question 1 ===============;
--Run script 7northwoods in schemas des03
--Using CURSOR FOR LOOP syntax 1 in a procedure to display all the
--faculty member (f_id, f_last, f_first, f_rank), under each faculty member,
--display all the student advised by that faculty member
--(s_id, s_last, s_first, birthdate, s_class).
CREATE OR REPLACE PROCEDURE P7Q1 AS
	CURSOR fal_curr IS
		SELECT f_id, f_last,f_first,f_rank 
		FROM faculty;
	CURSOR stu_curr(p_f_id IN NUMBER) IS
		SELECT s_id, s_last, s_first, s_dob, s_class
		FROM student
		WHERE f_id = p_f_id;
BEGIN	
	FOR facul IN fal_curr LOOP
		DBMS_OUTPUT.PUT_LINE('========================================');
		DBMS_OUTPUT.PUT_LINE('Faculty Information: ' || CHR(10) || CHR(9) || '+ Faculty ID: ' || facul.f_id || CHR(10) || CHR(9) || '+ Last Name: ' ||facul.f_last|| CHR(10) || CHR(9) || '+ First Name: ' || facul.f_first || CHR(10) || CHR(9) || '+ Faculty Rank: ' || facul.f_rank);
		FOR stu in stu_curr(facul.f_id) LOOP
			DBMS_OUTPUT.PUT_LINE('************************');
			DBMS_OUTPUT.PUT_LINE('Student Information: ' || CHR(10) || CHR(9) || '+ Student ID: ' || stu.s_id || CHR(10) || CHR(9) || '+ Last Name: ' ||stu.s_last|| CHR(10) || CHR(9) || '+ First Name: ' || stu.s_first || CHR(10) || CHR(9) || '+ Date Of Birth: ' || stu.s_dob || CHR(10) || CHR(9) || '+ Student Class: ' || stu.s_class || CHR(10));
		END LOOP;
	END LOOP;
END;
/

SET SERVEROUTPUT ON
SET LINESIZE 200
PROMPT =============== Executing Procedure P7Q1 ===============;
EXEC P7Q1

PROMPT =============== Question 2 ===============;
--Run script 7software in schemas des04
--Using %ROWTYPE in a procedure, display all the consultants.
--Under each consultant display all his/her skill (skill description) and the
--status of the skill (certified or not)
CONNECT des04/des04
CREATE OR REPLACE PROCEDURE P7Q2 AS
	CURSOR consul_curr IS
		SELECT c_id, c_first, c_last, c_email
		FROM consultant;
	CURSOR skill_curr(p_c_id IN NUMBER) IS
		SELECT skill.skill_id, skill.skill_description, consultant_skill.certification
		FROM skill 
		JOIN consultant_skill
		ON skill.skill_id = consultant_skill.skill_id
		WHERE consultant_skill.c_id = p_c_id;
	v_row_consul_curr consul_curr%ROWTYPE;
	v_row_skill_curr skill_curr%ROWTYPE;
BEGIN
	OPEN consul_curr;
		FETCH consul_curr INTO v_row_consul_curr;
		WHILE consul_curr%FOUND LOOP
			DBMS_OUTPUT.PUT_LINE('========================================');
			DBMS_OUTPUT.PUT_LINE('Consultant Information: ' || CHR(10) ||CHR(9) || '+ Consultant ID: ' || v_row_consul_curr.c_id || CHR(10) ||CHR(9) || '+ First Name: ' || v_row_consul_curr.c_first || CHR(10) ||CHR(9) || '+ Last Name: ' || v_row_consul_curr.c_last || CHR(10) ||CHR(9) || '+ Email: ' || v_row_consul_curr.c_email);
			OPEN skill_curr(v_row_consul_curr.c_id);
				FETCH skill_curr INTO v_row_skill_curr;
				WHILE skill_curr%FOUND LOOP
					DBMS_OUTPUT.PUT_LINE('************************');
					DBMS_OUTPUT.PUT_LINE('Skill Information: ' || CHR(10) || CHR(9) || '+ Skill ID: ' || v_row_skill_curr.skill_id || CHR(10) || CHR(9) || '+ Skill Description: ' || v_row_skill_curr.skill_description || CHR(10) || CHR(9) || '+ Certification: ' || v_row_skill_curr.certification ||  CHR(10));
					FETCH skill_curr INTO v_row_skill_curr;
				END LOOP;
			CLOSE skill_curr;
			FETCH consul_curr INTO v_row_consul_curr;	
		END LOOP;
	CLOSE consul_curr;
END;
/
SET SERVEROUTPUT ON
SET LINESIZE 200
PROMPT =============== Executing Procedure P7Q2 ===============;
EXEC P7Q2

PROMPT =============== Question 3 ===============;
--Run script 7clearwater in schemas des02
--Using CURSOR FOR LOOP syntax 2 in a procedure to display all items
--(item_id, item_desc, cat_id) under each item, display all the inventories
--belong to it
CONNECT des02/des02;
CREATE OR REPLACE PROCEDURE P7Q3 AS
BEGIN
	FOR item IN (SELECT item_id, item_desc, cat_id FROM item) LOOP
		DBMS_OUTPUT.PUT_LINE('========================================');
		DBMS_OUTPUT.PUT_LINE('Item Information: ' || CHR(10) ||CHR(9) || '+ Item ID: ' || item.item_id || CHR(10) ||CHR(9) || '+ Item Description: ' || item.item_desc || CHR(10) ||CHR(9) || '+ Category ID: ' || item.cat_id);
		FOR inve IN (SELECT inv_id, color, inv_size, inv_price, inv_qoh FROM inventory WHERE item_id = item.item_id) LOOP
			DBMS_OUTPUT.PUT_LINE('************************');
			DBMS_OUTPUT.PUT_LINE('Inventory Information: ' || CHR(10) || CHR(9) || '+ Inventory ID: ' || inve.inv_id || CHR(10) || CHR(9) || '+ Color: ' || inve.color || CHR(10) || CHR(9) || '+ Size: ' || inve.inv_size || CHR(10) || CHR(9) || '+ Quantity on Hand: ' || inve.inv_qoh || CHR(10) || CHR(9) || '+ Price: ' || inve.inv_price  ||CHR(10));	
		END LOOP;
	END LOOP;
END;
/
SET SERVEROUTPUT ON
SET LINESIZE 200
PROMPT =============== Executing Procedure P7Q3 ===============;
EXEC P7Q3
PROMPT =============== Question 4 ===============;
--Modify question 3 to display beside the item description the value of
--the item (value = inv_price * inv_qoh).
CREATE OR REPLACE PROCEDURE P7Q4 AS
	v_sum NUMBER := 0;
	v_value NUMBER;
BEGIN
	FOR item IN (SELECT item_id, item_desc, cat_id FROM item) LOOP
		FOR inve IN (SELECT inv_price, inv_qoh FROM inventory WHERE item_id = item.item_id) LOOP
			v_value := inve.inv_price * inve.inv_qoh;
			v_sum := v_sum + v_value;
		END LOOP;
		DBMS_OUTPUT.PUT_LINE('========================================');
		DBMS_OUTPUT.PUT_LINE('Item Information: ' || CHR(10) ||CHR(9) || '+ Item ID: ' || item.item_id || CHR(10) ||CHR(9) || '+ Item Description: ' || item.item_desc || CHR(10) ||CHR(9) || '+ Item Value: ' || v_sum || CHR(10) || CHR(9) || '+ Category ID: ' || item.cat_id);
		v_sum :=0;
		FOR inve IN (SELECT inv_id, color, inv_size, inv_price, inv_qoh FROM inventory WHERE item_id = item.item_id) LOOP
			DBMS_OUTPUT.PUT_LINE('************************');
			DBMS_OUTPUT.PUT_LINE('Inventory Information: ' || CHR(10) || CHR(9) || '+ Inventory ID: ' || inve.inv_id || CHR(10) || CHR(9) || '+ Color: ' || inve.color || CHR(10) || CHR(9) || '+ Size: ' || inve.inv_size || CHR(10) || CHR(9) || '+ Quantity on Hand: ' || inve.inv_qoh || CHR(10) || CHR(9) || '+ Price: ' || inve.inv_price  ||CHR(10));	
		END LOOP;
	END LOOP;
END;
/
PROMPT =============== Executing Procedure P7Q4 ===============;
EXEC P7Q4
SPOOL OFF;