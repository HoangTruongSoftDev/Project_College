--Name: Hoang Truong
--StudentID: 202130169
CONNECT sys/sys as sysdba
DROP USER Project_part2 CASCADE;
CREATE USER Project_part2 IDENTIFIED BY 123;
GRANT connect,resource TO Project_part2;
CONNECT Project_part2/123
SPOOL "C:\Truong\Lasalle College\Fall 2022\Database II\Assignment\Project Part 2\Project_part_2_Spool.txt"
SET serveroutput ON;
SELECT to_char(sysdate, 'DD Month YYYY Day HH:MI:SS') AS "TIMELINE" FROM dual;
Prompt '***************** Project Part 2 *****************';
Prompt '================= Question 1 ================='
--Create a function that accepts 2 numbers to calculate the product of them. Test your
--function in SQL*Plus

CREATE OR REPLACE FUNCTION F_product_of_2_numbers(p_num_in1 IN NUMBER, p_num_in2 NUMBER) RETURN NUMBER AS
	v_number1 NUMBER := p_num_in1;
	v_number2 NUMBER := p_num_in2;
	v_product NUMBER;
BEGIN
	v_product := v_number1 * v_number2;
	RETURN v_product;
END;
/

Prompt '================= Test first time with 2 parameters: 2 and 3 =================';
SELECT F_product_of_2_numbers(2,3) AS "2 times 3" FROM dual;

Prompt '=================Test second time with 2 parameters: 8 and 9 =================';
SELECT F_product_of_2_numbers(8,9) AS "8 times 9" FROM dual;

Prompt '================= Question 2 ================='
-- Create a procedure that accepts 2 numbers and use the function created in question 1
--to display the following
-- For a rectangle of size .x. by .y. the area is .z.
--where x, y is the values supplied on run time by the user
--and z is the values calculated using the function of question 1.
--Test your procedure in SQL*Plus and hand in code + result for 2cases.

CREATE OR REPLACE PROCEDURE P_area_of_square(p_height IN NUMBER, p_width IN NUMBER) AS
	v_height NUMBER := p_height;
	v_width NUMBER := p_width;
	v_area NUMBER;
BEGIN
	v_area := F_product_of_2_numbers(v_height,v_width);
	DBMS_OUTPUT.PUT_LINE('For a rectangle of size ' || v_height || ' by '|| v_width ||' the area is '|| v_area|| '.');
END;
/
Prompt '================= Test first time with 2 parameters: 6 and 8 =================';
Exec P_area_of_square(6,8);
Prompt '================= Test second time with 2 parameters: 9 and 10 =================';
Exec P_area_of_square(9,10);

Prompt '================= Question 3 ================='
 --Modify procedure of question 2 to display “square” when x and y are equal in length.
CREATE OR REPLACE PROCEDURE P_area_of_square(p_height IN NUMBER, p_width IN NUMBER) AS
	v_height NUMBER := p_height;
	v_width NUMBER := p_width;
	v_area NUMBER;
	v_text_result VARCHAR2(50);
BEGIN
	IF v_height = v_width THEN
		v_text_result := 'square';
	ELSE
		v_text_result := 'rectangle';
	END IF;
	v_area := F_product_of_2_numbers(v_height,v_width);
	DBMS_OUTPUT.PUT_LINE('For a ' || v_text_result ||' of size ' || v_height || ' by '|| v_width ||' the area is '|| v_area|| '.');
END;
/

Prompt '================= Test first time with 2 parameters: 6 and 7 =================';
Exec P_area_of_square(6,7);
Prompt '================= Test second time with 2 parameters: 5 and 5 =================';
Exec P_area_of_square(5,5);

Prompt '================= Question 4 ================='
--Create a procedure that accepts a number represent Canadian dollar and a letter
--represent the new currency. The procedure will convert the Canadian dollar to the new
--currency

CREATE OR REPLACE PROCEDURE P_exchange_currency(p_canadian_dollar IN NUMBER, p_letter_currency IN VARCHAR2) AS
	v_canadian_dollar NUMBER := p_canadian_dollar;
	v_unit_currency VARCHAR2(50);
	v_result_exchange NUMBER;
	v_letter_currency VARCHAR2(50) := p_letter_currency;
BEGIN
	IF v_letter_currency = 'E' THEN
		v_result_exchange := v_canadian_dollar * 1.5;
		v_unit_currency := 'EURO';
	ELSIF v_letter_currency = 'Y' THEN
		v_result_exchange := v_canadian_dollar * 100;
		v_unit_currency := 'YEN';
	ELSIF v_letter_currency = 'V' THEN
		v_result_exchange := v_canadian_dollar * 10000;
		v_unit_currency := 'Viet Nam DONG';
	ELSIF v_letter_currency = 'Z' THEN
		v_result_exchange := v_canadian_dollar * 1000000;
		v_unit_currency := 'Endora ZIP';
	END IF;
	DBMS_OUTPUT.PUT_LINE('For ' || v_canadian_dollar || ' dollars Canadian, you will have ' || v_result_exchange || ' ' || v_unit_currency);
