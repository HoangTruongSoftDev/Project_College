--Name: Hoang Truong
--Student ID: 202130169


SPOOL "C:\Truong\Lasalle College\Fall 2022\Database II\Assignment\Project Part 5\Project_part_5_Spool.txt"
CONNECT sys/sys as sysdba;
SELECT to_char(sysdate,'DD Month YYYY Day HH:MI:SS') AS "TimeLine" FROM Dual;
PROMPT '============== Question 1 ==============';
--Run script 7northwoods.
--Using cursor to display many rows of data, create a procedure to display the all
--the rows of table term.

CONNECT des03/des03;
SET SERVEROUTPUT ON;
CREATE OR REPLACE PROCEDURE P_p5q1 AS
	CURSOR curr_term IS
		SELECT term_id, term_desc, status
		FROM term;
	v_term_id term.term_id%TYPE;
	v_term_desc term.term_desc%TYPE;
	v_status term.status%TYPE;
BEGIN
	OPEN curr_term;
	FETCH curr_term INTO v_term_id, v_term_desc, v_status;
	WHILE curr_term%FOUND LOOP
		DBMS_OUTPUT.PUT_LINE('Term ID is: ' || v_term_id || '. Term Description is: ' || v_term_desc || '. Status is: ' || v_status);
		FETCH curr_term INTO v_term_id, v_term_desc, v_status;
	END LOOP;
	CLOSE curr_term;
END;
/
PROMPT '************** Testing **************';
EXEC P_p5q1;

PROMPT '============== Question 2 ==============';
--Run script 7clearwater.
--Using cursor to display many rows of data, create a procedure to display the
--following data from the database: Item description, price, color, and quantity on
--hand. 
connect des02/des02;
SET SERVEROUTPUT ON;
CREATE OR REPLACE PROCEDURE P_p5q2 AS 
	CURSOR curr_inventory_item IS
		SELECT i.item_desc, inv.inv_price, inv.color, inv.inv_qoh
		FROM inventory inv
		JOIN item i
		ON inv.item_id = i.item_id;
	v_item_desc item.item_desc%TYPE;
	v_inv_price inventory.inv_price%TYPE;
	v_color inventory.color%TYPE;
	v_inv_qoh inventory.inv_qoh%TYPE;
BEGIN
	OPEN curr_inventory_item;
	LOOP 
		FETCH curr_inventory_item INTO v_item_desc,v_inv_price, v_color, v_inv_qoh;
		DBMS_OUTPUT.PUT_LINE('The item descrption: ' || v_item_desc || '. The price: ' || v_inv_price || '. The color: ' || v_color || '. Quantity on Hand: ' ||v_inv_qoh);
	EXIT WHEN curr_inventory_item%NOTFOUND = TRUE;
	END LOOP;
	CLOSE curr_inventory_item;
END;
/
PROMPT '************** Testing **************'
EXEC P_p5q2;

PROMPT '============== Question 3 ==============';
--Run script 7clearwater.
--Using cursor to update many rows of data, create a procedure that accepts a
--number represent the percentage increase in price. The procedure will display the
--old price, new price and update the database with the new price.
CREATE OR REPLACE PROCEDURE P_p5q3(percent_increase IN NUMBER) AS
	CURSOR curr_price_increase IS
		SELECT inv_id, inv_price FROM inventory;
	v_new_price inventory.inv_price%TYPE;
	v_old_price inventory.inv_price%TYPE;
	v_inv_id inventory.inv_id%TYPE;
BEGIN
	OPEN curr_price_increase;
	FETCH curr_price_increase INTO v_inv_id,v_old_price;
	WHILE curr_price_increase%FOUND LOOP
		v_new_price := v_old_price + v_old_price * percent_increase/100;
		DBMS_OUTPUT.PUT_LINE('The old price of inventory number ' || v_inv_id || ' is: '|| v_old_price ||'. The new price is: ' || v_new_price);
		UPDATE inventory SET  inv_price = v_new_price  WHERE inv_id = v_inv_id;
		COMMIT;
		FETCH curr_price_increase INTO v_inv_id,v_old_price;
	END LOOP;
	CLOSE  curr_price_increase;
END;
/
PROMPT '************** Testing **************'
EXEC P_p5q3(100);

PROMPT '============== Question 4 ==============';
--Run script scott_emp_dept.
--Create a procedure that accepts a number represent the number of employees
--who earns the highest salary. Display employee name and his/her salary
connect scott/tiger;
SET SERVEROUTPUT ON;
CREATE OR REPLACE PROCEDURE L5Q4 (quantity_highest IN NUMBER) AS
	CURSOR curr_high IS
		SELECT ename, sal FROM emp ORDER BY sal DESC;
	v_ename emp.ename%TYPE;
	v_sal emp.sal%TYPE;
BEGIN
	DBMS_OUTPUT.PUT_LINE('Top ' || quantity_highest || ' employees are');
	OPEN curr_high;
	FETCH curr_high INTO v_ename, v_sal;
		LOOP
			DBMS_OUTPUT.PUT_LINE(v_ename || ' ' || v_sal);
			FETCH curr_high INTO v_ename, v_sal;
		EXIT WHEN curr_high%ROWCOUNT=quantity_highest + 1;
		END LOOP;
	CLOSE curr_high;
END;
/
PROMPT '************** First test with 2 employees with highest **************'
EXEC L5Q4(2)
PROMPT '************** Second test with 5 employees with highest **************'
EXEC L5Q4(5)
SPOOL OFF

PROMPT '============== Question 5 ==============';
--Modify question 4 to display ALL employees who make the top salary entered
CREATE OR REPLACE PROCEDURE L5Q5(quantity_highest IN NUMBER) AS
	CURSOR curr_high IS
		SELECT ename, sal FROM emp ORDER BY sal DESC;
	v_ename emp.ename%TYPE;
	v_sal emp.sal%TYPE;
	v_count NUMBER := 0;
	v_current_sal NUMBER := 0;
BEGIN
	DBMS_OUTPUT.PUT_LINE('Employee who make the top' || quantity_highest || 'salary are');
	OPEN curr_high;
	FETCH curr_high INTO v_ename, v_sal;
	LOOP
		IF v_sal != v_current_sal THEN
			v_count := v_count + 1;
			v_current_sal := v_sal;
		END IF;
		IF v_count > quantity_highest THEN
			EXIT;
		ELSE
			DBMS_OUTPUT.PUT_LINE(v_ename || ' '|| v_sal);
		END IF;
		FETCH curr_high INTO v_ename, v_sal;
		
	END LOOP;
	CLOSE curr_high;
END;
/
PROMPT '************** First test with 2 highest salaries **************'
EXEC L5Q5(2);
PROMPT '************** First test with 10 highest salaries **************'
EXEC L5Q5(10);
--"C:\Truong\Lasalle College\Fall 2022\Database II\Assignment\Project Part 5\Project_part_5.sql"