USE employee_trackerDB;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 1, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jake", "Allen", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mary", "Blake", 3, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Rogers", 4, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ann", "Ramirez", 5, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Julia", "Rico", 6, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Camila", "Sodi", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ricardo", "Martinez", 4, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Liam", "Gonzalez", 6, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Martin", "Garcia", 2, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 100000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 70000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Sales", 90000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales", 60000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Accountant", 80000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 50000, 3);

INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Finance");