END;
/
Prompt '================= Test first time with 2 parameters: 2 and Y =================';
Exec P_exchange_currency(2,'Y')
Prompt '================= Test second time with 2 parameters: 3 and V =================';
Exec P_exchange_currency(3,'V');

Prompt '================= Question 5 ================='
--Create a function called YES_EVEN that accepts a number to determine if the number is
--EVEN or not. The function will return TRUE if the number inserted is EVEN otherwise
--the function will return FALSE

CREATE OR REPLACE FUNCTION YES_EVEN(p_checking_number IN NUMBER) RETURN BOOLEAN AS
	v_checking_number NUMBER := p_checking_number;
	v_result BOOLEAN := FALSE;
BEGIN
	IF MOD(v_checking_number, 2) = 0 THEN
		v_result := TRUE;
	END IF;
	RETURN v_result;
END;
/

Prompt '================= Question 6 ================='
--Create a procedure that accepts a numbers and uses the function of question 5 to
--print out EXACTLY the following:
--Number … is EVEN OR Number … is ODD

CREATE OR REPLACE PROCEDURE L2Q6 (p_checking_number IN NUMBER) AS
	v_checking_number NUMBER := p_checking_number;
	v_result_phrase VARCHAR2(50) := 'ODD';
BEGIN
	IF YES_EVEN(v_checking_number) THEN
		v_result_phrase := 'EVEN';
	END IF;
	DBMS_OUTPUT.PUT_LINE('Number ' || v_checking_number || ' is ' || v_result_phrase);
END;
/
Prompt '================= Test first time with a parameter: 6 ================='
Exec L2Q6(6)
Prompt '================= Test second time with a parameter: 5 ================='
Exec L2Q6(5);

Prompt '================= BONUS QUESTION ================='
CREATE OR REPLACE PROCEDURE L2QBonus(p_money IN NUMBER, p_initial_currency IN VARCHAR2, p_converted_currency IN VARCHAR2) AS
	v_money NUMBER := p_money;
	v_initial_currency VARCHAR2(50) := p_initial_currency;
	v_converted_currency VARCHAR2(50) := p_converted_currency;
	v_canadian_dollar NUMBER;
	v_initial_unit VARCHAR2(50);
	v_converted_unit VARCHAR2(50);
	v_result_exchange NUMBER;
BEGIN
IF v_initial_currency = 'E' THEN
		v_canadian_dollar := v_money / 1.5;
		v_initial_unit := 'EURO';
	ELSIF v_initial_currency = 'Y' THEN
		v_canadian_dollar := v_money / 100;
		v_initial_unit := 'YEN';
	ELSIF v_initial_currency = 'V' THEN
		v_canadian_dollar := v_money / 10000;
		v_initial_unit := 'Viet Nam DONG';
	ELSIF v_initial_currency = 'Z' THEN
		v_canadian_dollar := v_money / 1000000;
		v_initial_unit := 'Endora ZIP';
	ELSIF v_initial_currency = 'C' THEN
		v_canadian_dollar := v_money;
		v_initial_unit := 'dollars Canadian';
END IF;

IF v_converted_currency = 'E' THEN
		v_result_exchange := v_canadian_dollar * 1.5;
		v_converted_unit := 'EURO';
	ELSIF v_converted_currency = 'Y' THEN
		v_result_exchange := v_canadian_dollar * 100;
		v_converted_unit := 'YEN';
	ELSIF v_converted_currency = 'V' THEN
		v_result_exchange := v_canadian_dollar * 10000;
		v_converted_unit := 'Viet Nam DONG';
	ELSIF v_converted_currency = 'Z' THEN
		v_result_exchange := v_canadian_dollar * 1000000;
		v_converted_unit := 'Endora ZIP';
	ELSIF v_converted_currency = 'C' THEN
		v_result_exchange := v_canadian_dollar;
		v_converted_unit := 'dollars Canadian';
END IF;
DBMS_OUTPUT.PUT_LINE('For ' || v_money || ' ' || v_initial_unit ||', you will have ' || v_result_exchange || ' ' || v_converted_unit);
END;
/
Prompt '================= Test first time with a parameter: 6 ================='
Exec L2Qbonus(2,'Y','V')
Prompt '================= Test second time with a parameter: 5 ================='
Exec L2Qbonus(20000, 'V', 'C');
SPOOL OFF;
