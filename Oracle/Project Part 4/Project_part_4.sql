--Name: Hoang Truong
--Student ID: 202130169

SPOOL "C:\Truong\Lasalle College\Fall 2022\Database II\Assignment\Project Part 4\Project_part_4_Spool.txt"
CONNECT sys/sys as sysdba;
DROP USER truong363 CASCADE;
CREATE USER truong363 IDENTIFIED BY 123;
GRANT connect, resource TO truong363;
CONNECT truong363/123;

SET SERVEROUTPUT ON;
SELECT to_char(sysdate,'DD Month YYYY Day HH:MI:SS') AS "TimeLine" FROM dual;
PROMPT '============== Question 1 ==============';
--Create a procedure that accepts 3 parameters, the first two are of mode IN with number as
--their datatype and the third one is of mode OUT in form of Varchar2. The procedure will
--compare the first two numbers and output the result as EQUAL, or DIFFERENT.
--Create a second procedure called L8Q1 that accepts the two sides of a rectangle. The
--procedure will calculate the area and the perimeter of the rectangle. Use the procedure
--created previously to display if the shape is a square or a rectangle. The following are the
--example on how we execute the procedure and the expected output.

CREATE OR REPLACE PROCEDURE P_compare (p_num1 IN NUMBER, p_num2 IN NUMBER, p_output OUT VARCHAR2) AS
BEGIN
	IF p_num1 = p_num2 THEN
		p_output := 'EQUAL';
	ELSE
		p_output := 'DIFFERENT';
	END IF;
END;
/

CREATE OR REPLACE PROCEDURE L8Q1 (p_side1 IN NUMBER, p_side2 IN NUMBER) AS
	v_shape VARCHAR2(50);
	v_output_compare VARCHAR2(50);
	v_perimeter NUMBER := (p_side1 + p_side2) * 2;
	v_area NUMBER := p_side1 * p_side2;
BEGIN
	P_compare(p_side1, p_side2, v_output_compare);
	IF v_output_compare = 'EQUAL' THEN
		v_shape := 'square';
	ELSE
		v_shape := 'rectangle';
	END IF;
	DBMS_OUTPUT.PUT_LINE('The area of a ' || v_shape || ' size ' || p_side1 ||' by ' || p_side2 ||' is '|| v_area ||'. It''s perimeter is ' || v_perimeter||'.');

END;
/
PROMPT '************** First Test with Square result **************';
EXEC L8Q1(2,2)

PROMPT '************** Second Test with Rectangle result **************';
EXEC L8Q1(2,3)

PROMPT '============== Question 2 ==============';
--Create a pseudo function called pseudo_fun that accepts 2 parameters represented the
--height and width of a rectangle. The pseudo function should return the area and the
--perimeter of the rectangle.
--Create a second procedure called L4Q2 that accepts the two sides of a rectangle. The
--procedure will use the pseudo function to display the shape, the area and the perimeter.
CREATE OR REPLACE FUNCTION pseudo_fun(p_height IN NUMBER, p_width IN NUMBER, p_perimeter OUT NUMBER) RETURN NUMBER AS
	v_area NUMBER := p_height * p_width;
BEGIN
	p_perimeter := (p_height + p_width) * 2;
	RETURN v_area;
END;
/

CREATE OR REPLACE PROCEDURE L4Q2(p_side1 IN NUMBER, p_side2 IN NUMBER) AS
	v_shape VARCHAR2(50);
	v_area NUMBER;
	v_perimeter NUMBER;
BEGIN
	v_area := pseudo_fun(p_side1, p_side2, v_perimeter);
	IF p_side1 = p_side2 THEN
		v_shape := 'square';
	ELSE
		v_shape := 'rectangle';
	END IF;
	DBMS_OUTPUT.PUT_LINE('The area of a ' || v_shape || ' size ' || p_side1 ||' by ' || p_side2 ||' is '|| v_area ||'. It''s perimeter is ' || v_perimeter||'.');
END;
/

PROMPT '************** First Test with Square result **************';
EXEC L4Q2(2,2);

