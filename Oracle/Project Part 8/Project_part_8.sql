-- Hoang Truong
-- Student ID: 202130169

SPOOL "C:\Truong\Lasalle College\Fall 2022\Database II\Assignment\Project Part 8\Project_part_8_Spool.txt";
SELECT To_char(sysdate,'DD MM YYYY Day HH:MI:SS') AS "TimeLine" FROM Dual;
CONNECT des02/des02
PROMPT =============== Question 1 ===============;
--Modify the package order_package (Example of lecture on PACKAGE) by adding 
--function, procedure to verify the quantity on hand before insert a row in 
--table order_line and to update also the quantity on hand of table inventory.

CREATE OR REPLACE PACKAGE order_package IS
      global_inv_id NUMBER(6);
      global_quantity NUMBER(6);
      PROCEDURE create_new_order(current_c_id NUMBER, 
              current_meth_pmt VARCHAR2, 
              current_os_id NUMBER);
      PROCEDURE create_new_order_line(current_o_id NUMBER);
END;
/
CREATE SEQUENCE order_sequence START WITH 7;

CREATE OR REPLACE PACKAGE BODY order_package IS

      PROCEDURE create_new_order(current_c_id NUMBER, current_meth_pmt VARCHAR2, 
                                 current_os_id NUMBER) AS
              current_o_id NUMBER;
            BEGIN
               SELECT order_sequence.NEXTVAL
               INTO   current_o_id
               FROM   dual;
               INSERT INTO orders 
VALUES(current_o_id, sysdate, current_meth_pmt,
                        current_c_id, current_os_id);
               create_new_order_line(current_o_id);
             COMMIT;
            END create_new_order;

      PROCEDURE create_new_order_line(current_o_id NUMBER) AS
            BEGIN
               INSERT INTO order_line 
               VALUES(current_o_id, global_inv_id, global_quantity);
               COMMIT;
            END create_new_order_line;
    END;
    /
SPOOL OFF