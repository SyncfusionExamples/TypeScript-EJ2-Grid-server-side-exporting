import { Grid, Toolbar } from '@syncfusion/ej2-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
Grid.Inject(Toolbar);
var data = new DataManager({
    url: "Home/UrlDatasource",
    adaptor: new UrlAdaptor
});
var grid = new Grid({
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
        //grid.serverExcelExport("Home/ExcelExport");
    }
    if (args['item'].id === 'Grid_pdfexport') {
        // grid.serverPdfExport("Home/PdfExport");
    }
};
