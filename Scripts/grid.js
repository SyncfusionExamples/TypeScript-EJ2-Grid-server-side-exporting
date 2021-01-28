"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ej2_grids_1 = require("@syncfusion/ej2-grids");
var ej2_data_1 = require("@syncfusion/ej2-data");
ej2_grids_1.Grid.Inject(ej2_grids_1.Toolbar);
var data = new ej2_data_1.DataManager({
    url: "Home/UrlDatasource",
    adaptor: new ej2_data_1.UrlAdaptor
});
var grid = new ej2_grids_1.Grid({
    dataSource: data,
    toolbar: ['ExcelExport', 'PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');
grid.toolbarClick = function (args) {
    if (args['item'].id === 'Grid_excelexport') {
        grid.serverExcelExport("Home/ExcelExport");
    }
    if (args['item'].id === 'Grid_pdfexport') {
        grid.serverPdfExport("Home/PdfExport");
    }
};
//# sourceMappingURL=grid.js.map