PROMPT '************** Second Test with Rectangle result **************';
EXEC L4Q2(2,3);

PROMPT '============== Question 3 ==============';
--Create a pseudo function that accepts 2 parameters represented the inv_id, and the
--percentage increase in price. The pseudo function should first update the database with
--the new price then return the new price and the quantity on hand.
--Create a second procedure called L4Q3 that accepts the inv_id and the percentage
--increase in price. The procedure will use the pseudo function to display the new value of
--the inventory (hint: value = price X quantity on hand)
CONNECT des02/des02;
SET SERVEROUTPUT ON;

--Solution 1
CREATE OR REPLACE FUNCTION F_update_price(p_inv_id IN inventory.inv_id%TYPE, p_percentage IN NUMBER, p_inv_qoh OUT inventory.inv_qoh%TYPE) RETURN NUMBER AS
	v_inv_price inventory.inv_price%TYPE;
	v_new_price NUMBER;
BEGIN
	SELECT inv_price, inv_qoh
	INTO v_inv_price, p_inv_qoh
	FROM inventory
	WHERE p_inv_id = inv_id;

	v_new_price := (v_inv_price*p_percentage/100) + v_inv_price;
	UPDATE inventory SET inv_price = v_new_price WHERE inv_id = p_inv_id;
	COMMIT;
	RETURN v_new_price;
END;
/

CREATE OR REPLACE PROCEDURE L4Q3(p_inv_id IN inventory.inv_id%TYPE, p_percentage IN NUMBER) AS
	v_inv_price NUMBER;
	v_inv_qoh inventory.inv_qoh%TYPE;
	v_value NUMBER;
BEGIN
	v_inv_price := F_update_price(p_inv_id, p_percentage, v_inv_qoh);
	v_value := v_inv_price * v_inv_qoh;
	DBMS_OUTPUT.PUT_LINE('The new value of the inventory with inventory ID ' || p_inv_id ||' is: '|| v_value );
END;
/
PROMPT '************** First Test *************';
EXEC L4Q3(1,10);

PROMPT '************** Second Test **************';
EXEC L4Q3(2,20);


-- Solution 2
CREATE OR REPLACE PROCEDURE P_p4q3A(p_inv_id_price IN OUT NUMBER, p_percent_qoh IN OUT NUMBER) AS
	v_price inventory.inv_price%TYPE;
	v_qoh inventory.inv_qoh%TYPE;
	v_new_price NUMBER;
BEGIN
	SELECT inv_price, inv_qoh
	INTO v_price, v_qoh
	FROM inventory
	WHERE inv_id = p_inv_id_price;

	v_new_price := v_price + v_price * p_percent_qoh / 100;
	UPDATE inventory SET inv_price = v_new_price WHERE p_inv_id_price = inv_id;
	COMMIT;
	p_inv_id_price := v_new_price;
	p_percent_qoh := v_qoh;
EXCEPTION
	WHEN NO_DATA_FOUND THEN
	DBMS_OUTPUT.PUT_LINE('Inventory number '||p_inv_id_price || ' doesn''t exist!');
END;
/
CREATE OR REPLACE PROCEDURE P_p4q3B (p_inv_id IN NUMBER, p_percent IN NUMBER) AS
	v_inv_id_price NUMBER := p_inv_id;
	v_in_percent_qoh NUMBER := p_percent;
	v_value NUMBER;
BEGIN
	P_p4q3A(v_inv_id_price,v_in_percent_qoh);
	
	IF v_inv_id_price != p_inv_id THEN
	v_value := v_inv_id_price * v_in_percent_qoh;
	DBMS_OUTPUT.PUT_LINE('The new value of the inventory with inventory ID ' ||p_inv_id ||' is: '|| v_value );
	EXCEPTION
	WHEN NO_DATA_FOUND THEN
	DBMS_OUTPUT.PUT_LINE('Inventory number '||p_inv_id || ' doesn''t exist!');
END;
/

EXEC P_p4q3B(35,100);
SPOOL OFF;
--"C:\Truong\Lasalle College\Fall 2022\Database II\Assignment\Project Part 4\Project_part_4.sql"