var form = this.form;
var sectionSupervisionObra_dataname = "sec5";
var repeatableVisitasSupervision_dataname = "sec5_1";
var sectionTemp_dataname = "temp_section";
var repeatableRegistroLlegada_dataname = "llegada_rep";
var llegada_dataname= "llegada_material_2";

var sectionSupervisionObra = form.elements.filter(i => sectionSupervisionObra_dataname == i.data_name)[0];
var repeatableVisitasSupervision = sectionSupervisionObra.elements.filter(i => repeatableVisitasSupervision_dataname == i.data_name)[0];
var sectionTemp = repeatableVisitasSupervision.elements.filter(i => sectionTemp_dataname == i.data_name)[0];
var repeatableRegistroLlegada = sectionTemp.elements.filter(i => repeatableRegistroLlegada_dataname == i.data_name)[0];

var llegadaMaterialSingleChoice = repeatableRegistroLlegada.elements.filter(i => llegada_dataname == i.data_name)[0];

SETRESULT(JSON.stringify(llegadaMaterialSingleChoice.choices));