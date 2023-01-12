--Name: Hoang Truong
--StudentID: 202130169

CONNECT sys/sys as sysdba;
DROP USER Project_part_1 CASCADE;
CREATE USER Project_part_1 IDENTIFIED BY 123;
GRANT connect, resource TO Project_part_1;
CONNECT Project_part_1/123;

SPOOL "C:\Truong\Lasalle College\Fall 2022\Database II\Assignment\Project Part 1\Project_part_1_Spool.txt";
SELECT to_char(sysdate,'DD Month YYYY Day HH:MI:SS') as TimeLine FROM dual;
SET serveroutput ON;
SET LINESIZE 130;

PROMPT '****************** Question 01 ******************';
--Question 1:
--Create a procedure that accept a number to display the triple of its value
--to the screen as follow:
-- The triple of ... is ...
--Ex:
-- Exec L1q1 (2)
-- The triple of 2 is 6.
-- Exec L1q1 (3)
-- The triple of 3 is 9.

CREATE OR REPLACE PROCEDURE L1q1 (p_input IN NUMBER) AS 
v_result NUMBER;
v_number_input NUMBER;
BEGIN
	v_number_input := p_input;
	v_result := v_number_input * 3;
	DBMS_OUTPUT.PUT_LINE('The triple of ' || v_number_input || ' is ' || v_result ||'.'); 
END;
/

--First time execute
PROMPT '============== First time execute with parameter is 2 ==============';
EXEC L1q1(2);

--Second time execute
PROMPT '============== Second time execute with parameter is 3 ==============';
EXEC L1q1(3);

PROMPT '****************** Question 02 ******************'
--Question 2:
--Create a procedure that accepts a number which represent the temperature
--in Celsius. The procedure will convert the temperature into
--Fahrenheit using the following formula:
-- Tf = (9/5) * Tc + 32
--Then display the following:
-- ... degree in C is equivalent to ... in F
--Test your procedure for 3 different temperature

CREATE OR REPLACE PROCEDURE L1q2 (p_Tc IN NUMBER) AS 
v_Tc Number; 
v_Tf NUMBER;
BEGIN
	v_Tc := p_Tc;
	v_Tf := (9/5) * v_Tc + 32;
	DBMS_OUTPUT.PUT_LINE( v_Tc || ' degree in C is equivalent to ' || v_Tf || ' in F.');
END;
/

--First time execute
PROMPT '============== First time execute with parameter is 12 ==============';
EXEC L1q2(12);

--Second time execute
PROMPT '============== Second time execute with parameter is 2.3 ==============';
EXEC L1q2(2.3);

--Third time execute
PROMPT '============== Third time execute with parameter is 56.56 ==============';
EXEC L1q2(56.56);


PROMPT '****************** Question 03 ******************'
--Question 3:
--Create a procedure that accept a number which represent the temperature
--in Fahrenheit. The procedure will convert the temperature into
--Celsius using the following formula:
-- Tc = (5/9) * (Tf - 32)
--Then display the following:
-- ... degree in F is equivalent to ... in C
--Test run your procedure for 3 different temperatures.
--Use the procedure of question 2 to check for the accuracy of your procedure.

CREATE OR REPLACE PROCEDURE L1q3 (p_Tf IN NUMBER) AS 
v_Tc NUMBER;
v_Tf NUMBER;
BEGIN
	v_Tf := p_Tf;
	V_Tc := (5/9) * (v_Tf - 32);
	DBMS_OUTPUT.PUT_LINE( v_Tf || ' degree in F is equivalent to ' || v_Tc || ' in C.');
END;
/

--First time execute
PROMPT '============== First time execute with parameter is 53.6 ==============';
EXEC L1q3(53.6);

--Second time execute
PROMPT '============== Second time execute with parameter is 36.14 ==============';
EXEC L1q3(36.14);

--Third time execute
PROMPT '============== Third time execute with parameter is 133.08 ==============';
EXEC L1q3(133.808);

PROMPT '****************** Question 04 ******************'
--Question 4:
--Create a procedure that accepts a number used to calculate the
--5% GST, 9.98 % QST, the total of the 2 tax, the grand total, and to
--display EVERY THING to the screen as follow:
-- For the price of $...
-- You will have to pay $... GST
-- $ ... QST for a total of $...
-- The GRAND TOTAL is $ ...
--Ex:
-- SQL> Exec L1q4 (100)
--For the price of $100
-- You will have to pay $5 GST
-- $ 9.98 QST for a total of $14.98
-- The GRAND TOTAL is $ $114.98

