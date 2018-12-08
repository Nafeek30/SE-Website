import DataBase from "./DataBase.js";
import CoordinateSet from "./CoordinateSet.js";

export default class CsvDataBase extends DataBase
{
    getData()
    {
        return this._implementor.getData();
    }

    uploadData(csv)
    {
        if(typeof csv !== "undefined")
            this._implementor.uploadData(csv);
        else
            throw new TypeError("Not CSV file.");
    }
}

