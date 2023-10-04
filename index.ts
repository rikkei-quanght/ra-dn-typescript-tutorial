import DataStorage from "./DataStorage";

const storageNumber = new DataStorage<number>();
storageNumber.addRow(1);
storageNumber.addRow(3);
storageNumber.addRow(3);
storageNumber.display();

const storageString = new DataStorage<string>();
storageString.addRow('a');
storageString.addRow('b');
storageString.addRow('c');
storageString.display();