CREATE OR REPLACE PROCEDURE L1q4 (p_input_money IN NUMBER) AS 
v_input_money NUMBER;
v_GST NUMBER; 
v_QST NUMBER; 
v_GRAND_TOTAL NUMBER; 
v_TOTAL_TAX NUMBER;
BEGIN
	v_input_money := p_input_money;
	v_GST := 5/100 * v_input_money;
	v_QST := 9.98/100 * v_input_money;
	v_GRAND_TOTAL := v_input_money + v_GST + v_QST;
	v_TOTAL_TAX := v_QST + v_GST;
	DBMS_OUTPUT.PUT_LINE('For the price of $ ' || v_input_money || CHR(10)||'You will have to pay $' || v_GST ||' GST'|| CHR(10) ||'$ ' || v_QST ||' QST'|| ' for a total of $' || v_TOTAL_TAX || CHR(10) ||'The GRAND TOTAL is $ $' || v_GRAND_TOTAL);
END;
/

--execute
PROMPT '============== Execute with parameter is 100 ==============';
EXEC L1q4(100);

PROMPT '****************** Question 05 ******************';
--Question 5:
--Create a procedure that accepts 2 numbers represented the width and
--height of a rectangular shape. The procedure will calculate the
--area and the perimeter using the following formula:
-- Area = Width X Height
-- Perimeter = (Width + Height) X 2
--display EVERY THING to the screen as follow:
-- The area of a ... by ... is .... It's parameter is ...
--Ex:
-- SQL> Exec L1q5 (2,3)
-- The area of a 2 by 3 rectangle is 6 It's parameter is 10


CREATE OR REPLACE PROCEDURE L1q5(p_width IN NUMBER, p_height IN NUMBER) AS 
v_width NUMBER;
v_height NUMBER;
v_area NUMBER; 
v_perimeter NUMBER;
BEGIN
	v_width := p_width;
	v_height := p_height;
	v_area := v_width * v_height;
	v_perimeter := (v_width + v_height) *2;
	DBMS_OUTPUT.PUT_LINE ('The area of a ' || v_width || ' by ' || v_height || ' retangle is ' || v_area || ' It''s parameter is ' || v_perimeter||'.');
END;
/

--Execute
PROMPT '============== Execute with parameter is 2 and 3==============';
EXEC L1q5 (2,3);


PROMPT '****************** Question 06 ******************';
--Question 6:
--Use the formula of question 2, create a function that accepts the temperature in Celsius to
--convert it into temperature in Fahrenheit. Test your function at least 3 times with 3 different
--temperature.

CREATE OR REPLACE FUNCTION F_question6_project1(p_number_in IN NUMBER) RETURN NUMBER AS
v_cel NUMBER;
v_fah NUMBER;
BEGIN
	v_cel := p_number_in;
	v_fah := (9/5) * v_cel + 32;
	RETURN v_fah;
END;
/

--First time execute
PROMPT '============== First time execute with parameter is 12 ==============';
SELECT F_question6_project1(12) AS "Celcius to Fahrenheit" FROM dual;

--Second time execute
PROMPT '============== Second time execute with parameter is 2.3 ==============';
SELECT F_question6_project1(2.3) AS "Celcius to Fahrenheit" FROM dual;

--Third time execute
PROMPT '============== Third time execute with parameter is 56.56 ==============';
SELECT F_question6_project1(56.56) AS "Celcius to Fahrenheit" FROM dual;

PROMPT '****************** Question 07 ******************';
--Question 7:
--Use the formula of question 3, create a function that accepts the temperature in Fahrenheit to
--convert it into temperature in Celsius. Test your function at least 3 times with 3 different
--temperatures.

CREATE OR REPLACE FUNCTION F_question7_project1(p_number_in IN NUMBER) RETURN NUMBER AS
v_cel NUMBER;
v_fah NUMBER;
BEGIN
	v_fah := p_number_in;
	v_cel := (5/9) * (v_fah - 32);
	RETURN v_cel;
END;
/

--First time execute
PROMPT '============== First time execute with parameter is 53.6 ==============';
SELECT F_question7_project1(53.6) AS "Fahrenheit to Celcius" FROM dual;

--Second time execute
PROMPT '============== Second time execute with parameter is 36.14 ==============';
SELECT F_question7_project1(36.14) AS "Fahrenheit to Celcius" FROM dual;

--Third time execute
PROMPT '============== Third time execute with parameter is 133.808 ==============';
SELECT F_question7_project1(133.808) AS "Fahrenheit to Celcius" FROM dual;
SPOOL OFF;
