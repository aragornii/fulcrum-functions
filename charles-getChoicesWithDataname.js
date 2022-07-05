var form = this.form
var field_dataname= "job"

var job = form.elements.filter( i => field_dataname == i.data_name )[0];

PLUCK(job.choices,"value")