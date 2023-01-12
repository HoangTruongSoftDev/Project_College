-- Hoang Truong
-- 202130169

SPOOL "C:\Truong\Lasalle College\Fall 2022\Database II\Assignment\Project part BONUS\Project_Bonus_Spool.txt"
CONNECT sys/sys as sysdba;
SELECT TO_DATE(SYSDATE,'DD/MM/YYYY Day HH:MI:SS') AS "TIMELINE" FROM Dual;
PROMPT ************************ QUESTION 1 ************************;
--Create a view containing item description, item_id, price, color, inventory_id, size
--of all the inventory of clearwater database.
--Can we UPDATE, INSERT directly TO the view? If NOT, can you provide a solution?

GRANT CREATE VIEW TO des02;
CONNECT des02/des02;

CREATE OR REPLACE VIEW inventory_view AS
SELECT item.item_desc, inventory.item_id, inventory.inv_price, inventory.color, inventory.inv_id, inventory.inv_size
FROM item
JOIN inventory
ON item.item_id = inventory.item_id
JOIN color
ON inventory.color = color.color;



CREATE OR REPLACE TRIGGER inventory_view_trigger
INSTEAD OF UPDATE OR INSERT ON inventory_view
FOR EACH ROW

BEGIN
--IF INSERTING THEN
--	INSERT INTO item(item_desc, item_id) VALUES (:NEW.item_desc, :NEW.item_id);
--	INSERT INTO color VALUES (:NEW.color);
--	INSERT INTO inventory(inv_price, item_id, color, inv_id,inv_size) VALUES (:NEW.inv_price,:NEW.item_id, :NEW.color,:NEW.inv_id,:NEW.inv_size);
--ELSIF UPDATING THEN

	--FOR	each_color in (SELECT * FROM color) LOOP
	--	IF 
	--IF :NEW.color = (SELECT * FROM color) THEN		
		
	--ELSE
	--	INSERT INTO color VALUES(:NEW.color);
	--END IF;
	
	UPDATE item SET item_desc = :NEW.item_desc, item_id = :NEW.item_id
	WHERE item_id = :NEW.item_id;
	UPDATE inventory SET inv_price = :NEW.inv_price, item_id = :NEW.item_id, color = :NEW.color, inv_id = :NEW.inv_id,inv_size = :NEW.inv_size
	WHERE inv_id = :NEW.inv_id AND item_id = :NEW.item_id;
--END IF;
END;
/

UPDATE inventory_view SET color = 'Blue' WHERE inv_id  = 2;
UPDATE inventory_view SET item_desc = 'My Name' WHERE item_id = 2;
INSERT INTO inventory_view VALUES('Truong',3, 10, 'Navy', 3, 'M');
PROMPT ************************ QUESTION 2 ************************;
--Create a view containing course name,
--credit, student name, c_sec_id, SEC NUM, grade of all course section taken by a
--student.
--Can we UPDATE, INSERT directly TO the view?
--If NOT, can you provide a solution?

CONNECT sys/sys as sysdba;
GRANT CREATE VIEW TO des03;
CONNECT des03/des03;

CREATE OR REPLACE VIEW course_view AS
SELECT COURSE.course_name, COURSE.credits, student.s_last, student.s_first, COURSE_SECTION.c_sec_id, COURSE_SECTION.sec_num, ENROLLMENT.grade
FROM COURSE
JOIN COURSE_SECTION
ON COURSE.course_id = COURSE_SECTION.course_id
JOIN ENROLLMENT
ON COURSE_SECTION.c_sec_id = ENROLLMENT.c_sec_id
JOIN student
ON ENROLLMENT.s_id = student.s_id;


CREATE OR REPLACE TRIGGER course_view_trigger 
INSTEAD OF  UPDATE OR INSERT ON course_view
FOR EACH ROW
BEGIN
		UPDATE student SET s_last = :NEW.s_last WHERE s_id IN (SELECT s_id FROM enrollment WHERE c_sec_id = :NEW.c_sec_id);
		UPDATE course SET course_name = :NEW.course_name, credits = :NEW.credits WHERE course_id IN (SELECT course_id FROM COURSE_SECTION WHERE c_sec_id = :NEW.c_sec_id);
		UPDATE COURSE_SECTION SET c_sec_id = :NEW.c_sec_id, sec_num = :NEW.sec_num WHERE c_sec_id = :NEW.c_sec_id;
		UPDATE ENROLLMENT SET grade = :NEW.grade  WHERE c_sec_id = :NEW.c_sec_id;
	
END;
/
UPDATE course_view SET CREDITS = 10, SEC_NUM = 10, s_first = 'Truong' WHERE	c_sec_id = 12;
INSERT INTO course_view VALUES ('Programming', 5, 'Pham', 'Truong', 12, 5,'A');
SPOOL OFF