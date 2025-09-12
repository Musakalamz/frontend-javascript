/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// create a row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// insert row and store its ID
const newRowID: RowID = CRUD.insertRow(row);

// update row with age = 23
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// delete the row
CRUD.deleteRow(newRowID);
